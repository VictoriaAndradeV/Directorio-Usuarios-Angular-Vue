<template>
  <header class="header">
    <h1>Directorio de Usuarios</h1>
    <p>Consulta de usuarios con framework Vue</p>

    <nav aria-label="Navegación principal">
      <RouterLink to="/">Todos los usuarios</RouterLink>
      <RouterLink to="/favorites">Mis favoritos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  max-width: 1100px;
  margin: 30px auto 0;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

nav a {
  color: #2563eb;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
