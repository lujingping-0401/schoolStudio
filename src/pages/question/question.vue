<template>
  <view class="container">
    <!-- Global Background -->
    <view class="global-background"></view>
    
    <view class="status-bar-placeholder"></view>
    
    <!-- Header Title -->
    <view class="header-section">
       <view class="title-wrapper">
         <view class="deco-dot"></view>
         <text class="page-title">问题咨询</text>
         <view class="deco-dot"></view>
       </view>
       <text class="subtitle">Feedback & Support</text>
    </view>

    <view class="content-wrapper">
      <view class="form-card">
        <view class="card-header">
          <view class="title-line"></view>
          <text class="card-title">填写咨询信息</text>
        </view>

        <view class="form-body">
          <!-- Question Content -->
          <view class="form-item border-btm">
            <view class="label-row">
              <u-icon name="chat-fill" color="#3B82F6" size="18"></u-icon>
              <text class="label">咨询内容</text>
            </view>
            <textarea 
              class="textarea" 
              placeholder="请详细描述您的问题或建议..." 
              placeholder-class="placeholder" 
              v-model="formData.content"
              :maxlength="500"
            />
            <text class="char-count">{{ formData.content.length }}/500</text>
          </view>
          
          <!-- Contact Person -->
          <view class="form-item border-btm">
            <view class="label-row">
              <u-icon name="account-fill" color="#3B82F6" size="18"></u-icon>
              <text class="label">联系人</text>
            </view>
            <input 
              class="input-box" 
              type="text" 
              placeholder="请输入您的姓名" 
              placeholder-class="placeholder" 
              v-model="formData.person" 
            />
          </view>
          
          <!-- Contact Method -->
          <view class="form-item">
            <view class="label-row">
              <u-icon name="phone-fill" color="#3B82F6" size="18"></u-icon>
              <text class="label">联系方式</text>
            </view>
            <input 
              class="input-box" 
              type="text" 
              placeholder="手机号码或电子邮箱" 
              placeholder-class="placeholder" 
              v-model="formData.contact" 
            />
          </view>
        </view>
      </view>

      <!-- Submit Button -->
      <view class="submit-section">
        <button class="submit-btn" :class="{ 'disabled': !isFormValid }" @click="handleSubmit">
          <view class="btn-content">
            <u-icon name="checkmark-circle-fill" color="#fff" size="20"></u-icon>
            <text class="btn-text">立即提交</text>
          </view>
        </button>
        <text class="tips">我们将尽快处理并给您回复，感谢您的反馈！</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive, computed } from 'vue';

const formData = reactive({
  content: '',
  person: '',
  contact: ''
});

const isFormValid = computed(() => {
  return formData.content.trim() && formData.person.trim() && formData.contact.trim();
});

const handleSubmit = () => {
  if (!formData.content.trim()) {
    uni.showToast({ title: '请输入咨询内容', icon: 'none' });
    return;
  }
  if (!formData.person.trim()) {
    uni.showToast({ title: '请输入联系人', icon: 'none' });
    return;
  }
  if (!formData.contact.trim()) {
    uni.showToast({ title: '请输入联系方式', icon: 'none' });
    return;
  }

  // Simple validation for phone (11 digits) or email
  const phoneRegex = /^1[3-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneRegex.test(formData.contact) && !emailRegex.test(formData.contact)) {
    uni.showToast({ title: '联系方式格式有误', icon: 'none' });
    return;
  }

  uni.showLoading({ title: '提交中...' });
  
  // Simulate API call
  setTimeout(() => {
    uni.hideLoading();
    uni.showToast({ title: '提交成功', icon: 'success' });
    
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
  }, 1000);
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DingTalk JinBuTi';
  src: url('/static/font/钉钉进步体0111/DingTalk JinBuTi.ttf');
}

.container {
  min-height: 100vh;
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

/* Header */
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30rpx 0 50rpx;
  position: relative;
  z-index: 1;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.page-title {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 48rpx;
  color: #1F2937;
  letter-spacing: 2rpx;
}

.deco-dot {
  width: 12rpx;
  height: 12rpx;
  background-color: #3B82F6;
  border-radius: 50%;
  opacity: 0.8;
}

.subtitle {
  font-size: 20rpx;
  color: #9CA3AF;
  margin-top: 10rpx;
  letter-spacing: 4rpx;
  text-transform: uppercase;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  animation: fadeIn 0.6s ease-out;
}

.form-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 30rpx;
  padding: 40rpx;
  box-shadow: 0 4rpx 30rpx rgba(0, 0, 0, 0.05);
  margin-bottom: 50rpx;
}

.card-header {
  margin-bottom: 40rpx;
  display: flex;
  align-items: center;
}

.title-line {
  width: 6rpx;
  height: 28rpx;
  background-color: #3b82f6;
  margin-right: 12rpx;
  border-radius: 4rpx;
}

.card-title {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 32rpx;
  color: #1F2937;
  font-weight: bold;
}

.form-item {
  padding: 30rpx 0;
}

.border-btm {
  border-bottom: 1rpx solid #F3F4F6;
}

.label-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 20rpx;
}

.label {
  font-family: 'DingTalk JinBuTi', sans-serif;
  font-size: 30rpx;
  color: #374151;
}

.textarea {
  width: 100%;
  height: 200rpx;
  font-size: 28rpx;
  color: #1F2937;
  background-color: #F9FAFB;
  border-radius: 16rpx;
  padding: 20rpx;
  box-sizing: border-box;
}

.char-count {
  display: block;
  text-align: right;
  font-size: 22rpx;
  color: #9CA3AF;
  margin-top: 10rpx;
}

.input-box {
  width: 100%;
  height: 80rpx;
  font-size: 28rpx;
  color: #1F2937;
  background-color: #F9FAFB;
  border-radius: 16rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
}

.placeholder {
  color: #9CA3AF;
}

.submit-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30rpx;
}

.submit-btn {
  width: 100%;
  height: 100rpx;
  background: linear-gradient(135deg, #60A5FA, #3B82F6);
  border-radius: 50rpx;
  border: none;
  box-shadow: 0 10rpx 20rpx rgba(59, 130, 246, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.submit-btn:active {
  transform: scale(0.98);
  opacity: 0.9;
}

.submit-btn.disabled {
    background: #D1D5DB;
    box-shadow: none;
    opacity: 0.8;
}

.btn-content {
    display: flex;
    align-items: center;
    gap: 16rpx;
}

.btn-text {
  color: #fff;
  font-size: 34rpx;
  font-family: 'DingTalk JinBuTi', sans-serif;
  letter-spacing: 4rpx;
}

.tips {
    font-size: 24rpx;
    color: #9CA3AF;
    text-align: center;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20rpx); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
