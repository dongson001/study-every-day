<template>
  <div class="message-box">
    <h3>
      <!-- 具名插槽 -->
      <slot name="title"></slot>
      <span class="message-box-close" @click="$emit('close')">X</span>
      <!-- 匿名插槽 -->
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  setup() {},
};
</script>

<style lang="scss" scoped>
.message-box {
  padding: 10px 20px;
  background: #4fc08d;
  border: 1px solid #42b983;
  color: #fff;
}
.message-box-close {
  float: right;
  cursor: pointer;
}
</style>
