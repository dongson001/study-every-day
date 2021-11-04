const path = require("path");
module.exports = {
  server: {
    port: 8888,
  },
  alias: {
    "/coms/": path.resolve(__dirname, "src/components"),
  },
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
  },
};
