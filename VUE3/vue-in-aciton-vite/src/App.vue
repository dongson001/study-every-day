<template>
  <!-- 相对路径 -->
  <!-- <img src="./assets/logo.png" alt="" /> -->
  <!-- 绝对路径 -->
  <!-- <img src="/src/assets/logo.png" alt="" /> -->
  <!-- 消息提示框 -->
  <!-- <message v-if="showMsg" @close="showMsg = false">
    <template v-slot:title> 恭喜 </template>
    新增课程成功
  </message> -->
  <!-- <courses-add v-model:course="course" @add="addCourse"></courses-add>
  <courses-list :courses="courses"></courses-list> -->
  <!-- 计算属性 课程总数 -->
  <!-- <p>{{ `课程总数:` + courseCount }}</p> -->
  <!-- 路由出口 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <transition name="fede">
        <component :is="Component"></component>
      </transition>
    </keep-alive>
  </router-view>
</template>

<script>
// import { reactive, ref, computed, toRefs, watch } from "vue";
// import CoursesAdd from "/coms/CoursesAdd.vue";
// import CoursesList from "/coms/CoursesList.vue";
// import Message from "/coms/Message.vue";
export default {
  components: {
    // CoursesAdd,
    // CoursesList,
    // Message,
  },
  setup() {
    // const state = reactive({
    //   courses: JSON.parse(localStorage.getItem("courses")) || [],
    //   course: "",
    //   // 计算属性
    //   courseCount: computed(() => state.courses.length + "门"),
    // });
    // const showMsg = ref(false);
    // setTimeout(() => {
    //   state.courses = ["全栈", "web高级"];
    // }, 1000);
    // watch(
    //   () => state.courses,
    //   () => {
    //     localStorage.setItem("courses", JSON.stringify(state.courses));
    //   },
    //   {
    //     // 对象属性
    //     deep: true,
    //   }
    // );
    // function addCourse() {
    //   state.courses.push(state.course);
    //   state.course = "";
    //   showMsg.value = true;
    // }
    // return { ...toRefs(state), addCourse, showMsg };
  },
};
</script>
<style>
/* #app {
  background: url('./assets/logo.png');
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
