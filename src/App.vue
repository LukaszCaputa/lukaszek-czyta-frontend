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
        <div class="row">
          <div class="col-md-6"><span class="text-muted footer-text">&#169; Copyright 2020</span></div>
          <div class="col-md-6 text-right" >
            <b-button variant="outline-dark" v-b-modal.modal-1 id="contactBtn">...Kontakt</b-button>

            <b-modal id="modal-1" title="Kontakt">
              <p class="my-3">
                <span class="text-muted ">Email: </span>
                lukasz [at] lukaszcaputa.eu
              </p>
            </b-modal>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>
