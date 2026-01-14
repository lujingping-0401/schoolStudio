<template>
  <view class="container">
    <view class="content">
      <!-- Title Section -->
      <view class="title-section">
        <text class="main-title">首届武陵山人才节成功举办 武陵山科创中心助力区域科技成果转化</text>
      </view>

      <!-- Tags Section -->
      <view class="tags-section">
        <text class="tag blue-tag">活动聚会</text>
        <text class="tag blue-tag">交流学习</text>
      </view>

      <!-- Content Section -->
      <view class="article-content">
        <view class="paragraph">
          <text>2025年10月24日至26日，重庆国际人才交流大会专场活动——武陵山人才节在重庆市黔江区隆重开幕。本届人才节由重庆国际人才交流大会组委会办公室指导，汇聚了来自渝鄂湘黔四省市的院士、专家、企业代表和人才工作者。重庆市科学技术研究院党委书记雷虹率领院综合办、资配中心、技转中心主要负责人，及武陵山科创中心筹备组、博士服务团出席活动。活动期间，黔江区人民政府党组成员、副区长滕旭荣与重庆市科学技术研究院党委委员、副院长岑军波代表双方签署“共建武陵山科创中心合作协议”并为武陵山科创中心揭牌，标志着该中心正式投入运营，将成为推动武陵山片区科技成果转化与产业升级的重要平台。重科院新材料、生物医药、绿色低碳等领域的12名博士服务团成员首批入驻，将围绕地方产业技术需求开展产学研融通创新。武陵山科创中心与重庆三磊玻纤股份有限公司、重庆新晨星蚕丝绸科技有限公司、西南大学、北京工业大学重庆研究院签订了产学研合作协议，为进一步推动科技成果在武陵山区落地转化奠定了坚实基础。</text>
        </view>

        <!-- Image Insert -->
        <view class="image-wrapper">
             <image src="/static/img/index/new1.png" mode="widthFix" class="article-image"></image>
        </view>

        <view class="paragraph">
           <text>市技转院公司联合武陵山科技创新中心、重庆科技发展战略研究院有限公司成功举办“火炬科技成果直通车暨武陵山科技成果对接会”。重庆市科技局、重科院、黔江区委等领导出席并致辞。雷虹书记指出，重科院将以共建武陵山科创中心为契机，充分发挥科研、人才与平台优势，持续深化与黔江区及武陵山片区各市州的科技合作，与武陵山片区各方携手共建“资源共享、平台共建、成果共用、利益共享”的跨区域协同创新共同体，助力构建“人才引领、科技赋能、产业振兴”的区域高质量发展新格局。会上，武陵山科创中心向武陵山区发出科技合作倡议，武陵山区新材料、食品及农产品加工领域龙头企业、高校院所共40余家单位发起成立武陵山新材料产业技术创新战略联盟、食品及农产品加工产业技术创新战略联盟，旨在共同推动关键共性技术联合攻关、标准制定、成果转化和产业化应用。大会还同步发布了武陵山区首批重点技术需求400余项、优秀科技成果1000余项，引发了专家团队的广泛关注。会后，重科院博士专家团队与武陵山片区40余家企业代表进行了新材料、生物医药、食品农产品三场专题对接，为推动科技供给与产业需求高效匹配，深入挖掘地方产业发展需求，为进一步深化院地合作、产学研合作奠定基础。市技转院公司将以共建武陵山科创中心为契机，聚焦“416”科技创新布局和“33618”现代制造业集群体系建设，立足黔江，面向大武陵，围绕食品及农产品加工、新材料、生物医药等区域产业，持续深化与黔江区及武陵山片区各市州的科技合作，助力构建“人才引领、科技赋能、产业振兴”的区域高质量发展新格局，共绘武陵山片区协同创新与高质量发展的崭新画卷。</text>
        </view>
      </view>

      <!-- Footer Info -->
      <view class="footer-info">
        <view class="info-item">
          <u-icon name="calendar" size="18" color="#007aff"></u-icon>
          <text class="info-text">2025-10-24</text>
        </view>
         <view class="info-item">
          <u-icon name="map-fill" size="18" color="#007aff"></u-icon>
          <text class="info-text">武陵山科创中心</text>
        </view>
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

.title-section {
  margin-bottom: 20rpx;
}

.main-title {
  font-size: 38rpx;
  font-weight: bold;
  color: #000;
  line-height: 1.4;
  font-family: 'DingTalk JinBuTi', sans-serif;
}

.tags-section {
  display: flex;
  gap: 20rpx;
  margin-bottom: 30rpx;
}

.tag {
  font-size: 24rpx;
  padding: 8rpx 24rpx;
  border-radius: 30rpx;
}

.blue-tag {
  background-color: #e6f1ff;
  color: #007aff;
}

.article-content {
  margin-bottom: 40rpx;
}

.paragraph {
  font-size: 30rpx;
  color: #333;
  line-height: 1.8;
  margin-bottom: 30rpx;
  text-align: justify;
  text-indent: 2em; /* Indent first line of paragraphs */
}

.image-wrapper {
  margin: 30rpx 0;
  border-radius: 12rpx;
  overflow: hidden;
}

.article-image {
  width: 100%;
  border-radius: 12rpx;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15rpx;
}

.info-text {
  margin-left: 10rpx;
  font-size: 28rpx;
  color: #333;
}
</style>
