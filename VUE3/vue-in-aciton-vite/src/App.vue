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

  <!-- 访问全局状态 -->
  <p @click="inc">{{ count.count }}</p>
  <p @click="incBy(2)">incBy{{ count1 }}</p>
  <p @click="$store.commit('COUNT_INC')">COUNT_INC{{ count2.count }}</p>
  <p @click="incAssyc">action{{ count3 }}</p>
  <p>doubleCount{{ doubleCount }}</p>
  <p>nCount{{ nCount(10) }}</p>

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
import { reactive, ref, computed, toRefs, watch } from "vue";
// import CoursesAdd from "/coms/CoursesAdd.vue";
// import CoursesList from "/coms/CoursesList.vue";
// import Message from "/coms/Message.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    // CoursesAdd,
    // CoursesList,
    // Message,
  },
  data() {
    return {
      localCount: 10,
    };
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState(["count"]),
    ...mapState({
      count1: state => state.count.count,
      count2: "count",
      count3(state) {
        return state.count.count + this.localCount;
      },
    }),
    ...mapGetters("count", ["doubleCount"]),
  },
  methods: {
    ...mapMutations("count", ["inc", "incBy"]),
    ...mapActions({
      incAssyc: ["inc"],
    }),
    nCount(n) {
      return this.$store.getters["count/nCount"](n);
    },
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
