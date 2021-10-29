import App from './App.svelte';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Tailwindcss from './Tailwindcss.svelte'; // Used to import tailwind with svelte. @tailwind or @import in css does not work

const app = new App({
    target: document.body,
});

export default app;
