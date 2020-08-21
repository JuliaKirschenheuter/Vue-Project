import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import forms from './modules/forms';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    forms
  }
})
