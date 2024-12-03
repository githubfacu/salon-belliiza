# Contacto

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')
const enviado = ref(false)

const enviarMensaje = () => {
  // Aquí se implementará el envío del formulario
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
    nombre.value = ''
    email.value = ''
    mensaje.value = ''
  }, 3000)
}
</script>

<div class="contacto-container">
<div class="info-contacto">
  <h2>Información de Contacto</h2>

  <h3>Ubicación</h3>
  <p>📍 Av. Principal 123, Ciudad</p>

  <h3>Horarios</h3>
  <ul>
    <li>Lunes a Viernes: 9:00 - 20:00</li>
    <li>Sábados: 9:00 - 18:00</li>
    <li>Domingos: Cerrado</li>
  </ul>

  <h3>Teléfonos</h3>
  <ul>
    <li>📞 (123) 456-7890</li>
    <li>📱 +54 9 11 1234-5678</li>
  </ul>

  <h3>Redes Sociales</h3>
  <ul>
    <li><a href="#">Instagram</a></li>
    <li><a href="#">Facebook</a></li>
    <li><a href="#">WhatsApp</a></li>
  </ul>
</div>

  <div class="formulario-contacto">
    <h2>Envíanos un mensaje</h2>
    <form @submit.prevent="enviarMensaje">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre"
          v-model="nombre"
          required
        >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email"
          v-model="email"
          required
        >
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea 
          id="mensaje"
          v-model="mensaje"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="enviar-button">
        Enviar Mensaje
      </button>
      <div v-if="enviado" class="mensaje-exito">
        ¡Mensaje enviado con éxito!
      </div>
    </form>
  </div>

  <div class="mapa">
    <h2>Nuestra Ubicación</h2>
    <div class="mapa-placeholder">
      <!-- Aquí se agregará el mapa real -->
      [Mapa de ubicación]
    </div>
  </div>
</div>

<style>
.contacto-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

.info-contacto {
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.formulario-contacto {
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
}

.enviar-button {
  width: 100%;
  padding: 0.75rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.enviar-button:hover {
  background: var(--vp-c-brand-dark);
}

.mensaje-exito {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #10B981;
  color: white;
  border-radius: 4px;
  text-align: center;
}

.mapa {
  grid-column: 1 / -1;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.mapa-placeholder {
  height: 300px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .contacto-container {
    grid-template-columns: 1fr;
  }
}
</style>