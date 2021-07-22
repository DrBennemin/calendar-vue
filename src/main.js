import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
var dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();

createApp(App).mount("#app");
