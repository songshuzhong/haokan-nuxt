<template>
  <div class="hk-mini-wrapper">
    <div
      class="mini-item"
      v-for="(video, key) in videos"
      :key="key"
      :style="{backgroundImage: `url(${video.content.cover_src})`}"
    >
      <div class="watch">
        <img :src="`/img/minivideo-eyes.png`" />
        <span>&nbsp;{{video.content.playcnt.playcntText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MiniList',
    props: ['videos']
  }
</script>

<style lang="less" scoped>
  .hk-mini-wrapper {
    position: relative;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-flow: row wrap;
    .mini-item {
      position: relative;
      width: 383px;
      height: 509px;
      margin: 4.8px;
      box-sizing: content-box;
      border-radius: 15.47px;
      background-size: cover;
      .watch {
        position: absolute;
        bottom: 17px;
        width: 383px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: -50px;
        box-sizing: border-box;
        text-align: right;
        padding: 0 36px;
        z-index: 2019;
        img {
          width: 46px;
          height: 46px;
          display: inline-block;
          vertical-align: middle;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          font-family: PingFangSC-Regular;
          font-size: 33px;
          color: #FFFFFF;
        }
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 193px;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
        border-radius: 26.67px;
        z-index: 0;
      }
    }
    &:last-child {
      padding-bottom: 210px;
    }
  }
</style>
