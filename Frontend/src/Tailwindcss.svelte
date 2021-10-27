<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {
        .btn {
            @apply py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 ring-offset-2 focus:ring-opacity-75;
        }

        .btn-blue {
            @apply bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-400;
        }

        .btn-gray {
            @apply bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-400;
        }

        .form-control {
            @apply rounded-md mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
        }
    }
</style>
