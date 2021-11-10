import { createRouter, createWebHashHistory } from "vue-router";

import CourseList from "/coms/CourseList.vue";
// import CourseAdd from "/coms/CourseAdd.vue";
// import CourseDetail from "/coms/CourseDetail.vue";
// import Login from "/coms/Login.vue";
const CourseAdd = () => import("/coms/CourseAdd.vue");
const CourseDetail = () => import("/coms/CourseDetail.vue");
const Login = () => import("/coms/Login.vue");

// import CourseList from "../components/CourseList.vue";
// import CourseAdd from "../components/CourseAdd.vue";
// import CourseDetail from "../components/CourseDetail.vue";
// import Login from "../components/Login.vue";

// 配置路由表
// const routes = [
//   {
//     path: "/",
//     component: CourseList,
//   },
//   {
//     path: "/CourseAdd",
//     component: CourseAdd,
//   },
//   {
//     path: "/Course/:id",
//     component: CourseDetail,
//   },
// ];

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
      // {
      //   path: "/CourseAdd",
      //   name: "add",
      //   component: CourseAdd,
      //   meta: { requiresAuth: true },
      //   // beforeEnter: (to, from, next) => {
      //   //   if (to.name === "add") {
      //   //     if (localStorage.getItem("token")) {
      //   //       next();
      //   //     } else {
      //   //       next({
      //   //         path: "/login",
      //   //         query: {
      //   //           redirect: to.path,
      //   //         },
      //   //       });
      //   //     }
      //   //   } else {
      //   //     next();
      //   //   }
      //   // },
      // },
      {
        path: "/Course/:id",
        name: "detail",
        component: CourseDetail,
      },
    ],
  },
];

const authRoutes = [
  {
    path: "/CourseAdd",
    name: "add",
    component: CourseAdd,
    parent: "list",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//是否添加路由权限
let hashAuth = false;

const whitelist = ["/login"];
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    if (hashAuth) {
      next();
    } else {
      // 动态添加路由
      hashAuth = true;
      authRoutes.forEach(route => {
        if (route.parent) {
          router.addRoute(route.parent, route);
        } else {
          router.addRoute(route);
        }
      });
      next({ ...to, replace: true });
    }
  } else {
    if (whitelist.includes(to.path)) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.path,
        },
      });
    }
  }
});

//全局守卫
// router.beforeEach((to, from, next) => {
//   // if (to.name === "add") {
//   if (to.meta.requiresAuth) {
//     if (localStorage.getItem("token")) {
//       next();
//     } else {
//       next({
//         path: "/login",
//         query: {
//           redirect: to.path,
//         },
//       });
//     }
//   } else {
//     next();
//   }
// });

// 创建实例
export default router;
