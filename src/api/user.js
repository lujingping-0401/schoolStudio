import request from "@/utils/http.js";

/**
 * 获取验证码
 */
export const getCaptcha = () => {
  return request({
    url: "/user/captcha",
    method: "GET",
  });
};

/**
 * 登录
 * @param {object} data - { username, password, captchaId, captchaCode }
 */
export const login = (data) => {
  return request({
    url: "/user/login",
    method: "POST",
    data,
  });
};
