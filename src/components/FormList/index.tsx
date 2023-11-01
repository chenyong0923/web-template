import { Form } from 'antd';
import React from 'react';

import { renderByType, RenderByTypeProps } from './renderMap';

import type { FormInstance, FormItemProps, FormProps } from 'antd';

export type FormItemList = Array<
  {
    contentConfig: RenderByTypeProps;
  } & FormItemProps
>;
export interface FormListProps extends FormProps {
  formList: FormItemList;
}

const FormItem = Form.Item;

const CustomFormList: React.FC<FormListProps> = ({
  formList,
  ...formProps
}) => {
  const propsForChild: {
    [key in RenderByTypeProps['renderType']]?: FormItemProps;
  } = {
    tree: {
      valuePropName: 'checkedKeys',
      trigger: 'onCheck',
    },
  };

  return (
    <Form autoComplete="off" colon={false} {...(formProps || {})}>
      {formList.map((item, index) => {
        const { contentConfig, shouldUpdate, name, ...otherItemProps } = item;

        const { renderType } = contentConfig;
        const propsForChildItem = propsForChild[renderType] ?? {};

        return (
          <Form.Item
            key={JSON.stringify(name) ?? index}
            name={shouldUpdate ? undefined : name}
            validateFirst
            shouldUpdate={shouldUpdate}
            {...propsForChildItem}
            {...otherItemProps}
          >
            {shouldUpdate
              ? (formInstance) => {
                  return (
                    <FormItem
                      key={JSON.stringify(name)}
                      name={name}
                      validateFirst
                      {...otherItemProps}
                    >
                      {renderByType(
                        contentConfig,
                        formInstance as FormInstance,
                      )}
                    </FormItem>
                  );
                }
              : renderByType(contentConfig)}
          </Form.Item>
        );
      })}
    </Form>
  );
};

export default CustomFormList;
