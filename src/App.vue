<template>
  <div class="app">
    <nav class="container">
      <router-link to="/table">Таблица</router-link>
      |
      <router-link to="/layout">Вёрстка</router-link>
    </nav>
    <router-view/>
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.router-link-active {
  color: green;
}

</style>
