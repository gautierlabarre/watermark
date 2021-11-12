<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import Events from '../Enums/events.enum';
    import { draggable } from 'svelte-drag';
    import type { Font } from '../types/font.type';
    import type { Watermark } from '../types/watermark.type';
    import type { DragOptions } from 'svelte-drag';
    import FontService from '../services/font.service';
    import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from 'fontawesome-svelte';

    export let image: string;
    export let watermarks: Watermark[];
    export let font: Font;

    const dispatch = createEventDispatcher();
    let shift = 48; // Correct px to get the same output between preview and real watermarked image (due to <p> line-height)
    const url = 'http://localhost:8088/showImage/' + image; // Should put localhost:8088 in a variable to avoid magic string

    let mouseEndPosition = { x: 0, y: 0 };
    let mouseWhenDragStart = { x: 0, y: 0 };
    let options: DragOptions = { bounds: 'parent' };

    // Reactive method to display the proper difference in px between preview and incrusted text
    $: if (font) {
        shift = FontService.shiftCorrector(font); // Create a service for this...
    }

    /**
     * Event to delete preview and revert to upload state.
     */
    function resetPreview() {
        dispatch(Events.DELETE);
    }

    /**
     * Saves mouse position whenever the cursor move on the image.
     *
     * @param event
     */
    function handleMousemove(event) {
        mouseEndPosition.x = event.clientX;
        mouseEndPosition.y = event.clientY;
    }

    /**
     * Method to handle perfect positionning.
     * If the user clicks on the end and the middle of the watermark, the X and Y position of the cursor
     * will not be the correct placement of the beginning and top of the text.
     * So we have to save those positions and substract them to the x and y position of the draggedEnd event.
     * @param i position of watermark in watermarks
     * @param watermark
     */
    function draggedStart(i: number, watermark: Watermark) {
        mouseWhenDragStart.x = mouseWhenDragStart.x - watermark.x;
        mouseWhenDragStart.y = mouseWhenDragStart.y - watermark.y;
    }

    /**
     * We change the watermark positionning and send the event to the parent component.
     *
     * @param i
     * @param watermark
     * @param event
     */
    function draggedEnded(i: number, watermark: Watermark, event) {
        watermark.x = event.detail.offsetX;
        watermark.y = event.detail.offsetY;

        dispatch(Events.MOVED, { watermark, watermarkId: i });
    }
</script>

<div class="parentImage" on:mousemove={handleMousemove}>
    <h1 class="flex justify-center uppercase bold my-3">
        Prévisualisation
        <span data-cy="remove-preview" class="ml-3 cursor-pointer" on:click={resetPreview}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </span>
    </h1>

    <span>
        <img src={url} alt="Preview" class="uploadedImage" data-cy="uploadedImage" style="max-width: none" />

        <!-- This could be a component and watermark should be updated with svelte store. -->
        {#each watermarks as item, i}
            <p
                data-cy="watermark-preview-{i}"
                use:draggable={options}
                on:svelte-drag:end={(e) => draggedEnded(i, item, e)}
                on:svelte-drag:start={draggedStart(i, item)}
                class="{'watermark-' + i} {font.size} {font.color} cursor-move"
                style="left: 0px; top: {shift}px;"
            >
                {item.content}
            </p>
        {/each}
    </span>
</div>

<style>
    .parentImage {
        position: relative;
        left: 0;
        top: 0;
    }
    .parentImage p {
        position: absolute;
    }

    .black {
        color: black;
    }

    .white {
        color: white;
    }

    .small {
        font-size: 8px;
    }

    .normal {
        font-size: 16px;
    }

    .big {
        font-size: 32px;
    }

    .huge {
        font-size: 64px;
    }

    .massive {
        font-size: 128px;
    }
</style>
