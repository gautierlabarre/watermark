<script lang="ts">
    import FontColor from '../Enums/fontColor.enum';
    import FontSize from '../Enums/fontSize.enum';
    import type { Font } from '../types/font.type';

    export let font: Font;
</script>

<main>
    <div class="rounded bg-gray-200 w-full p-2 mb-2" data-cy="fontOptions">
        <div class="flex justify-between py-1">
            <h3 class="text-sm">Configuration de la police</h3>
        </div>

        <div class="p-2 rounded mt-1 cursor-pointer hover:bg-grey-lighter">
            <label class="block">
                <select class="block w-full text-xs" bind:value={font.size} data-cy="fontSizeOptions">
                    <option value={FontSize.SMALL}>Petit</option>
                    <option value={FontSize.NORMAL}>Normal</option>
                    <option value={FontSize.BIG}>Gros</option>
                    <option value={FontSize.HUGE}>Enorme</option>
                    <option value={FontSize.MASSIVE}>Gigantesque</option>
                </select>
            </label>
        </div>

        <div class="p-2 rounded cursor-pointer">
            <div class="block">
                <label class="inline-flex items-center ml-5 mr-10" data-cy="fontBlack">
                    <input type="radio" class="hover:bg-gray-300 hover:ring-2 ring-indigo-300 ring-offset-2" name="color" bind:group={font.color} value={FontColor.BLACK} checked />
                    <span class="ml-2">Noir</span>
                </label>
                <label class="inline-flex items-center" data-cy="fontWhite">
                    <input type="radio" class="hover:bg-gray-300 hover:ring-2 ring-indigo-300 ring-offset-2" name="color" bind:group={font.color} value={FontColor.WHITE} />
                    <span class="ml-2">Blanc</span>
                </label>
            </div>
        </div>
    </div>
</main>
