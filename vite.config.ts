import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    host: '0.0.0.0',
    open: false, // 是否自动打开浏览器
    proxy: {
      "/api": {
        target: "http://localhost:8090", // 接口域名
        changeOrigin: true,            // 是否换源
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
});
