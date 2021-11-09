import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index.js";
import Message from "./components/Message.vue";

createApp(App).component("Message", Message).use(router).mount("#app");
