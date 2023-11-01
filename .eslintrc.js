module.exports = {
  extends: [require.resolve('@pangu/lint/typescript/react')],
  globals: {
    AMap: false // false 只读， true 可写
  }
};
