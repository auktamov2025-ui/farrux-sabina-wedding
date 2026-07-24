import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farrux va Sabina nikoh to'yi",
    short_name: 'Farrux va Sabina',
    description: "Farrux va Sabinaning nikoh to'yiga taklifnoma.",
    start_url: '/',
    display: 'standalone',
    background_color: '#090806',
    theme_color: '#090806',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
