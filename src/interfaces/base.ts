export interface Pagination {
  total: number;
  size: number;
  index: number;
  length: number;
  beginIndex: number;
  endIndex: number;
}

export interface BaseResponse<T> {
  code: string;
  msg: string;
  data: T;
  page?: Pagination;
  success: boolean;
}
