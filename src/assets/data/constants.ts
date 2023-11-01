import pkg from '../../../package.json';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const TIME_FORMAT = 'HH:mm:ss';

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

// 部分分页接口传一个大的 pageSize 用来查全部数据
export const MAX_PAGE_SIZE = 10000;

export const EMPTY_TEXT = '-';

// OSS 上传文件目录
export const OSS_DIR = `business/${process.env.ENV}/${pkg.name}`;
