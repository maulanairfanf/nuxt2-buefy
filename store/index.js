import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    modules: {
      todo,
    },
  });
};
