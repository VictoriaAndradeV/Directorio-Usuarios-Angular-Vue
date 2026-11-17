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
  padding: 25px;
  background-color: #dce8fa;
  border-radius: 12px;
  font-family: Arial, sans-serif;
}

.header h1 {
  color: #183b73;
  margin-top: 0;
}

.header p {
  color: #33465f;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

nav a {
  background-color: #1e4f91;
  color: white;
  padding: 10px 16px;
  border-radius: 7px;
  text-decoration: none;
}

nav a:hover {
  background-color: #14386b;
}

nav a.router-link-exact-active {
  background-color: #14386b;
  font-weight: bold;
}

nav a:focus-visible {
  outline: 3px solid #183b73;
  outline-offset: 3px;
}
</style>
