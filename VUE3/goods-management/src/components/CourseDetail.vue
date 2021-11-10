<template>
  <div>
    <h3>{{ course.name }}</h3>
    <p>{{ course.id }}</p>
    <p>{{ course.price }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { getCourseById } from "../api/course";
import { useRoute } from "vue-router";
export default {
  setup() {
    let course = ref({ name: "", price: "", id: "" });
    const route = useRoute();
    const getDetail = () => {
      getCourseById(route.params.id).then(res => {
        course.value = res;
      });
    };

    getDetail();
    watch(
      () => route.params.id,
      () => {
        getDetail();
      }
    );
    return { course };
  },
};
</script>

<style lang="scss" scoped></style>
