<template>
  <view class="container">
    <view class="content">
      <!-- Header Section -->
      <view class="header-section">
        <view class="title">青柠檬及橄榄油深加工产品开发</view>
        <view class="tag-row">
          <text class="tag blue-tag">现有技术/产品改进</text>
        </view>
      </view>

      <!-- Company Info -->
      <view class="company-section">
        <view class="company-name">重庆绿丰天润油橄榄开发有限公司</view>
        <view class="info-row">
          <text class="label">企业性质：</text>
          <text class="value">私企</text>
        </view>
        <view class="info-row">
          <text class="label">行业领域：</text>
          <text class="value">农、林、牧、渔业</text>
        </view>
        <view class="info-row">
          <text class="label">拟投资金：</text>
          <text class="value highlight-blue">500万元以上</text>
        </view>
        <view class="info-row">
          <text class="label">技术匹配关键词：</text>
          <text class="value">青柠檬、橄榄油</text>
        </view>
      </view>

      <!-- Requirement Description -->
      <view class="section">
        <view class="section-title">
          <image src="/static/img/detail/desc-icon.png" class="section-icon" v-if="false"></image> <!-- Placeholder for custom icon if needed, using u-icon below -->
          <u-icon name="order" size="24" color="#333" bold></u-icon>
          <text class="title-text">需求描述</text>
        </view>
        <view class="section-content">
          <text>1.研发青柠檬特级初榨橄榄油：优化橄榄油低温压榨（冷榨）工艺；通过低温破碎保留青柠檬柠檬烯、柠檬醛，采用冷磨技术提取果皮精油；研究风味融合工艺，同步冷浸渍，离心分离；建立质量控制体系，制定企业标准；2.研发橄榄油软胶囊：通过超临界萃取提升油橄榄出油率，利用新型微胶囊包埋橄榄多酚，促进协同增效；开发纤维素植物胶囊壳解决明胶软胶囊夏季易粘连问题；建立质量控制体系，制定企业标准；3.研发橄榄叶防腐剂：筛选出优良品种和优良橄榄叶；采用液质联用等进行橄榄叶等活性成分的分离提取；通过提取物与茶多酚等天然防腐剂，维生素C等抗氧化剂，柠檬酸等天然抑菌成分进行复配，实现协同增效；开展食品体系适用性、安全性评价与风险评估等。</text>
        </view>
      </view>

      <!-- Expected Effect -->
      <view class="section">
        <view class="section-title">
          <u-icon name="rocket" size="24" color="#333" bold></u-icon>
          <text class="title-text">预期效果</text>
        </view>
        <view class="gray-box">
           <text>1.研发青柠檬特级初榨橄榄油：优化橄榄油低温压榨（冷榨）工艺；通过低温破碎保留青柠檬柠檬烯、柠檬醛，采用冷磨技术提取果皮精油；研究风味融合工艺，同步冷浸渍，离心分离；建立质量控制体系，制定企业标准；2.研发橄榄油软胶囊：通过超临界萃取提升油橄榄出油率，利用新型微胶囊包埋橄榄多酚，促进协同增效；开发纤维素植物胶囊壳解决明胶软胶囊夏季易粘连问题；建立质量控制体系，制定企业标准；3.研发橄榄叶防腐剂：筛选出优良品种和优良橄榄叶；采用液质联用等进行橄榄叶等活性成分的分离提取；通过提取物与茶多酚等天然防腐剂，维生素C等抗氧化剂，柠檬酸等天然抑菌成分进行复配，实现协同增效；开展食品体系适用性、安全性评价与风险评估等。</text>
        </view>
      </view>

      <!-- Existing Foundation -->
      <view class="section">
        <view class="section-title">
          <u-icon name="bookmark" size="24" color="#333" bold></u-icon>
          <text class="title-text">现有基础</text>
        </view>
        <view class="check-list">
          <view class="check-item">
            <u-icon name="checkmark" size="18" color="#00e5e5" bold></u-icon>
            <text class="check-text">已有研发基础</text>
          </view>
          <view class="check-item">
            <u-icon name="close" size="16" color="#ff4d4f" bold></u-icon>
            <text class="check-text">有相关工艺设备</text>
          </view>
          <view class="check-item">
             <u-icon name="close" size="16" color="#ff4d4f" bold></u-icon>
            <text class="check-text">有技术的消化吸收能力</text>
          </view>
          <view class="check-item">
            <u-icon name="checkmark" size="18" color="#00e5e5" bold></u-icon>
            <text class="check-text">与其他科研单位有过合作</text>
          </view>
        </view>

        <view class="sub-title">合作描述</view>
        <view class="section-content">
          <text>本公司以油橄榄育苗、种植、加工、销售、科研为一体的木本油料企业。是万州区农业产业化龙头企业，国家林业草原油橄榄工程技术研发中心共建单位、重庆市油橄榄研发中心试验基地、重庆市油橄榄专家大院。公司建设年加工3000吨油橄榄鲜果生产线1条；油橄榄育苗基地1个，引进油橄榄品种35个；年培育优质油橄榄种苗20万株；建设500亩油橄榄标准示范基地，收集保护国内油橄榄古树84株；公司引进国内外油橄榄专家5名，注册“神女峰”与“禄天润”商标2个，申报国家发明专利2项，实用新型专利6项，承担“油橄榄早实品种筛选研究与关键技术”、“万州区油橄榄古树保护及油橄榄新品种选育”市级科研项目2个。</text>
        </view>
      </view>

      <!-- Contact Person -->
      <view class="contact-box">
        <text class="contact-label">项目联系人：</text>
        <text class="contact-name">马老师</text>
      </view>

      <!-- Bottom Spacer -->
      <view style="height: 40rpx;"></view>
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
  background-color: #fff;
  padding: 30rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #000;
  margin-bottom: 20rpx;
  font-family: 'DingTalk JinBuTi', sans-serif;
}

.tag-row {
  margin-bottom: 30rpx;
}

.tag {
  display: inline-block;
  padding: 6rpx 20rpx;
  border-radius: 30rpx;
  font-size: 24rpx;
}

.blue-tag {
  background-color: #e6f1ff;
  color: #007aff;
}

.company-section {
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #eee;
  margin-bottom: 30rpx;
}

.company-name {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  font-family: 'DingTalk JinBuTi', sans-serif;
}

.info-row {
  display: flex;
  margin-bottom: 12rpx;
  font-size: 28rpx;
  color: #666;
}

.label {
  color: #666;
  min-width: 140rpx;
}

.value {
  color: #666;
  flex: 1;
}

.highlight-blue {
  color: #007aff; 
  /* or specific color from image if different, looks like dark grey in image but usually money is highlighted or plain. 
     In image it looks plain dark grey, actually. Let's stick to #666 or #333. 
     Wait, image shows "500万元以上" as same color as text, maybe slightly darker. 
     Let's keep it consistent. */
  color: #666; 
}

.section {
  margin-bottom: 40rpx;
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.title-text {
  font-size: 32rpx;
  font-weight: bold;
  margin-left: 10rpx;
  font-family: 'DingTalk JinBuTi', sans-serif;
}

.section-content {
  font-size: 28rpx;
  color: #666;
  line-height: 1.6;
  text-align: justify;
}

.gray-box {
  background-color: #f5f7fa;
  padding: 20rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
  color: #666;
  line-height: 1.6;
  text-align: justify;
}

.check-list {
  margin-bottom: 20rpx;
}

.check-item {
  display: flex;
  align-items: center;
  margin-bottom: 15rpx;
}

.check-text {
  margin-left: 10rpx;
  font-size: 28rpx;
  color: #666;
}

.sub-title {
  font-size: 30rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.contact-box {
  background-color: #f0f8ff;
  padding: 20rpx 30rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
  margin-top: 20rpx;
}

.contact-label {
  font-size: 30rpx;
  font-weight: bold;
}

.contact-name {
  font-size: 30rpx;
  font-weight: bold;
  margin-left: 10rpx;
}
</style>