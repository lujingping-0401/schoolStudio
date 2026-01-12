<template>
  <view class="container">
    <!-- Global Background -->
    <view class="global-background"></view>

    <!-- Top Section -->
    <view class="top-section">
      <!-- Custom Header -->
      <view class="custom-header" style="padding-top: 12rpx;">
        <view class="header-content">
          <view class="header-left">
             <!-- Simple Home Icon using uView -->
             <u-icon name="home" size="28" color="#333"></u-icon>
          </view>
          <text class="header-title">雷程亮成果转移转化创新工作室</text>
          <!-- Spacer for right alignment balance or matching system capsule -->
           <view class="header-right-spacer"></view>
        </view>
      </view>

      <!-- Banner -->
      <view class="banner-wrapper">
        <swiper class="banner-swiper" circular indicator-dots autoplay>
          <swiper-item>
            <image class="banner-image" src="/static/img/index/banner1.jpg" mode="aspectFill"></image>
          </swiper-item>
          <swiper-item>
            <image class="banner-image" src="/static/img/index/banner2.jpg" mode="aspectFill"></image>
          </swiper-item>
        </swiper>
      </view>

      <!-- Floating Card Section (Action + Nav) -->
      <view class="floating-card" :class="{ 'is-scrolled': isScrolled }">
        <!-- Main Action Button -->
        <view class="action-section">
          <view class="action-btn" @click="togglePopup">
            <text class="action-text">“渝教工心”助需平台（点击此处发布）</text>
            <text class="arrow-down">▼</text>
          </view>
        </view>

        <!-- Main Navigation Grid -->
        <view class="nav-grid">
          <view class="nav-item" @click="navigateTo('/pages/intro/intro')">
            <view class="icon-wrapper">
               <image src="/static/img/index/WorkRoom.webp" class="nav-icon"></image>
               <view class="icon-shadow"></view>
            </view>
            <text>工作室介绍</text>
          </view>
          <view class="nav-item" @click="navigateTo('/pages/dynamic/dynamic')">
             <view class="icon-wrapper">
              <image src="/static/img/index/WorkUpdates.webp" class="nav-icon"></image>
              <view class="icon-shadow"></view>
            </view>
            <text>工作动态</text>
          </view>
          <view class="nav-item" @click="navigateTo('/pages/question/question')">
             <view class="icon-wrapper">
              <image src="/static/img/index/FeeBack.webp" class="nav-icon"></image>
              <view class="icon-shadow"></view>
            </view>
            <text>问题咨询</text>
          </view>
        </view>
      </view>
    </view>

    <!-- Popup Menu (Overlay) -->
    <view class="popup-overlay" v-if="showPopup" @click="togglePopup">
      <view class="popup-content" @click.stop>
        <view class="popup-btn full-width">
          <text>“渝教工心”助需平台（点击此处发布）</text>
           <text class="arrow-up">▲</text>
        </view>
        <view class="popup-grid">
          <view class="popup-item" @click="handlePublish('需求发布')">
            <image src="/static/logo.png" class="popup-icon"></image>
            <text>需求发布</text>
          </view>
          <view class="popup-item" @click="handlePublish('成果发布')">
            <image src="/static/logo.png" class="popup-icon"></image>
            <text>成果发布</text>
          </view>
          <view class="popup-item" @click="handlePublish('知产发布')">
            <image src="/static/logo.png" class="popup-icon"></image>
            <text>知产发布</text>
          </view>
        </view>
      </view>
    </view>

    <!-- White Content Section -->
    <view class="white-section" :class="{ 'is-scrolled': isScrolled }">
      <!-- Tech Transfer Section -->
      <view class="sectionTop">
        <view class="section-header">
          <text class="section-title">成果转化</text>
          <text class="more-link">更多</text>
        </view>
        <view class="tech-list">
          <view class="tech-item" v-for="(item, index) in techList" :key="index">
            <view class="tech-title-row">
              <view class="tech-highlight" v-if="index < 3"></view>
              <text class="tech-title">{{ item.title }}</text>
            </view>
            <view class="tech-tags">
              <text class="tag" :class="getTagClass(tag)" v-for="(tag, tIndex) in item.tags" :key="tIndex">{{ tag }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- Work Dynamics Section -->
      <view class="sectionBtm">
        <view class="section-header" style="margin-top: 20rpx;">
          <text class="section-title">工作动态</text>
          <text class="more-link">更多</text>
        </view>
        <view class="news-list">
          <view class="news-item" v-for="(item, index) in newsList" :key="index" @click="navigateTo('/pages/dynamic/dynamic')">
            <image :src="item.image" class="news-image" mode="aspectFill"></image>
            <view class="news-content">
              <text class="news-title">{{ item.title }}</text>
              <view class="news-meta">
                <view class="news-tags">
                  <text class="tag blue-tag" v-for="(tag, tIndex) in item.tags" :key="tIndex">{{ tag }}</text>
                </view>
                <view class="news-date-container">
                  <image src="/static/img/index/calendar.svg" class="calendar-icon"></image>
                  <text class="news-date">{{ item.date }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onPageScroll } from '@dcloudio/uni-app';
import uIcon from 'uview-plus/components/u-icon/u-icon.vue';

const isScrolled = ref(false);

onPageScroll((e) => {
  isScrolled.value = e.scrollTop > 60; 
});

const showPopup = ref(false);
const statusBarHeight = ref(20);

onLoad(() => {
  const sysInfo = uni.getSystemInfoSync();
  statusBarHeight.value = sysInfo.statusBarHeight || 20;
});

const techList = ref([
  { title: '锂电池防火材料', tags: ['科技成果', '技术入股'] },
  { title: '一种Li1+/Mg2+分离膜的研发', tags: ['技术需求', '现有技术/产品改进'] },
  { title: '脉波交错层式结构在整流变压器绕制...', tags: ['技术需求', '新产品/技术研发'] },
  { title: '高性能玄武岩混杂复合材料与结构关...', tags: ['技术需求', '引进技术'] },
  { title: '青柠檬及橄榄油深加工产品开发', tags: ['技术需求', '现有技术/产品改进'] },
]);

const newsList = ref([
  {
    title: '首届武陵山人才节成功举办 武陵山科创中心助力区域科技成果转化',
    date: '2025-10-24',
    tags: ['活动聚会', '交流学习'],
    image: '/static/img/index/new1.png'
  },
  {
    title: '成果智汇合川赋能科创企业',
    date: '2025-10-22',
    tags: ['活动聚会', '交流学习'],
    image: '/static/img/index/new2.png'
  },
  {
    title: '环大学创新生态圈技术经理人经验分享沙龙在渝成功举办',
    date: '2025-10-17',
    tags: ['活动聚会', '交流学习'],
    image: '/static/img/index/new3.png'
  },
  {
    title: '汇聚发展合力 九龙坡区政协专题调研技术经理人队伍建设',
    date: '2025-10-17',
    tags: ['活动聚会', '交流学习'],
    image: '/static/img/index/new4.png'
  }
]);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

const handlePublish = (type) => {
  uni.showToast({
    title: '还没有开放',
    icon: 'none'
  });
};

const navigateTo = (url) => {
  uni.navigateTo({
    url: url
  });
};

const getTagClass = (tag) => {
  if (tag === '科技成果' || tag === '活动聚会' || tag === '交流学习') return 'blue-tag';
  if (tag === '技术入股') return 'blue-outline-tag';
  if (tag === '技术需求') return 'orange-tag';
  return 'orange-outline-tag';
};
</script>

<style lang="scss" scoped>
/* Page Layout */
@font-face {
  font-family: 'DingTalk JinBuTi';
  src: url('/static/font/钉钉进步体0111/DingTalk JinBuTi.ttf');
}

.container {
  min-height: 100vh;
  padding: 0 10px;
  box-sizing: border-box; 
}

/* Global Background */
.global-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/static/img/bgImg.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
  /* Ensure it covers everything */
}

/* Top Section */
.top-section {
  position: relative;
  /* Removed local background logic */
  z-index: 1;
}

/* Ensure content sits above the faint background */
.custom-header, 
.banner-wrapper, 
.action-section, 
.nav-grid {
  position: relative;
  z-index: 1;
}

/* Custom Header */
.custom-header {
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  height: 44px; /* Standard nav bar height */
  display: flex;
  align-items: center;
}

.header-left {
  width: 60rpx;
  display: flex;
  align-items: center;
}

.header-title {
  font-size: 38rpx;
  font-weight: 500;
  color: #333;
}

.header-right-spacer {
    width: 60rpx;
}

/* Banner */
.banner-wrapper {
  padding:16rpx 0;
}

.banner-swiper {
  height: 350rpx;
  width: 100%;
  border-radius: 20rpx;
  overflow: hidden;

  :deep(.uni-swiper-dot) {
    width: 12rpx !important;
    height: 12rpx !important;
  }
}

.banner-image {
  width: 100%;
  height: 100%;
}

/* Floating Card */
.floating-card {
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0; /* Default: Flat bottom to join with section below */
  padding: 34rpx 20rpx 30rpx;
  box-shadow: 0 4rpx 20rpx rgba(0,0,0,0.05);
  position: relative;
  z-index: 10;
  transition: border-radius 0.3s ease, margin-bottom 0.3s ease;
}

.floating-card.is-scrolled {
  border-radius: 20rpx; /* Restore rounded bottom when scrolled */
}

/* Action Button */
.action-section {
  padding: 0;
  margin-bottom: 30rpx;
}

.action-btn {
  background: linear-gradient(to right, #007aff, #00b4ff);
  color: white;
  padding: 16rpx 0 8rpx;
  width: 100%;
  border-radius: 12rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 10rpx rgba(0, 122, 255, 0.3);
  box-sizing: border-box; /* Ensure padding doesn't exceed 100% width */
}

.action-text {
  font-size: 28rpx;
  font-weight: normal;
  font-family: 'DingTalk JinBuTi', sans-serif;
}

.arrow-down {
  font-size: 20rpx;
  margin-top: 2rpx;
}

/* Nav Grid */
.nav-grid {
  display: flex;
  justify-content: space-around;
  padding: 10rpx 0;
  /* Transparent background to show the bgImg behind it if desired, 
     but user said "ends at studio intro icon", suggesting the bgCOVERS this area. 
     So we keep transparent here and let TopSection handle the bg. */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  text{
    font-size: 26rpx;
    color: #333;
    font-family: 'DingTalk JinBuTi', sans-serif;
  }
}

.icon-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 10rpx;
}

.nav-icon {
  width: 80rpx;
  height: 80rpx;
  position: relative;
  z-index: 2;
}

.icon-shadow {
  position: absolute;
  bottom: -6rpx;
  width: 60rpx;
  height: 16rpx;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  z-index: 1;
}

/* White Section for content below */
.white-section {
    /* Removed background-color to let global background show */
    border-radius: 20rpx 20rpx 0 0; 
    position: relative;
    z-index: 1;
    padding-top: 0; /* Default 0 */
    transition: padding-top 0.3s ease;
}

.white-section.is-scrolled {
    padding-top: 24rpx;
}

.sectionTop{
     padding: 20rpx 32rpx;
    background-color: #fff;
    border-radius: 0; /* Default 0 */
    transition: border-radius 0.3s ease;
}

.white-section.is-scrolled .sectionTop {
    border-radius: 20rpx 20rpx 0 0; /* Rounded when scrolled */
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12rpx 16rpx;
  background-color: #fff;
}

.section-title {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 34rpx;
  font-weight: bold;
  font-style: italic; /* Added italic as seen in reference images usually */
  border-bottom: 3px solid #007aff;
  display: inline-block;
  padding-bottom: 5px;
}

.more-link {
  color: #999;
  font-size: 28rpx;
}

/* Tech List */
.tech-item {
  padding: 20rpx 0;
}

.tech-title-row {
  display: flex;
  align-items: center;
  margin-bottom: 10rpx;
}

.tech-highlight {
    width: 60rpx;
    height: 30rpx;
    background: linear-gradient(to right, #00f2fe, #4facfe);
    filter: blur(8px);
    position: absolute;
    opacity: 0.3;
}

.tech-title {
  font-size: 32rpx;
  font-weight: bold;
  position: relative;
  z-index: 1;
}

.tech-tags {
  display: flex;
  gap: 15rpx;
}

/* News List */
.news-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
  border-radius: 10rpx;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
  padding: 8rpx;
}

.news-image {
  width: 100%;
  height: 300rpx;
  background-color: #eee;
  border-radius: 10rpx;
}

.news-content {
  padding: 15rpx;
}

.news-title {
  font-size: 32rpx;
  display: block;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date-container {
  display: flex;
  align-items: center;
}

.calendar-icon {
  width: 28rpx;
  height: 28rpx;
  margin-right: 8rpx;
}

.news-date {
  color: #999;
  font-size: 26rpx;
}

/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  /* Align popup similar to main button position roughly */
  padding-top: 450rpx; 
  align-items: flex-start;
}

.popup-content {
  background-color: white;
  width: 90%;
  border-radius: 20rpx;
  padding: 20rpx;
  box-shadow: 0 4rpx 20rpx rgba(0,0,0,0.2);
}

.popup-btn {
    border: 2rpx solid #007aff;
    border-radius: 10rpx;
    padding: 15rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #007aff;
    font-weight: bold;
    margin-bottom: 30rpx;
    background-color: #fff;
}

.arrow-up {
  font-size: 24rpx;
  color: #007aff;
  margin-top: 5rpx;
}

.popup-grid {
  display: flex;
  justify-content: space-around;
}

.popup-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-icon {
  width: 80rpx;
  height: 80rpx;
  margin-bottom: 10rpx;
  border-radius: 10rpx;
}

/* Tags */
.tag {
  font-size: 24rpx;
  padding: 6rpx 24rpx;
  border-radius: 30rpx; /* Pill shape */
  display: inline-block;
  margin-right: 15rpx;
}

.blue-tag {
  background-color: #e6f1ff;
  color: #007aff;
}

.blue-outline-tag {
  background-color: #fff;
  border: 1px solid #007aff;
  color: #007aff;
  /* Adjust padding to account for border if needed to match height, roughly same */
}

.orange-tag {
   background-color: #ffb400; /* Gold/Orange solid */
   color: #333;
}

.orange-outline-tag {
    color: #ffb400;
    border: 1px solid #ffb400;
    background-color: #fff;
}
</style>