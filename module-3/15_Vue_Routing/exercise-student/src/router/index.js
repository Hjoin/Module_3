import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../views/Home.vue";
import MyBooks from "../views/MyBooks.vue";
import NewBook from "../views/NewBook.vue";
import BookDetail from "../views/BookDetail.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/myBooks',
    name: 'myBooks',
    component: MyBooks
  },
  {
    path: '/addBook',
    name: 'newBook',
    component: NewBook
  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookDetail
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
