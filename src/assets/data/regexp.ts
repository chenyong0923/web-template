// 密码正则
export const PASSWORD_REGEXP =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,20}$/;

// 数字正则，允许整数和小数，只允许正数
export const NUMBER_REGEXP = /^\d+(\.\d+)?$/;
