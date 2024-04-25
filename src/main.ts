import { createSSRApp } from "vue";
import App from "./App.vue";

import pinia from '@/stores'
import '@/static/styles/index.scss'
import './uni.scss'

export function createApp() {
  const app = createSSRApp(App);

  app.use(pinia)

  return {
    app,
  };
}
