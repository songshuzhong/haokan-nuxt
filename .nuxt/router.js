import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ca246ad = () => interopDefault(import('..\\pages\\author.vue' /* webpackChunkName: "pages_author" */))
const _be3ebd96 = () => interopDefault(import('..\\pages\\author\\index.vue' /* webpackChunkName: "pages_author_index" */))
const _403e3f5c = () => interopDefault(import('..\\pages\\author\\album.vue' /* webpackChunkName: "pages_author_album" */))
const _71ac3d8c = () => interopDefault(import('..\\pages\\author\\header.vue' /* webpackChunkName: "pages_author_header" */))
const _3bbe0067 = () => interopDefault(import('..\\pages\\author\\minivideo.vue' /* webpackChunkName: "pages_author_minivideo" */))
const _f1521a2a = () => interopDefault(import('..\\pages\\author\\tabs.vue' /* webpackChunkName: "pages_author_tabs" */))
const _3631c920 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/author",
    component: _0ca246ad,
    children: [{
      path: "",
      component: _be3ebd96,
      name: "author"
    }, {
      path: "album",
      component: _403e3f5c,
      name: "author-album"
    }, {
      path: "header",
      component: _71ac3d8c,
      name: "author-header"
    }, {
      path: "minivideo",
      component: _3bbe0067,
      name: "author-minivideo"
    }, {
      path: "tabs",
      component: _f1521a2a,
      name: "author-tabs"
    }]
  }, {
    path: "/",
    component: _3631c920,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
