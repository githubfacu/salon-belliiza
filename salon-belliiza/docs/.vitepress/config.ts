import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'es-ES',
  title: 'Salon Belliiza',
  description: 'Tu salón de belleza de confianza',
  head: [
    ['link', { rel: 'icon', href: '/hero-image.jpg' }],
    ['meta', { name: 'keywords', content: 'salón de belleza, Salon Belliiza, belleza, peluquería' }],
    ['meta', { name: 'author', content: 'Salon Belliiza' }],
    ['meta', { property: 'og:title', content: 'Salon Belliiza' }],
    ['meta', { property: 'og:description', content: 'Tu salón de belleza de confianza' }],
    ['meta', { property: 'og:image', content: '/hero-image.jpg' }]
  ],
  themeConfig: {
    // logo: '/hero-image.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Servicios', link: '/servicios' },
      { text: 'Galería', link: '/galeria' },
      { text: 'Precios', link: '/precios' },
      { text: 'Contacto', link: '/contacto' },
      { text: 'Iniciar Sesión', link: '/login' }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com' },
      { icon: 'facebook', link: 'https://facebook.com' }
    ],

    footer: {
      message: 'Hecho con ❤️ por Salon Belliiza',
      copyright: 'Copyright © 2024 Salon Belliiza'
    }
  }
});