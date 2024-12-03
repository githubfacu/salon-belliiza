---
layout: home

hero:
  name: "Salon Belliiza"
  text: "Tu belleza, nuestra pasión"
  tagline: Descubre una experiencia única de belleza y bienestar en nuestro salón
  image:
    src: /hero-image.jpg
    alt: Salon Belliiza Salon
  actions:
    - theme: brand
      text: Reservar Turno
      link: /reservar
    - theme: alt
      text: Nuestros Servicios
      link: /servicios

features:
  - icon: 💇‍♀️
    title: Cortes y Peinados
    details: Estilos modernos y clásicos adaptados a tu personalidad
  - icon: 💅
    title: Manicura y Pedicura
    details: Cuidados completos para tus manos y pies
  - icon: 🎨
    title: Coloración
    details: Las últimas tendencias en coloración y mechas
  - icon: ✨
    title: Tratamientos
    details: Tratamientos capilares y faciales personalizados
---

<div class="custom-layout">
  <div class="about-section">
  <h2>Bienvenidos a Salon Belliiza</h2>
  <p>En Salon Belliiza, creemos que cada persona merece sentirse hermosa y especial. Nuestro equipo de profesionales altamente capacitados está dedicado a realzar tu belleza natural y brindarte una experiencia inolvidable.</p>

  <h3>Por qué elegirnos</h3>
  <ul>
    <li>✓ Más de 10 años de experiencia</li>
    <li>✓ Productos de primera calidad</li>
    <li>✓ Ambiente relajado y acogedor</li>
    <li>✓ Atención personalizada</li>
    <li>✓ Últimas tendencias en belleza</li>
  </ul>
  </div>

  <div class="testimonials">
  <h3>Lo que dicen nuestros clientes</h3>

  <blockquote>
    "La mejor experiencia en un salón de belleza. El equipo es increíble y los resultados superaron mis expectativas."
    <footer>— María García</footer>
  </blockquote>

  <blockquote>
    "Profesionalismo y calidad en cada visita. ¡Mi lugar favorito para consentirme!"
    <footer>— Laura Martínez</footer>
  </blockquote>
  </div>
</div>

<style>
.custom-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .custom-layout {
    grid-template-columns: 1fr;
  }
}

.testimonials {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 8px;
}

.about-section {
  padding: 2rem;
}
</style>