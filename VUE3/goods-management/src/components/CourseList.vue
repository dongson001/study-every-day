<template>
  <div>
    <!-- 消息提示框 -->
    <message v-if="showMsg" @close="showMsg = false">
      <template v-slot:title> 恭喜 </template>
      新增课程成功
    </message>
    <!-- 条件渲染 -->
    <p v-if="courses.length === 0"></p>

    <p>
      <!-- <router-link to="/CourseAdd">新增</router-link> -->
      <button @click="$router.push('/CourseAdd')">新增</button>
    </p>

    <!-- 列表渲染 -->
    <ul>
      <li
        v-for="c in courses"
        :key="c"
        :class="{ active: selectedCourse === c }"
        @click="showDetail(c)"
      >
        <!-- <router-link :to="'/course/' + c.id"> -->
        {{ c.name }}
        <!-- </router-link> -->
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import { getCourses } from "../api/course";
export default {
  // data() {
  //   return {
  //     selectedCourse: "",
  //   };
  // },
  // props: {
  //   courses: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  setup() {
    const courses = ref([]);
    getCourses().then(res => (courses.value = res));

    const selectedCourse = ref(null);
    const router = useRouter();
    const showDetail = c => {
      selectedCourse.value = c;
      router.push({ name: "detail", params: { id: c.id } });
    };

    const showMsg = ref(false);
    onBeforeRouteUpdate((to, from, next) => {
      if (from.name === "add" && to.query.action === "success") {
        showMsg.value = true;
        next();
      } else {
        next();
      }
    });
    return { courses, showDetail, selectedCourse, showMsg };
  },
};
</script>

<style scoped>
.active {
  background: red;
}
</style>
