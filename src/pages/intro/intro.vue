<template>
  <view class="container">
    <!-- Header Title -->
    <view class="header-section">
       <view class="deco-line-left"></view>
       <text class="page-title">工作室介绍</text>
       <view class="deco-line-right"></view>
    </view>

    <view class="content-wrapper">
      <!-- Main Intro Text -->
      <view class="intro-paragraph">
        雷程亮成果转移转化创新工作室自2024年5月6日正式成立以来，始终以“推动科技成果向现实生产力转化”为核心使命，聚焦产业升级、创新驱动、企业一线的发展需求，充分发挥桥梁纽带作用，深耕技术赋能，助力区县企业提质增效；通过技术经纪（理）人才培育，不断构建可持续发展机制；深度链接高校院所、企业与职工群体，构建起“产学研用”一体化生态服务体系。
      </view>

      <!-- Diagram Image Placeholer -->
      <view class="image-container">
        <!-- User needs to add the actual chart image here. Using a placeholder or banner for layout. -->
        <image src="/static/img/index/intrdouce.jpg" mode="widthFix" class="diagram-image"></image>
      </view>

      <!-- Info Sections -->
      <view class="info-list">
        
        <view class="info-item">
          <text class="info-label">工作室领衔人：</text>
          <text class="info-content">雷程亮 重庆市技术转移研究院有限公司董事长兼总经理</text>
        </view>

        <view class="info-item">
          <text class="info-label">组织架构：</text>
          <text class="info-content">概念验证服务工作小组</text>
          <text class="info-content">转移转化服务工作小组</text>
        </view>

        <view class="info-item">
           <text class="info-label">核心职能：</text>
           <text class="info-content">成果汇交、需求对接、成果转化。</text>
        </view>

        <view class="info-item">
           <text class="info-label">联系人：杨老师</text>
           <text class="info-content">联系电话：17783262398</text>
        </view>

      </view>

       <!-- Bottom Contact Card -->
      <view class="contact-card">
         <view class="card-row">
           <text class="card-label">联系人</text>
           <text class="card-value name">侯建国</text>
         </view>
         <view class="card-row">
           <text class="card-label">联系方式</text>
           <view class="phone-wrap">
             <u-icon name="phone" size="18" color="#333" class="phone-icon"></u-icon>
             <text class="card-value">17399996666</text>
           </view>
         </view>
      </view>

    </view>
  </view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DingTalk JinBuTi';
  src: url('/static/font/钉钉进步体0111/DingTalk JinBuTi.ttf');
}

.container {
  min-height: 100vh;
  background-color: #edf2f5;
  padding:12rpx 30rpx;
}

/* Header */
.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rpx;
  position: relative;
}

.page-title {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 40rpx;
  font-weight: bold;
  color: #000;
  margin: 0 20rpx;
  z-index: 1;
}

/* Decorative lines mimicking the tech style */
.deco-line-left, .deco-line-right {
    height: 4rpx;
    width: 60rpx;
    background: linear-gradient(to right, transparent, #007aff);
    border-radius: 2rpx;
}
.deco-line-right {
    background: linear-gradient(to left, transparent, #007aff);
}

.content-wrapper {
  background-color: transparent;
}

.intro-paragraph {
  color: #6b7280;
  line-height: 1.8;
  text-indent: 2em;
  margin-bottom: 20rpx;
  text-align: justify;
}

.image-container {
  margin-bottom: 28rpx;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 10rpx rgba(0,0,0,0.05);
}

.diagram-image {
  height: 288rpx !important;
  width: 100%;
  display: block;
}

.info-list {
  margin-bottom: 60rpx;
}

.info-item {
  margin-bottom: 30rpx;
}

.info-label {
  display: block;
  font-size: 32rpx;
  color: #333;
  margin-bottom: 10rpx;
  font-family: 'DingTalk JinBuTi', sans-serif; /* Consistent font usage */
}

.info-content {
  display: block;
  color: #666;
  line-height: 1.6;
}

/* Contact Card */
.contact-card {
  margin-top: 40rpx;
  padding: 20rpx 0;
}

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.card-label {
  color: #333;
}

.card-value {
  color: #333;
  font-weight: 500;
}

.name {
  font-weight: bold;
  font-size: 34rpx;
}

.phone-wrap {
    display: flex;
    align-items: center;
    gap: 10rpx;
}
</style>
