<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { User } from '../types/user';
import { getUsers } from '../services/userService';
import UserCard from '../components/UserCard.vue';

//estados de la app
const users = ref<User[]>([]);
const loading = ref(true);
const error = ref('');

//buscar y favoritos
const searchText = ref('');
const favorites = ref<number[]>([]);

//identificar la pagina actual
const route = useRoute();

const showFavorites = computed(() =>
  route.path === '/favorites'
);

//filtrar users
const filteredUsers = computed(() =>
  users.value.filter(user =>
    (!showFavorites.value || favorites.value.includes(user.id)) &&
    user.name.toLowerCase().includes(
      searchText.value.trim().toLowerCase()
    )
  )
);

//consutar users
onMounted(async () => {
  try {
    users.value = await getUsers();
  } catch {
    error.value = 'No se pudieron cargar los usuarios.';
  } finally {
    loading.value = false;
  }
});

//aniadir o quitar de fav
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
    <h2>{{showFavorites ? 'Mis favoritos' : 'Todos los usuarios'}}</h2>

    <p><strong>Favoritos:</strong> {{favorites.length}}</p>

    <p v-if="loading">Cargando...</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else>

      <!--buscar users-->
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
        {{
          showFavorites && favorites.length === 0
            ? 'No existen usuarios favoritos'
            : 'No se encontraron usuarios'
        }}
      </p>

    </div>

  </main>
</template>

<style scoped>

.container {
  max-width: 1100px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.container h2 {
  color: #183b73;
  font-size: 26px;
}

.container p {
  color: #33465f;
}

.search-box {
  margin: 25px 0;
}

.search-box label {
  display: block;
  margin-bottom: 8px;
  color: #33465f;
  font-weight: bold;
}

.search-box input {
  width: 100%;
  max-width: 400px;
  padding: 11px;
  border: 1px solid #6c83a5;
  border-radius: 7px;
  font-size: 15px;
  box-sizing: border-box;
}

.search-box input::placeholder {
  color: #52627b;
}

.search-box input:focus {
  outline: 2px solid #1e4f91;
  outline-offset: 2px;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
