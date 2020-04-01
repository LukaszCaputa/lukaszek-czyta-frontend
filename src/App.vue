<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item active> <router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/contact">Kontakt</router-link></b-nav-item>
    </b-nav>

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
