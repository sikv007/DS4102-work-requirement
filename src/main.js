import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import BaseContainer from "./components/shared/ui/BaseContainer.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.component("base-container", BaseContainer);
app.use(router);

app.mount("#app");
