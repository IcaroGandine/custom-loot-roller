import App from "./App.vue";
import { Varlet, Select, Option, Button, Table } from "@varlet/ui";
import { createApp } from "vue";
import "@varlet/ui/es/style.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(Varlet)
  .use(Select)
  .use(Option)
  .use(Button)
  .use(Table)
  .mount("#app");
