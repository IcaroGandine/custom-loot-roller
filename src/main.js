import App from "./App.vue";
import { Varlet, Select, Option, Button } from "@varlet/ui";
import { createApp } from "vue";
import "@varlet/ui/es/style.js";

createApp(App).use(Varlet).use(Select).use(Option).use(Button).mount("#app");
