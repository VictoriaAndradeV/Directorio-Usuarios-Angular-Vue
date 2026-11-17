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
  border: 1px solid #a3badd;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.user-card h2 {
  color: #183b73;
  font-size: 19px;
  margin-top: 0;
}

.user-card p {
  color: #33465f;
  font-size: 14px;
  overflow-wrap: anywhere;
}

.user-card strong {
  color: #1d365c;
  margin-right: 4px;
}

.user-card button {
  background-color: #2859a5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
}

.user-card button:hover {
  background-color: #1d447e;
}

.user-card button[aria-pressed="true"] {
  background-color: #673a8a;
}
</style>
