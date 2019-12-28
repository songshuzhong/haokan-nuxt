<template>
  <div>
    <div
      class="hk-album-wrapper"
      v-for="(video, key) in videos"
      :key="key"
    >
      <div
        class="poster"
        :style="{backgroundImage: `url(${video.content.poster})`}"
      >
        <span :style='{alignItems: "flex-end", fontWeight: "bold"}'>{{video.content.playcnt}}</span>
        <span :style='{alignItems: "flex-start"}'>视频</span>
      </div>
      <div class="detail">
        <div class="title">{{video.content.title}}</div>
        <div class="date">{{video.content.duration}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
  props: ['videos']
}
</script>

<style lang="less" scoped>
  .hk-album-wrapper {
    position: relative;
    margin: 0 auto;
    padding: 0 30px 60px 30px;
    display: flex;
    justify-content: flex-start;
    .poster {
      position: relative;
      width: 405px;
      height: 228px;
      display: flex;
      flex-direction: column;
      border-radius: 24px;
      overflow: hidden;
      span {
        position: relative;
        left: 297px;
        width: 108px;
        height: 114px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: PingFangSC-Regular;
        font-size: 33px;
        color: #FFFFFF;
        text-align: center;
        background: rgba(0,0,0,0.3);
      }
    }
    .detail {
      position: relative;
      width: 729px;
      height: 228px;
      padding-left: 36px;
      .title {
        padding-top: 12px;
        font-family: PingFangSC-Medium;
        font-size: 48px;
        color: #000000;
        text-align: justify;
        line-height: 72px;
      }
      .date {
        position: absolute;
        top: 177px;
        font-family: PingFangSC-Regular;
        font-size: 39px;
        color: #888888;
        line-height: 39px;
      }
    }
    &:last-child {
      padding-bottom: 150px;
    }
  }
</style>
