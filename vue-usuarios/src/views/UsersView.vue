<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { User } from '../types/user';
import { getUsers } from '../services/userService';
import UserCard from '../components/UserCard.vue';


// Estados de la aplicación
const users = ref<User[]>([]);
const loading = ref(true);
const error = ref('');


const searchText = ref('');

const filteredUsers = computed(() =>
  users.value.filter(user =>
    user.name.toLowerCase().includes(
      searchText.value.trim().toLowerCase()
    )
  )
);


// Lista de favoritos
const favorites = ref<number[]>([]);

// Consultar usuarios al cargar la página
onMounted(async () => {
  try {
    users.value = await getUsers();
  } catch {
    error.value = 'No se pudieron cargar los usuarios.';
  } finally {
    loading.value = false;
  }
});

// Agregar o quitar usuarios favoritos
function toggleFavorite(userId: number) {
  if (favorites.value.includes(userId)) {
    favorites.value = favorites.value.filter(id => id !== userId);
  } else {
    favorites.value.push(userId);
  }
}
</script>

<template>
  <main class="container">

    <p><strong>Favoritos:</strong> {{ favorites.length }}</p>

    <p v-if="loading">Cargando...</p>

    <p v-else-if="error">{{ error }}</p>

    
    <div v-else>

      <!-- Búsqueda de usuarios -->
      <div class="search-box">
        <label for="search">Buscar usuario por nombre:</label>

        <input
          id="search"
          type="search"
          v-model="searchText"
          placeholder="Escribe un nombre..."
        />
      </div>

      <p>
        Mostrando {{ filteredUsers.length }} de
        {{ users.length }} usuarios
      </p>

      <!-- Tarjetas de usuarios -->
      <section class="user-list">

        <UserCard
          v-for="user in filteredUsers"
          :key="user.id"
          :user="user"
          :is-favorite="favorites.includes(user.id)"
          @toggle="toggleFavorite"
        />

      </section>

      <p v-if="filteredUsers.length === 0">
        No se encontraron usuarios.
      </p>

    </div>

  </main>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}


.search-box {
  margin: 25px 0;
}

.search-box label {
  display: block;
  margin-bottom: 8px;
}

.search-box input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 15px;
}

</style>
