import VueRouter from "vue-router";

const starrySky = () => import("../pages/starrySky/indexPage");
const list = () => import("../pages/list/listPage");
const cardMagic = () => import("../pages/cardMagic/indexPage");

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/starrySky",
      component: starrySky,
    },
    {
      path: "/list",
      component: list,
    },
    {
      path: "/cardMagic",
      component: cardMagic,
    },
    {
      path: "/",
      component: list,
    },
  ],
});
