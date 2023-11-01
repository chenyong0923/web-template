type CustomEnumType<KeyType extends string, ValueType> = {
  [key in KeyType]: ValueType;
};

export default class EnumUtils {
  /**
   * @desc 枚举转换成list
   * @param customEnum 定义的枚举
   * @returns [{key:any,value:any}]
   */
  static toList<
    LField extends string = 'label',
    VField extends string = 'value',
    EnumKey extends string = string,
    EnumValue extends any = string,
  >(
    customEnum: CustomEnumType<EnumKey, EnumValue>,
    options?: {
      labelField: LField;
      valueField: VField;
    },
  ) {
    const { labelField = 'label', valueField = 'value' } = options ?? {};
    return EnumUtils.getEnumKeys(customEnum).map((key) => {
      return {
        [labelField]: key,
        [valueField]: customEnum[key],
      };
    }) as Array<{
      [key in LField | VField]: key extends LField ? EnumKey : EnumValue;
    }>;
  }

  /**
   * @desc 枚举转换成proTable 搜索用的Map结构
   * @param customEnum 定义的枚举
   * @returns new Map([[0,'待审核'],[1,'审核中']])
   */
  static toMap<EnumKey extends string = string, EnumValue extends any = string>(
    customEnum: CustomEnumType<EnumKey, EnumValue>,
  ) {
    return new Map(
      EnumUtils.getEnumKeys(customEnum).map((key) => {
        return [customEnum[key], key];
      }),
    );
  }

  private static getEnumKeys<
    EnumKey extends string = string,
    EnumValue extends any = string,
  >(customEnum: CustomEnumType<EnumKey, EnumValue>) {
    return Object.keys(customEnum).filter((i) => {
      return Number.isNaN(+i);
    }) as EnumKey[];
  }
}
