<template>
  <input
    type="text"
    :value="course"
    @input="$emit('update:course', $event.target.value)"
    @keydown.enter="addCourse"
  />
  <button @click="addCourse">新增课程</button>
</template>

<script>
export default {
  props: {
    course: {
      type: String,
      required: true,
    },
  },
  emits: ['update:course', 'add'],
  data() {
    return {
      // course: '',
    };
  },
  // emits: [],
  methods: {
    addCourse() {
      this.$emit('add');
      // this.course = '';
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
