<script setup>
import { ref } from 'vue'

const props = defineProps(['theme'])
const name = ref('')
const attending = ref('yes')
const guests = ref(1)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate fetch
  setTimeout(() => {
    alert('¡Gracias! Tu confirmación ha sido recibida.')
    name.value = ''
    attending.value = 'yes'
    guests.value = 1
    isSubmitting.value = false
  }, 1500)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="rsvp-form" :class="theme">
    <div class="form-group">
      <label>Nombre y Apellido</label>
      <input v-model="name" type="text" required placeholder="Ingresa tu nombre">
    </div>
    
    <div class="form-row">
        <div class="form-group">
            <label>¿Asistirás?</label>
            <select v-model="attending">
                <option value="yes">Sí, asistiré</option>
                <option value="no">No podré asistir</option>
            </select>
        </div>
        
        <div class="form-group" v-if="attending === 'yes'">
            <label>Cantidad</label>
            <input v-model="guests" type="number" min="1" max="10">
        </div>
    </div>

    <button type="submit" class="submit-btn" :disabled="isSubmitting">
      {{ isSubmitting ? 'ENVIANDO...' : 'CONFIRMAR ASISTENCIA' }}
    </button>
  </form>
</template>

<style scoped>
.rsvp-form {
  max-width: 400px;
  margin: 30px auto;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 8px;
  opacity: 0.7;
}

input, select {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(135, 135, 135, 0.443);
  color: inherit;
  font-family: var(--font-body);
}

.form-row {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 15px;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #fff;
  color: #000;
  border: none;
  letter-spacing: 2px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  background: #ccc;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Theme variations */
.dark input, .dark select {
  border-color: rgba(255,255,255,0.3);
}

.watercolor input, .watercolor select {
  border-color: rgba(0,0,0,0.1);
  background: #fff;
}

.watercolor .submit-btn {
  background: #5a4b41;
  color: #fff;
}
</style>
