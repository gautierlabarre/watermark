<script lang="ts">
    import { onMount } from "svelte";
    import Dropzone from "svelte-file-dropzone";
    import WatermarkItem from "./components/WatermarkItem.svelte";
    import WatermarkFontOptions from "./components/WatermarkFontOptions.svelte";
    import Preview from "./components/Preview.svelte";
    import Http from "./services/http.service";
    import type { Watermark } from "./types/watermark.type";
    import type { Font } from "./types/font.type";
    import { FontSize } from "./Enums/fontSize.enum";
    import { FontColor } from "./Enums/fontColor.enum";
    import { faPlus, faImage, faSpinner } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "fontawesome-svelte";

    let files = { accepted: [] }; // Can add rejected array.
    let uploadedImageName: string = null;
    let finalImage: string = null;
    let watermarks: Watermark[] = [];
    let font: Font = {
        size: FontSize.NORMAL,
        color: FontColor.BLACK,
    };
    let loading = false;

    onMount(() => {
        addWatermark(); // Display the first bloc of watermark to avoid a useless clic.
    });

    /**
     * Add new watermark to the watermark array.
     */
    function addWatermark(): void {
        watermarks = watermarks.concat({ x: 0, y: 0, content: "" });
    }

    /**
     * Delete watermark from watermarks array.
     * @param event
     */
    function deleteWatermark(event): void {
        if (watermarks.length < 2) {
            // Can't remove watermark if there is only one...
            return;
        }
        watermarks.splice(event.detail.index, 1);
        watermarks = watermarks;
    }

    /**
     * Event from Preview component to update watermark position
     * @param event
     */
    function updateWatermarkPosition(event) {
        watermarks[event.detail.watermarkId] = event.detail.watermark;
    }

    /**
     * Handle file upload. Send image to backend.
     * @param e
     */
    async function handleFilesSelect(e): Promise<void> {
        const { acceptedFiles } = e.detail;
        files.accepted = [...files.accepted, ...acceptedFiles];

        let formData = new FormData();
        files.accepted.forEach((file) => {
            formData.append("file", file);
        });

        uploadedImageName = await Http.sendImage(formData);

        // Handle error and 200 code.
    }

    /**
     * Delete preview to reset to upload state.
     */
    function resetPreview() {
        uploadedImageName = null;
        files.accepted = [];
    }

    /**
     * Calls backend to generate final image with watermarks displayed.
     */
    async function generateWatermarkedImage(): Promise<void> {
        loading = true;
        finalImage = await Http.generateWatermark(uploadedImageName, watermarks, font);
        loading = false;
    }
</script>

<main class="wrapper flex h-screen">
    <article class="main w-3/4 overflow-auto">
        {#if finalImage}
            <h1 class="flex justify-center uppercase bold my-3" data-cy="finalResult">Rendu final</h1>
            <img src={finalImage} alt="Watermarked" style="max-width: none;" data-cy="finalResultImage" />
        {:else if uploadedImageName}
            <Preview image={uploadedImageName} {watermarks} {font} on:delete={resetPreview} on:moved={updateWatermarkPosition} />
        {:else}
            <div class="flex flex-col items-center justify-center h-screen">
                <div class="w-3/4">
                    <Dropzone on:drop={handleFilesSelect} multiple={false}>
                        <p class="h-96 pt-44" data-cy="dropzone">Déposer votre image ici pour ajouter vos filigranes</p>
                    </Dropzone>
                </div>
            </div>
        {/if}
    </article>
    <aside class="aside w-1/4 overflow-y-auto overflow-x-none mr-2 p-2">
        <WatermarkFontOptions bind:font />

        {#each watermarks as item, i}
            <WatermarkItem bind:item index={i} on:delete={deleteWatermark} />
        {/each}

        <div class="w-full p-1 flex flex-col justify-center text-2xl font-sans mt-3 my-3" data-cy="addWatermark">
            <button class="btn btn-blue self-center rounded-full hover:ring-4 ring-indigo-300 ring-offset-2" on:click={addWatermark}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
        

        {#if uploadedImageName}
            <div class="flex flex-col w-full justify-center">
                <button class="btn {loading ? 'btn-gray' : 'btn-blue'} w-3/4 self-center uppercase" on:click={generateWatermarkedImage} data-cy="generateWatermark">
                    {#if loading}
                    <FontAwesomeIcon class="animate-spin"  icon={faSpinner} /> Chargement en cours...
                    {:else}
                    <FontAwesomeIcon icon={faImage} /> Générer l'image
                    {/if}
                </button>
            </div>
        {/if}
    </aside>
</main>
