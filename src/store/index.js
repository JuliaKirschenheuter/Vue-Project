import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import forms from './modules/forms';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  models: ['forms']
})

export default new Vuex.Store({
  modules: {
    auth,
    forms
  },
  plugins: [vuexLocal.plugin]
})
