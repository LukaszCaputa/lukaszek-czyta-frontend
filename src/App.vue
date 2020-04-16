<template>
  <div id="app">
    <div id="header">
      <router-link to="/">
        <b-container>
          <h1>Lukaszek czyta !</h1>
        </b-container>
      </router-link>
    </div>

    <div id="pagecontent">
      <b-container>
        <router-view/>
      </b-container>
    </div>

    <div id="footer">
      <div class="container">
        <b-row>
          <b-col>
            <span class="text-muted footer-text">&#169; Copyright 2020</span>
          </b-col>
          <b-col class="text-right">

            <div @click="$bvModal.show('modal-kontakt')" id="contactBtn" class="text-muted footer-text">
              ...Kontakt
            </div>

            <b-modal id="modal-kontakt" title="Kontakt" ok-only>
              <p class="my-3">
                <span class="text-muted">Email: </span>
                lukasz [at] lukaszcaputa.eu
              </p>
            </b-modal>
          </b-col>
        </b-row>
      </div>
    </div>

  </div>
</template>
