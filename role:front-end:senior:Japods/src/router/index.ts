import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: () => import("@/App.vue"),
      redirect: "/notebook",
      children: [
        {
          path: "/notebook",
          name: "Notebooks",
          component: () => import("@/modules/Notebook/views/Notebook.vue"),
        },
        {
          path: "/notebook/:id/notes",
          name: "NotebookNotes",
          component: () => import("@/modules/Notes/views/Notes.vue"),
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
