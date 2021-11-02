const path = require("path");
module.exports = {
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
