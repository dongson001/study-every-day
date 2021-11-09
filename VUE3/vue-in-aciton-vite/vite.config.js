import vue from "@vitejs/plugin-vue";
const path = require("path");
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, "./src"));
module.exports = {
  plugins: [vue()],
  alias: {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
    "/coms/": path.resolve(__dirname, "src/components"),
  },
  port: 8888,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "dist",
  // 反向代理，此处应该特别注意，网上很多教程是直接设置proxy，并没有向官网那样添加 server，可能会导致失败，vite官网：https://vitejs.dev/guide/features.html#async-chunk-loading-optimization
  server: {
    proxy: {
      "/api": {
        target: "https://api.pingping6.com/tools/baidutop/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
};
