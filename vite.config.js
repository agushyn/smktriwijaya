import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // Pastikan file app.jsx atau app.tsx benar ada
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
