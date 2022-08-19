import { createApp } from 'vue';

import ElementPlus, { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';
import routes from './route/index';

const app = createApp(App);
app.config.globalProperties.$ElMessage = ElMessage;
app.use(routes).use(ElementPlus).mount('#app');
