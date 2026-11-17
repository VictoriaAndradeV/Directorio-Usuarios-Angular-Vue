<script setup lang="ts">
import type { User } from '../types/user';

// Datos recibidos del componente padre
defineProps<{
  user: User;
  isFavorite: boolean;
}>();

// Evento que comunica el ID del usuario
const emit = defineEmits<{
  toggle: [id: number];
}>();
</script>

<template>
  <article class="user-card">

    <h2>{{ user.name }}</h2>

    <p><strong>Correo:</strong> {{ user.email }}</p>

    <p><strong>Ciudad:</strong> {{ user.address.city }}</p>

    <button
      type="button"
      :aria-pressed="isFavorite"
      @click="emit('toggle', user.id)"
    >
      {{ isFavorite ? 'Quitar favorito' : 'Favorito' }}
    </button>

  </article>
</template>

<style scoped>
.user-card {
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.user-card h2 {
  color: #243b53;
  font-size: 20px;
  margin-top: 0;
}

.user-card p {
  color: #555555;
  font-size: 14px;
}

.user-card button {
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

.user-card button:hover {
  background-color: #1d4ed8;
}

.user-card button[aria-pressed="true"] {
  background-color: #64748b;
}
</style>
