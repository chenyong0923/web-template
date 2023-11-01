import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

import packageJson from '../../package.json';

export enum CookieKeyEnum {
  Phone = 'c_phone',
  Password = 'c_password',
  Token = 'c_token',
}

export enum SessionStorageKey {
  HistoryStack = 's_history_stack',
}

class StorageUtils {
  // 加密密钥
  private static key = CryptoJS.enc.Hex.parse(packageJson.name.padEnd(32, '0'));
  // 加密向量
  private static iv = CryptoJS.enc.Hex.parse('LANYIYUN'.padEnd(32, '0'));

  /**
   * 获取 Cookie
   * @param key 键名
   * @returns 值
   */
  static getCookie(key: CookieKeyEnum) {
    const _key = this.encode(key);
    const value = Cookies.get(_key);
    return value ? this.decode(value) : value;
  }

  /**
   * 设置 Cookie
   * @param key 键名
   * @param value 值
   * @param options cookie 配置
   */
  static setCookie(
    key: CookieKeyEnum,
    value: any,
    options?: Cookies.CookieAttributes,
  ) {
    const _key = this.encode(key);
    const _value = this.encode(value);
    Cookies.set(_key, _value, options);
  }

  /**
   * 移除 Cookie
   * @param key 键名
   * @param options cookie 配置
   */
  static removeCookie(key: CookieKeyEnum, options?: Cookies.CookieAttributes) {
    const _key = this.encode(key);
    Cookies.remove(_key, options);
  }

  /**
   * 获取 SessionStorage 存储的值
   * @param key 键名
   * @returns 值
   */
  static getSessionStorage(key: SessionStorageKey) {
    const _key = this.encode(key);
    const value = sessionStorage.getItem(_key);
    return value ? this.decode(value) : value;
  }

  /**
   * 设置 SessionStorage
   * @param key 键名
   * @param value 值
   */
  static setSessionStorage(key: SessionStorageKey, value: any) {
    const _key = this.encode(key);
    const _value = this.encode(value);
    sessionStorage.setItem(_key, _value);
  }

  /**
   * 移除 SessionStorage 存储的值
   * @param key 键名
   */
  static removeSessionStorage(key: SessionStorageKey) {
    const _key = this.encode(key);
    sessionStorage.removeItem(_key);
  }

  /**
   * 清空 SessionStorage
   */
  static clearSessionStorage() {
    sessionStorage.clear();
  }

  /**
   * 数据加密
   * @param value 需要加密的值
   * @returns 加密后的值
   */
  static encode(value: any) {
    const cipher = CryptoJS.AES.encrypt(value, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return cipher.toString();
  }

  /**
   * 数据解密
   * @param value 需要解密的值
   * @returns 解密后的值
   */
  static decode(value: any) {
    const bytes = CryptoJS.AES.decrypt(value, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

export default StorageUtils;
