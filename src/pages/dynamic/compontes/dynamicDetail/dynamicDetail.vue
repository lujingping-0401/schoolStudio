<template>
  <view class="container">
    <!-- Global Background -->
    <view class="global-background"></view>
    
    <view class="content-card">
      <!-- Title Section -->
      <view class="header-section">
        <text class="main-title">首届武陵山人才节成功举办 武陵山科创中心助力区域科技成果转化</text>
        
        <view class="meta-info">
          <view class="meta-item">
            <text class="meta-label">发布：</text>
            <text class="meta-value">工作室管理组</text>
          </view>
          <view class="meta-divider"></view>
          <view class="meta-item">
            <u-icon name="clock" size="14" color="#9CA3AF"></u-icon>
            <text class="meta-value">2025-10-24 14:30</text>
          </view>
        </view>

        <!-- Tags Section -->
        <view class="tags-section">
          <view class="tag blue-tag">活动聚会</view>
          <view class="tag blue-tag">交流学习</view>
        </view>
      </view>

      <view class="card-divider"></view>

      <!-- Content Section -->
      <view class="article-body">
        <view class="paragraph lead">
          2025年10月24日至26日，重庆国际人才交流大会专场活动——武陵山人才节在重庆市黔江区隆重开幕。本届人才节由重庆国际人才交流大会组委会办公室指导，汇聚了来自渝鄂湘黔四省市的院士、专家、企业代表和人才工作者。
        </view>

        <view class="paragraph">
          重庆市科学技术研究院党委书记雷虹率领院综合办、资配中心、技转中心主要负责人，及武陵山科创中心筹备组、博士服务团出席活动。活动期间，黔江区人民政府党组成员、副区长滕旭荣与重庆市科学技术研究院党委委员、副院长岑军波代表双方签署“共建武陵山科创中心合作协议”并为武陵山科创中心揭牌，标志着该中心正式投入运营。
        </view>

        <!-- Image Insert -->
        <view class="image-wrapper">
             <image src="/static/img/index/new1.png" mode="widthFix" class="article-image"></image>
             <text class="image-caption">武陵山科创中心揭牌仪式现场</text>
        </view>

        <view class="paragraph">
           重科院新材料、生物医药、绿色低碳等领域的12名博士服务团成员首批入驻，将围绕地方产业技术需求开展产学研融通创新。武陵山科创中心与重庆三磊玻纤股份有限公司、重庆新晨星蚕丝绸科技有限公司、西南大学、北京工业大学重庆研究院签订了产学研合作协议。
        </view>

        <view class="quote-block">
          “重科院将以共建武陵山科创中心为契机，持续深化与黔江区及武陵山片区各市州的科技合作，助力构建‘人才引领、科技赋能、产业振兴’的区域高质量发展新格局。”
        </view>

        <view class="paragraph">
           会上，武陵山区新材料、食品及农产品加工领域龙头企业、高校院所共40余家单位发起成立武陵山新材料产业技术创新战略联盟，旨在共同推动关键共性技术联合攻关、标准制定、成果转化和产业化应用。大会还同步发布了武陵山区首批重点技术需求400余项、优秀科技成果1000余项。
        </view>
      </view>

      <!-- Footer Info -->
      <view class="footer-section">
        <view class="info-shelf">
          <view class="shelf-item">
            <view class="icon-box">
              <u-icon name="map-fill" size="18" color="#3B82F6"></u-icon>
            </view>
            <view class="shelf-content">
              <text class="shelf-label">活动地点</text>
              <text class="shelf-value">重庆市黔江区 武陵山科创中心</text>
            </view>
          </view>
        </view>

        <view class="share-box">
          <text class="share-title">分享至</text>
          <view class="share-icons">
             <view class="share-icon-btn"><u-icon name="weixin-fill" size="24" color="#07C160"></u-icon></view>
             <view class="share-icon-btn"><u-icon name="moments" size="24" color="#07C160"></u-icon></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import uIcon from 'uview-plus/components/u-icon/u-icon.vue';
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DingTalk JinBuTi';
  src: url('/static/font/钉钉进步体0111/DingTalk JinBuTi.ttf');
}

.container {
  min-height: 100vh;
  /* background-color: #F5F7FA; */
  padding: 30rpx;
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

.content-card {
  position: relative;
  z-index: 1;
  background-color:rgba(255,255,255,0.7);
  border-radius: 20rpx;
  padding: 40rpx 0;
  box-shadow: 0 4rpx 30rpx rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-section {
    padding: 0 40rpx;
    margin-bottom: 28rpx;
}

.main-title {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 44rpx;
  font-weight: bold;
  color: #111827;
  line-height: 1.4;
  margin-bottom: 24rpx;
  display: block;
}

.meta-info {
    display: flex;
    align-items: center;
    margin-bottom: 24rpx;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8rpx;
}

.meta-label {
    font-size: 24rpx;
    color: #9CA3AF;
}

.meta-value {
    font-size: 24rpx;
    color: #4B5563;
}

.meta-divider {
    width: 2rpx;
    height: 20rpx;
    background-color: #E5E7EB;
    margin: 0 20rpx;
}

.tags-section {
  display: flex;
  gap: 16rpx;
}

.tag {
  font-size: 22rpx;
  padding: 6rpx 20rpx;
  border-radius: 100rpx;
  font-weight: 500;
}

.blue-tag {
  background-color: #EFF6FF;
  color: #3B82F6;
  border: 1rpx solid #DBEAFE;
}

.article-body {
    padding: 0 40rpx;
}

.paragraph {
  font-size: 30rpx;
  color: #374151;
  line-height: 1.8;
  margin-bottom: 32rpx;
  text-align: justify;
}

.lead {
    font-weight: 500;
    color: #111827;
    font-size: 32rpx;
}

.quote-block {
    background-color: #F9FAFB;
    border-left: 8rpx solid #3B82F6;
    padding: 30rpx;
    margin: 40rpx 0;
    font-style: italic;
    color: #4B5563;
    font-size: 28rpx;
    border-radius: 0 12rpx 12rpx 0;
}

.image-wrapper {
  margin: 48rpx 0;
  border-radius: 16rpx;
  overflow: hidden;
  background-color: #F3F4F6;
}

.article-image {
  width: 100%;
  display: block;
}

.image-caption {
    display: block;
    text-align: center;
    font-size: 24rpx;
    color: #9CA3AF;
    padding: 16rpx 0;
    background-color: #F9FAFB;
}

.footer-section {
  margin-top: 60rpx;
  padding: 0 40rpx;
}

.info-shelf {
    background-color: #F8FAFC;
    border-radius: 20rpx;
    padding: 30rpx;
    margin-bottom: 40rpx;
}

.shelf-item {
    display: flex;
    align-items: center;
    gap: 24rpx;
}

.icon-box {
    width: 80rpx;
    height: 80rpx;
    background-color: #FFFFFF;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.shelf-content {
    display: flex;
    flex-direction: column;
}

.shelf-label {
    font-size: 22rpx;
    color: #9CA3AF;
    margin-bottom: 4rpx;
}

.shelf-value {
    font-size: 26rpx;
    color: #1F2937;
    font-weight: 500;
}

.share-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24rpx;
    padding-top: 20rpx;
}

.share-title {
    font-size: 24rpx;
    color: #9CA3AF;
    position: relative;
    
    &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 60rpx;
        height: 1rpx;
        background-color: #E5E7EB;
    }
    &::before { left: -80rpx; }
    &::after { right: -80rpx; }
}

.share-icons {
    display: flex;
    gap: 40rpx;
}

.share-icon-btn {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    border: 1rpx solid #F3F4F6;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20rpx); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
```
