<template>
  <div>
    <input type="text" v-model="course" @keydown.enter="add" />
    <button @click="add">新增课程</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addCourse } from "../api/course";
export default {
  // props: {
  //   course: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // emits: ["update:course", "add"],
  // data() {
  //   return {
  //     // course: '',
  //   };
  // },
  // emits: [],
  // methods: {
  //   addCourse() {
  //     this.$emit("add");
  //     // this.course = '';
  //   },
  // },
  setup() {
    const course = ref("");
    const reouter = useRouter();
    const add = () => {
      addCourse(course.value).then(() => {
        course.value = "";
        reouter.push("/");
      });
    };
    return {
      course,
      add,
    };
  },
};
</script>

<style lang="scss" scoped></style>
