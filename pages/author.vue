<template>
  <div class="container">
    <author-header :header="author_info"/>
    <author-tabs />
    <NuxtChild keep-alive :key="$route.params.id" :videos="video.results" />
  </div>
</template>

<script>
  import fetch from 'isomorphic-unfetch'
  import AuthorHeader from './author/header'
  import AuthorTabs from './author/tabs'
  import VideoList from './author/videolist'
  import MiniList from './author/minilist'
  import Logo from '../components/Logo.vue'

  export default {
    components: {
      MiniList,
      VideoList,
      AuthorTabs,
      Logo,
      AuthorHeader
    },
    async asyncData(context) {
      const res = await fetch(`https://haokan.baidu.com/haokan/wiseauthor?app_id=${context.route.query.app_id}&_format=json`)
      const {data: {response}} = await res.json();
      return {
        ...response
      };
    },
    created() {
      this.$router.push({path: '/author/videolist', query: {app_id: this.$route.query.app_id}})
    }
  }
</script>

<style>

</style>
