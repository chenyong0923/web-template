import { history } from '@umijs/max';
import { message } from 'antd';
import { extend, ResponseError } from 'umi-request';

import codeMap from '@/assets/data/code';
import { CookieKeyEnum, StorageUtils } from '@/utils';

export const DEFAULT_TIP_MESSAGE = '请求失败，请刷新重试';

// 处理异常请求
const errorHandler = (error: ResponseError) => {
  console.log('error', error);
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    console.error('error data', error.data);
    console.error('error request', error.request);
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    console.error(error.message);
  }
  throw error; // 如果throw. 错误将继续抛出.
};

const request = extend({
  prefix: process.env.BASE_API,
  timeout: 10000,
  errorHandler,
});

// request拦截器, 改变 url 或 options.
request.interceptors.request.use((url, options) => {
  const _header: HeadersInit & { ENTERTOKEN?: string } = options.headers ?? {};
  const token = StorageUtils.getCookie(CookieKeyEnum.Token);
  if (token) {
    _header.ENTERTOKEN = token;
  }
  return {
    url,
    options: {
      ...options,
      headers: _header,
      interceptors: true,
    },
  };
});

// 提前对响应做异常处理
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();

  const { success, code, msg } = data;
  // 处理业务错误
  if (!success) {
    // 需要特殊处理的业务错误码
    const codes: string[] = [];
    const errMsg = codeMap[code] ?? msg ?? DEFAULT_TIP_MESSAGE;
    if (codes.includes(code)) {
      history.push('/');
    } else {
      message.error(errMsg);
    }
    return Promise.reject(new Error(errMsg));
  }

  return response;
});

export default request;
