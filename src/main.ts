import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus, { ElMessage } from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/assets/scss/global.scss";
import "element-plus/dist/index.css";

import App from "./App.vue";
import routes from "./route/index";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.config.globalProperties.$ElMessage = ElMessage;
app.use(routes).use(createPinia()).use(ElementPlus).mount("#app");
