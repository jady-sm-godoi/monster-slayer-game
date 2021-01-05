import { createApp } from "vue";
import App from "./App.vue";

import LifeBoard from "./components/LifeBoard.vue";
import SetControl from "./components/SetControl.vue";
import MatchResult from "./components/MatchResult.vue";
import SetLog from "./components/SetLog.vue";

const app = createApp(App);
app.component("life-board", LifeBoard);
app.component("set-control", SetControl);
app.component("match-result", MatchResult);
app.component("set-log", SetLog);

app.mount("#app");
