<template>
  <div class="hk-header-wrapper">
    <div class="profile">
      <img class="photo" :src="header.avatar"/>
      <img class="fork" :src="`/img/icon-v-${header.vip}.png`" />
      <div class="nick">{{header.name}}</div>
      <div :class='[header.is_subscribe ? "btn-clicked" : "btn-click"]'>
        <img :src="`/img/icon-plus.png`" />&nbsp;关注
      </div>
    </div>
    <div class="wishes">
      <div v-if="header.baidu_authentication">
        <img :src="`/img/certification.png`" />
        <span>{{header.baidu_authentication}}</span>
      </div>
      <div v-if="header.wishes">
        <img :src="`/img/author.png`" />
        <span>{{header.wishes}}</span>
      </div>
    </div>
    <div class="works">
      <span>{{header.fansCntText}}&nbsp;播放</span>
      <span>{{header.totalPlaycnt}}&nbsp;播放</span>
      <span>{{header.videoCnt}}&nbsp;播放</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthorHeader',
    props: ['header']
  }
</script>

<style lang="less" scoped>
  .hk-header-wrapper {
    width: 1242px;
    height: 583px;
    padding: 35px 40px 0 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-size: contain;
    background-image: url("/img/head-bg.jpg");
    transition: all .5s;
    transition-timing-function: ease-in-out;
    .profile {
      position: relative;
      width: 100%;
      padding-bottom: 35px;
      display: flex;
      .photo {
        width: 180px;
        height: 180px;
        border-radius: 100%;
      }
      .fork {
        position: absolute;
        top: 125px;
        left: 120px;
        width: 60px;
        height: 60px;
      }
      .nick {
        width: 700px;
        height: 80px;
        margin: 50px 30px;
        box-sizing: border-box;
        font-family: PingFangSC-Semibold;
        font-weight: bold;
        font-size: 75px;
        color: white;
      }
      .btn-click {
        width: 204px;
        height: 84px;
        margin: 48px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: 1px solid #FFFFFF;
        border-radius: 24px;
        font-family: PingFangSC-Medium;
        text-align: center;
        font-size: 39px;
        background: #FFFFFF;
        color: #FF4141;
        img {
          width: 36px;
          height: 36px;
        }
      }
      .btn-clicked {
        width: 204px;
        height: 84px;
        margin: 48px 0;
        box-sizing: border-box;
        border: 1px solid #FFFFFF;
        border-radius: 24px;
        font-family: PingFangSC-Medium;
        text-align: center;
        line-height: 84px;
        font-size: 39px;
        color: #FFFFFF;
      }
    }
    .wishes {
      position: relative;
      width: 100%;
      padding-bottom: 35px;
      div {
        width: 100%;
        height: 60px;
        padding: 15px 0;
        display: flex;
        align-items: center;
      }
      img {
        width: 60px;
        height: 60px;
        display: inline-block;
      }
      span {
        width: 100%;
        height: 39px;
        padding-left: 13px;
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 39px;
        line-height: 39px;
        color: #FFFFFF;
      }
    }
    .works {
      position: relative;
      width: 100%;
      padding-bottom: 35px;
      font-family: PingFangSC-Regular;
      font-size: 39px;
      color: #FFFFFF;
      span {
        font-family: PingFangSC-Semibold;
        font-size: 60px;
        font-weight: bold;
      }
      span:nth-child(2) {
        margin-left: 78px;
      }
      span:nth-child(3) {
        margin-left: 78px;
      }
    }
  }

</style>
