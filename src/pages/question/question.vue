<template>
  <view class="container">
    <view class="form-wrapper">
      <!-- Question Content -->
      <view class="form-item">
        <text class="label">问题内容</text>
        <input class="input" type="text" placeholder="请输入问题内容" placeholder-class="placeholder" v-model="formData.content" />
      </view>
      
      <!-- Contact Person -->
      <view class="form-item">
        <text class="label">联系人</text>
        <input class="input" type="text" placeholder="请输入联系人" placeholder-class="placeholder" v-model="formData.person" />
      </view>
      
      <!-- Contact Method -->
      <view class="form-item">
        <text class="label">联系方式</text>
        <input class="input" type="text" placeholder="请输入联系电话或者邮箱" placeholder-class="placeholder" v-model="formData.contact" />
      </view>
    </view>

    <!-- Submit Button -->
    <view class="submit-section">
      <button class="submit-btn" @click="handleSubmit">提交</button>
    </view>
  </view>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  content: '',
  person: '',
  contact: ''
});

const handleSubmit = () => {
  if (!formData.content.trim()) {
    uni.showToast({ title: '请输入问题内容', icon: 'none' });
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

  // If validation passes
  uni.showToast({ title: '提交成功', icon: 'success' });
  
  setTimeout(() => {
    uni.navigateBack();
  }, 1500);
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.form-wrapper {
  padding: 0 40rpx;
  margin-top: 20rpx;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1px solid #f0f0f0;
}

.label {
  font-size: 30rpx;
  color: #333;
  width: 160rpx; /* Fixed width for alignment */
}

.input {
  flex: 1;
  font-size: 30rpx;
  color: #333;
}

.placeholder {
  color: #c0c4cc;
}

.submit-section {
  padding: 40rpx;
  margin-top: 60rpx; /* Adjusted spacing, removed margin-top: auto */
  margin-bottom: 40rpx;
}

.submit-btn {
  background-color: #007aff;
  color: #fff;
  font-size: 32rpx;
  border-radius: 45rpx;
  height: 90rpx;
  line-height: 90rpx;
  text-align: center;
  border: none;
}

.submit-btn::after {
  border: none;
}
</style>
