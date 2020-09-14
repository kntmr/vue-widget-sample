// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "APPNAME.firebaseapp.com",
  databaseURL: "https://APPNAME.firebaseio.com",
  projectId: "APPNAME",
  storageBucket: "APPNAME.appspot.com",
  messagingSenderId: "xxxxxxxxxxxx"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: function (createElement) {
    const dataset = this.$el.dataset
    this.$store.dispatch('setQuery', dataset.tag)
    return createElement('App')
  }
})
