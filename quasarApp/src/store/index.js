import Vue from "vue";
import Vuex from "vuex";
// import firebase from "firebase";
import database from "./module-example";
import VueSessionStorage from "vue-sessionstorage";

Vue.use(Vuex);
Vue.use(VueSessionStorage);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      database
    }
  });

  return Store;
}
