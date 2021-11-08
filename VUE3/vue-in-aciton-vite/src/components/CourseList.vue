<template>
  <!-- 条件渲染 -->
  <p v-if="courses.length === 0"></p>

  <p>
    <router-link to="/CourseAdd">新增</router-link>
  </p>

  <!-- 列表渲染 -->
  <ul>
    <li
      v-for="c in courses"
      :key="c"
      :class="{ active: selectedCourse === c }"
      @click="selectedCourse = c"
    >
      <router-link :to="'/course/' + c.id">
        {{ c.name }}
      </router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
import { ref } from "vue";
import { getCourses } from "../api/course";
export default {
  data() {
    return {
      selectedCourse: "",
    };
  },
  // props: {
  //   courses: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  setup() {
    const courses = ref([]);
    getCourses().then(res => (courses.value = res));
    return { courses };
  },
};
</script>

<style lang="scss" scoped></style>
