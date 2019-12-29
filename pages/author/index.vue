<template>
  <div>
    <div
      v-for="(video, key) in videos"
      class="hk-video-wrapper"
      :key="key"
    >
      <div class="title">{{video.content.title}}</div>
      <lazy-image class="video" :placeholder="video.content.cover_src" />
      <div class="duration">
        <span>{{video.content.duration}}</span>
        <div />
        <span>{{video.content.duration}}</span>
      </div>
      <div class="foot-bar">
        <div class="prior">{{video.content.publish_time}}</div>
        <div>
          <div class="praise">
            <span>&nbsp;{{key}}</span>
          </div>
          <div class="comment">
            <span>&nbsp; {{video.content.commentNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LazyImage from '../../components/lazy-image'
  export default {
    name: 'VideoList',
    components: {LazyImage},
    props: ['videos']
  }
</script>

<style lang="less" scoped>
  .hk-video-wrapper {
  position: relative;
  margin: 0 auto;
  padding: 0 36px;
  box-sizing: border-box;
  border-radius: 26.67px;
  .title {
    position: absolute;
    top: 35px;
    left: 80px;
    width: 1098px;
    font-family: PingFangSC-Medium;
    line-height: 81px;
    font-size: 57px;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.30);
    overflow: hidden;
    transition: all 1s;
    transition-timing-function: ease-in-out;
    z-index: 1;
  }
  .duration {
    position: absolute;
    bottom: 160px;
    right: 72px;
    height: 66px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    line-height: 36px;
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #FFFFFF;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.50);
    z-index: 1;
    span {
      display: flex;
      align-items: center;
    }
    div {
      width: 36px;
      height: 36px;
      background-size: contain;
    }
    img {
      width: 48px;
      height: 48px;
      padding-right: 6px;
      box-sizing: content-box;
    }
  }
  .masks {
    position: absolute;
    top: 0;
    width: 1170px;
    height: 703px;
    display: none;
    border-radius: 26.67px;
    font-family: PingFangSC-Medium;
    font-size: 57px;
    color: #FFFFFF;
    background: rgba(0, 0, 0, 0.6);
    line-height: 57px;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.30);
    overflow: hidden;
    z-index: 1;
    .desc {
      position: relative;
      top: 230px;
      left: 105px;
      font-family: PingFangSC-Medium;
      font-size: 53.33px;
      color: #FFFFFF;
      line-height: 53.33px;
    }
    .replay {
      position: relative;
      top: 363px;
      left: 173px;
      width: 383px;
      height: 113px;
      display: inline-block;
      line-height: 113px;
      text-align: center;
      background: rgba(225, 225, 225, 0.3);
      color: #FFFFFF;
      border-radius: 26.67px;
    }
    .open {
      position: relative;
      top: 363px;
      left: 230px;
      width: 383px;
      height: 113px;
      display: inline-block;
      line-height: 113px;
      text-align: center;
      background: #FF4141;
      color: #FFFFFF;
      border-radius: 26.67px;
    }
  }
  .video {
    width: 1170px;
    height: 703px;
    display: block;
    border-radius: 26.67px;
    border: 1px solid rgba(0, 0, 0, .2);
  }
  video {
    width: 1242px;
    height: 703px;
    display: none;
  }
  .btn-invoke {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 379px;
    height: 102px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.20);
    border-radius: 24px;
    transform: translate(-50%, -100%);
    z-index: 1;
    div {
      width: 55px;
      height: 58px;
      margin-right: 9px;
      box-sizing: content-box;
      background-size: contain;
    }
    span {
      font-family: PingFangSC-Regular;
      font-size: 42px;
      color: #FFFFFF;
      line-height: 42px;
    }
  }
  .btn-play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 144px;
    height: 147px;
    background-size: contain;
    transform: translate(-50%, -100%);
    z-index: 1;
  }
  .foot-bar {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    line-height: 150px;
    font-family: PingFangSC-Medium;
    font-size: 39px;
    color: #000000;
    img {
      width: 66px;
      height: 66px;
      display: inline-block;
      vertical-align: middle;
    }
    span {
      height: 66px;
      line-height: 66px;
      display: inline-block;
      vertical-align: middle;
    }
    .prior {
      height: 66px;
      display: inline-block;
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 36px;
      line-height: 66px;
      color: #888888;
    }
    .praise {
      height: 66px;
      display: inline-block;
      padding-left: 33px;
      box-sizing: content-box;
      text-align: right;
      line-height: 66px;
    }
    .comment {
      height: 66px;
      display: inline-block;
      padding-left: 33px;
      box-sizing: content-box;
      text-align: right;
      line-height: 66px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 1170px;
    height: 351px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    border-radius: 26.67px;
    z-index: 0;
  }
}
</style>
