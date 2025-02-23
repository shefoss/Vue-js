import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

vueApp.directive("fontWeight", (el, order) => {
  el.style.fontWeight = order.value || "bold";
});

vueApp.directive("changeColor", (el, order) => {
  el.style.color = order.value;
});
