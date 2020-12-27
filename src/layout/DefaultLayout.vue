<template>
  <v-app >
    <v-img class="bg bg_1 background-main" />

  <v-app-bar
      app
      dark
      class="app-bar"
    >
    <v-row class="ma-4">
      <v-col lg="4">
        <div class="ma-4 d-flex align-center">
          <v-img
            class="shrink mr-2"
            contain
            src="../assets/logo-color.svg"
            transition="scale-transition"
          />
      </div>
      </v-col>
      <v-col lg="4">
        <div class="d-flex align-center">

          <router-link class="ma-4" to="/home"> 
            <span style="color:white">
              Injective Ecosystem
            </span>
          </router-link>
          <router-link class="ma-4"  to="/about"> 
          <span style="color:white">
            Company
          </span>
        </router-link>
        <router-link class="ma-4"  to="/blog"> 
          <span style="color:white">
            Blog
          </span>
        </router-link>

        <v-menu class="ma-4"  offset-y>
          <template v-slot:activator="{on, attrs}">
            <v-img
              class="shrink mr-2 header-svg"
              style="color: #fff;"
              contain
              v-on="on"
              v-bind="attrs"
              src="../assets/earth-menu.svg">
            </v-img>
          </template>
          <v-list>
            <v-item>Item 1</v-item>
            <v-item>Item 2</v-item>
          </v-list>
        </v-menu>
        </div>
      </v-col>
      <v-col cols="12" lg="4" class="align-end">
            <v-btn
            outlined
             class="btn btn_m ma-4 btn_transition"
             href="https://testnet.injective.exchange/">
              Trade on Injective
            </v-btn>
            <v-btn 
            class="btn btn_m ma-4 btn_transition"
            outlined
            >
              Chat
              <v-img src="../assets/images/greater.svg"></v-img>
            </v-btn>
      </v-col>
    </v-row>
      
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>


<style scoped>
.background-main{
  background: none !important;
  background-image: url('../assets/bg.svg') !important;
  background-color: #1a202c !important;
}
.bg_1 {
    width: 1746px;
    height: 1246px;
    transform: translate(-45%,-46%);
}

.bg {
    position: absolute;
    background: 50% no-repeat;
    background-size: contain;
    top: 50%;
    left: 45%;
}
.app-bar{
  background-color: transparent !important;
  box-shadow: none !important
}

.btn_transition {
    border: 2px solid #91faef;
    color: #91faef;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    border-radius: 10px;
}
.btn_m {
    padding: 10px 14px;
}
.btn {
    box-shadow: 0 0 0 0 rgba(0,123,255,0);
    background: 0 0;
    box-shadow: none;
    transition: .25s ease;
    cursor: pointer;
}

.btn_transition:hover {
    background-color: #91faef;
    color: #1a202c;
}

.header-svg{
  font-size: 0;
  fill: #f5eded;
  transition: fill .25s;
}
</style>