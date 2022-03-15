import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseInput from "./components/ui/BaseInput.vue";
import BaseAlert from "./components/ui/BaseAlert.vue";
import BaseContainer from "./components/ui/BaseContainer.vue";
import PokemonImage from "./components/pokemons/PokemonImage.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-alert", BaseAlert);
app.component("base-input", BaseInput);
app.component("base-container", BaseContainer);
app.component("pokemon-image", PokemonImage);
app.use(router);

app.mount("#app");
