import { createApp } from "vue";
import App from "./App.vue";

import LifeBoard from "./components/LifeBoard.vue";
import SetControl from "./components/SetControl.vue";

const app = createApp(App);
app.component("life-board", LifeBoard);
app.component("set-control", SetControl);

app.mount("#app");
