<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        haokan-nuxt.
      </h1>
      <h2 class="subtitle">
        My first-class Nuxt.js project.
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from 'isomorphic-unfetch'
  import Logo from '../components/Logo.vue'

  export default {
    components: {
      Logo
    },
    async asyncData(context) {
      const res = await fetch(`https://haokan.baidu.com/haokan/wiseauthor?app_id=${context.route.query.app_id}&_format=json`)
      const {data: {response}} = await res.json();
      return {
        ...response
      };
    }
  }
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  a {
    &:nth-child(even) {
      color: orange !important;
    }
  }
}
</style>
