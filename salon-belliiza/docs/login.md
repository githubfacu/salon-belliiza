# Iniciar Sesión

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = () => {
  // Aquí se implementará la lógica de autenticación
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Por favor complete todos los campos'
    return
  }
  // Simulación de envío
  console.log('Iniciando sesión...')
}
</script>

<div class="login-container">
  <div class="login-form">
    <h2>Acceso Clientes</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email"
          v-model="email"
          placeholder="tu@email.com"
          required
        >
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input 
          type="password" 
          id="password"
          v-model="password"
          placeholder="••••••••"
          required
        >
      </div>
      <p v-if="error" class="error-message">{{ error }}</p>
      <button type="submit" class="login-button">
        Iniciar Sesión
      </button>
    </form>
    <div class="login-footer">
      <a href="/recuperar-password">¿Olvidaste tu contraseña?</a>
      <a href="/registro">Crear cuenta nueva</a>
    </div>
  </div>
</div>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
}

.login-form {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background: var(--vp-c-brand-dark);
}

.error-message {
  color: #dc2626;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.login-footer {
  margin-top: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.login-footer a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.9rem;
}

.login-footer a:hover {
  text-decoration: underline;
}
</style>