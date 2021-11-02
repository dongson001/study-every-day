<template>
  <!-- 条件渲染 -->
  <p v-if="courses.length === 0"></p>
  <!-- 列表渲染 -->
  <ul>
    <li
      v-for="c in courses"
      :key="c"
      :class="{ active: selectedCourse === c }"
      @click="selectedCourse = c"
    >
      {{ c }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: '',
    };
  },
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
