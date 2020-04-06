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
        <div class="row">
          <div class="col-md-6"><span class="text-muted ">Copyright 2020</span></div>
          <div class="col-md-6 text-right"><router-link to="/contact" class="text-muted">...Kontakt</router-link></div>
        </div>
      </div>
    </footer>

  </div>
</template>
