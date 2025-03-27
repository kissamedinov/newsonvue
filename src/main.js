import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Добавим позже
import "./index.css"; // Подключаем стили
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';


const app = createApp(App);
app.use(router);
app.mount("#app");
