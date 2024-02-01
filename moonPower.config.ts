import { defineConfig } from '@pangu/end-type-to-front-type';

export default defineConfig([
  {
    serverUrl: 'http://fe.jiuworker.com:3000/',
    typesOnly: false,
    prefix: '', // 路径前缀
    restful: true, // 是否是restful风格的接口
    repeat: true, // 如果restful风格的接口情况下导致了接口函数名重复，请开启repeat为true
    boolean: [], // 由于yapi的query和params暂时不支持类型，所以只能手动输入，将你碰到的boolean类型的key值传入数组
    number: ['pageSize', 'pageNum'], // 由于yapi的query和params暂时不支持类型，所以只能手动输入，将你碰到的number类型的key值传入数组
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'local',
    outputFilePath: 'src/api/index.ts',
    requestFunctionFilePath: 'src/api/request.ts',
    dataKey: 'data',
    projects: [
      {
        token:
          'a6368d6813ea8d14069390dfc612256dee08314ef3ead1d01824e8fa10916cac',
        categories: [],
      },
    ],
  },
]);
