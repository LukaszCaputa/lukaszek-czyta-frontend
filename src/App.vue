<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Kontakt</router-link>
    </header>

    <div id="pagecontent">
      <b-container>
        <router-view/>
      </b-container>
    </div>

    <footer class="footer">
      <div class="container">
        <span class="text-muted">Copyright 2020</span>
      </div>
    </footer>

  </div>
</template>
