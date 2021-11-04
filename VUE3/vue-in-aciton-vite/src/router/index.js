import { createRouter, createWebHashHistory } from "vue-router";

import CourseList from "/coms/CourseList.vue";
import CourseAdd from "/coms/CourseAdd.vue";
import CourseDetail from "/coms/CourseDetail.vue";

// 配置路由表
const routes = [
  {
    path: "/",
    component: CourseList,
  },
  {
    path: "/CourseAdd",
    component: CourseAdd,
  },
  {
    path: "/Course/:id",
    component: CourseDetail,
  },
];

// 创建实例
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
