<template>
  <ul class="hk-tabs-wrapper">
    <li
      v-for="(tab, key) in tabs"
      :key="key"
      :class='[currentTab === key ? "active" : ""]'
      @click="onTabsChange(key, tab.path)"
    >
      <span>{{tab.text}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'AuthorTabs',
    props: {
      tabs: {
        type: Array,
        default: function() {
          return [
            {
              path: '/videolist',
              text: '视频'
            }, {
              path: '/minilist',
              text: '小视频'
            }, {
              path: '/albumlist',
              text: '合辑'
            }];
        }
      }
    },
    data() {
      return {
        currentTab: 0
      }
    },
    methods: {
      onTabsChange: function(key, path) {
        this.currentTab = key
        this.$router.push({path: '/author' + path, query: {app_id: this.$route.query.app_id}})
      }
    }
  }
</script>

<style lang="less" scoped>
  .hk-tabs-wrapper {
    position: relative;
    width: 100%;
    height: 168px;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    li {
      width: 414px;
      height: 168px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: PingFangSC-Regular;
      font-size: 54px;
      text-align: center;
      line-height: 132px;
      color: #888888;
      list-style-type: none;
    }
    .active {
      font-weight: bold;
      font-family: PingFangSC-Semibold;
      color: #000000;
      span {
        position: relative;
      }
      span:after {
        position: absolute;
        top: .85rem;
        left: 50%;
        width: 54px;
        height: 10px;
        border-radius: 4.5px;
        content: '';
        background-color: #FF4141;
        transform: translate3d(-50%, 0, 0);
        transform-origin: left top;
        transition: all .3s;
        transition-timing-function: ease-in-out;
      }
    }
  }
</style>
