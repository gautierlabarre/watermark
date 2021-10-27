<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { Events } from "../Enums/events.enum";
    import { faTimes } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "fontawesome-svelte";

    export let item;
    export let index;

    const dispatch = createEventDispatcher();

    /**
     * Event to delete item from list, in parent component.
     */
    function deleteItem() {
        dispatch(Events.DELETE, { index });
    }
</script>

<main>
    <div class="rounded bg-gray-100 w-full p-2 mb-2">
        <div class="flex justify-between py-1">
            <h3 class="text-sm">Filigrane n°{++index}</h3>
            <span class="h-4 fill-current text-gray-500 cursor-pointer" on:click={deleteItem} data-cy="remove-watermark-{index}">
                <FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div class="text-sm mt-2 border-t">
            <div class="p-2 rounded mt-1 cursor-pointer hover:bg-grey-lighter">
                <label class="block">
                    <!-- svelte-ignore a11y-autofocus -->
                    <textarea 
                    autofocus 
                    bind:value={item.content} 
                    class="block w-full form-control" 
                    rows="2" 
                    placeholder="Texte à afficher"
                    data-cy="textarea-{index}" />
                </label>
                <p class="m-2 text-gray-500 text-xs text-center">Glissez-déposez le texte sur l'image de gauche pour le placer où vous voulez.</p>
            </div>
        </div>
    </div>
</main>
