import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      dark: true,
      themes: {
        light: {
          primary: '#1a202c',
          secondary: '1a202c',
          anchor: '#8c9eff',
        },
        dark:{
          primary: '#1a202c',
        }
      },
    },
});
