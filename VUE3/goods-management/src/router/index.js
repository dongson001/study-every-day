import { createRouter, createWebHashHistory } from "vue-router";
import CourseList from "/comps/CourseList.vue";
const CourseAdd = () => import("../components/CourseAdd.vue");
const CourseDetail = () => import("../components/CourseDetail.vue");
const Login = () => import("../components/Login.vue");

const routes = [
  {
    path: "/",
    redirect: "/course",
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/course",
    component: CourseList,
    name: "list",
    children: [
      {
        path: "/CourseAdd",
        name: "add",
        component: CourseAdd,
      },
      {
        path: "/Course/:id",
        name: "detail",
        component: CourseDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
