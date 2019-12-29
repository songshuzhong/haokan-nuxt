<template>
  <img
    :src="src"
    :ref="placeholder"
  />
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      loaded: false,
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559998138555&di=b689ed7dfc64136bf6e892204042a827&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170720%2Fcd59c28a4c6d49bc8b4ecfcdffbc04f1_th.png'
    }
  },
  mounted() {
    this.addEvent()
    window.addEventListener('scroll', this.addEvent, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.addEvent)
  },
  methods: {
    loadImg: function() {
      this.loaded = true
      this.src = this.placeholder
    },
    addEvent: function() {
      if (this.loaded) return
      if (this.$refs[this.placeholder].getBoundingClientRect().top < window.innerHeight) {
        this.loadImg()
      }
    }
  }
}
</script>

<style>

</style>
