import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
var dayjs = require("dayjs");
// var weekday = require("dayjs/plugin/weekday");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
// dayjs.extend(weekday);

createApp(App).mount("#app");
