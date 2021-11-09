<template>
  <button @click="onLogin">登录</button>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const onLogin = () => {
      localStorage.setItem("token", "someToken");
      router.push(route.query.redirect);
    };
    return {
      onLogin,
    };
  },
};
</script>

<style lang="scss" scoped></style>
