import { createApp } from "vue";
import App from "./App.vue";

import LifeBoard from "./components/LifeBoard.vue";
import SetControl from "./components/SetControl.vue";
import MatchResult from "./components/MatchResult.vue";

const app = createApp(App);
app.component("life-board", LifeBoard);
app.component("set-control", SetControl);
app.component("match-result", MatchResult);

app.mount("#app");
