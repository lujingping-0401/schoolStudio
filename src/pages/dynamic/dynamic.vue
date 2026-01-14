<template>
  <view class="container">
    <!-- Global Background -->
    <view class="global-background"></view>

    <!-- Search Bar -->
    <view class="search-section">
      <u-search placeholder="请输入搜索内容" v-model="keyword" :show-action="false" shape="round" bg-color="#fff"></u-search>
    </view>

    <!-- News List -->
    <view class="news-list">
      <view class="news-item" v-for="(item, index) in dynamics" :key="index" @click="navigateTo('/pages/dynamic/compontes/dynamicDetail/dynamicDetail')">
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

    <!-- No More Data -->
    <view class="no-more">
      <text class="no-more-text">没有更多了</text>
      <view class="no-more-line"></view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const keyword = ref('');

// Dynamic data matching the images provided
const dynamics = ref([
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
    title: '汇聚发展合力 九龙坡区政协专题调研技术经理人队伍建设',
    date: '2025-08-29',
    tags: ['活动聚会', '交流学习'],
    image: '/static/img/index/new3.png'
  },
  {
    title: '2025年重庆市卫生健康领域高级技术经理人培训班成功举办',
    date: '2025-06-12',
    tags: ['活动聚会', '交流学习'],
    image: '/static/img/index/new4.png'
  }
]);

const navigateTo = (url) => {
  uni.navigateTo({
    url: url
  });
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DingTalk JinBuTi';
  src: url('/static/font/钉钉进步体0111/DingTalk JinBuTi.ttf');
}

.container {
  min-height: 100vh;
  padding: 20rpx;
  position: relative;
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
}

/* Content needs z-index to sit above bg */
.search-section, .news-list, .no-more {
    position: relative;
    z-index: 1;
}

/* Search Section */
.search-section {
  margin-bottom: 30rpx;
}

/* News List Styles - Copied & Adapted from Index */
.news-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
  border-radius: 20rpx;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4rpx 15rpx rgba(0,0,0,0.03);
  padding: 10rpx; /* Slight inner padding for the image wrapper feel */
}

.news-image {
  width: 100%;
  height: 340rpx;
  background-color: #eee;
  border-radius: 16rpx; /* Inner rounded corners for image */
}

.news-content {
  padding: 24rpx 14rpx 14rpx;
}

.news-title {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 34rpx;
  display: block;
  font-weight: bold;
  margin-bottom: 20rpx;
  color: #000;
  line-height: 1.4;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-tags {
  display: flex;
}

.tag {
  font-size: 24rpx;
  padding: 6rpx 20rpx;
  border-radius: 30rpx;
  display: inline-block;
  margin-right: 15rpx;
}

.blue-tag {
  background-color: #e6f1ff;
  color: #007aff;
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

/* No More Data Footer */
.no-more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40rpx 0;
  position: relative;
}

.no-more-text {
  font-size: 24rpx;
  color: #ccc;
  background-color: transparent ; /* Matches container bg */
  padding: 0 12rpx;
  position: relative;
  z-index: 1;
}

.no-more-line {
  position: absolute;
  height: 1px;
  background-color: #e0e0e0;
  width: 40%;
  left: 30%;
  z-index: 0;
}
</style>
