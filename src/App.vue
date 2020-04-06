<template>
  <div id="app">
    <div id="header">
      <b-container>
        <router-link to="/"><h1>Lukaszek czyta !</h1></router-link>
      </b-container>
    </div>

    <div id="pagecontent">
      <b-container>
        <router-view/>
      </b-container>
    </div>

    <footer class="footer">
      <div class="container">
        <span class="text-muted">Copyright 2020</span>
        <router-link to="/contact">Kontakt</router-link>
      </div>
    </footer>

  </div>
</template>
