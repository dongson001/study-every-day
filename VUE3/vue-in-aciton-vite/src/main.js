import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index.js";
import store from "./store/index";
import Message from "./components/Message.vue";

createApp(App)
  .component("Message", Message)
  .use(store)
  .use(router)
  .mount("#app");
