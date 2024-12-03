# Galería de Trabajos

<script setup>
import { ref } from 'vue'

const trabajos = [
  {
    id: 1,
    categoria: 'Peinados',
    imagen: '/gallery/peinado1.jpg',
    descripcion: 'Peinado de novia'
  },
  {
    id: 2,
    categoria: 'Coloración',
    imagen: '/gallery/color1.jpg',
    descripcion: 'Balayage rubio'
  },
  {
    id: 3,
    categoria: 'Cortes',
    imagen: '/gallery/corte1.jpg',
    descripcion: 'Bob moderno'
  }
  // Aquí se agregarán más trabajos
]

const categoriaSeleccionada = ref('Todos')
</script>

<div class="galeria-container">
  <div class="filtros">
    <button 
      :class="{ active: categoriaSeleccionada === 'Todos' }"
      @click="categoriaSeleccionada = 'Todos'"
    >
      Todos
    </button>
    <button 
      :class="{ active: categoriaSeleccionada === 'Peinados' }"
      @click="categoriaSeleccionada = 'Peinados'"
    >
      Peinados
    </button>
    <button 
      :class="{ active: categoriaSeleccionada === 'Coloración' }"
      @click="categoriaSeleccionada = 'Coloración'"
    >
      Coloración
    </button>
    <button 
      :class="{ active: categoriaSeleccionada === 'Cortes' }"
      @click="categoriaSeleccionada = 'Cortes'"
    >
      Cortes
    </button>
  </div>

  <div class="galeria-grid">
    <div 
      v-for="trabajo in trabajos.filter(t => 
        categoriaSeleccionada === 'Todos' || 
        t.categoria === categoriaSeleccionada
      )"
      :key="trabajo.id"
      class="trabajo-item"
    >
      <img :src="trabajo.imagen" :alt="trabajo.descripcion">
      <div class="trabajo-info">
        <h3>{{ trabajo.categoria }}</h3>
        <p>{{ trabajo.descripcion }}</p>
      </div>
    </div>
  </div>
</div>

<style>
.galeria-container {
  padding: 2rem 0;
}

.filtros {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filtros button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filtros button.active {
  background: var(--vp-c-brand);
  color: white;
}

.galeria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.trabajo-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.trabajo-item:hover {
  transform: translateY(-5px);
}

.trabajo-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.trabajo-info {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
}

.trabajo-info h3 {
  margin: 0;
  color: var(--vp-c-brand);
}

.trabajo-info p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
}
</style>