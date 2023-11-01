import { EyeOutlined, HideOutlined } from '@pangu/icons-react';
import { AliyunUpload } from '@pangu/materials';
import {
  Button,
  DatePicker,
  FormInstance,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TimePicker,
  Tree,
} from 'antd';

import { OSS_DIR } from '@/assets/data/constants';
import { CookieKeyEnum, StorageUtils } from '@/utils';

import type {
  AliyunUploadImageProps,
  AliyunUploadProps,
} from '@pangu/materials';
import type {
  DatePickerProps as AntdDatePickerProps,
  InputNumberProps as AntdInputNumberProps,
  InputProps as AntdInputProps,
  RadioGroupProps as AntdRadioGroupProps,
  SelectProps as AntdSelectProps,
  SwitchProps as AntdSwitchProps,
  TimePickerProps as AntdTimePickerProps,
  TimeRangePickerProps as AntdTimeRangePickerProps,
  TreeProps as AntdTreeProps,
} from 'antd';
import type { RangePickerDateProps as AntdRangePickerDateProps } from 'antd/lib/date-picker/generatePicker';
import type { PasswordProps as AntdPasswordProps } from 'antd/lib/input';
import type { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input/TextArea';
import type { ReactElement } from 'react';

const { TextArea } = Input;

type DatePickerProps = AntdDatePickerProps & {
  renderType: 'datePicker';
};

type DateRangePickerProps = AntdRangePickerDateProps<any> & {
  renderType: 'dateRangePicker';
};

interface PasswordProps extends AntdPasswordProps {
  renderType: 'password';
}

interface TimePickerProps extends AntdTimePickerProps {
  renderType: 'timePicker';
}

interface RangePickerProps extends AntdTimeRangePickerProps {
  renderType: 'timeRangePicker';
}
interface InputProps extends AntdInputProps {
  renderType: 'input';
}

interface InputNumberProps extends AntdInputNumberProps {
  renderType: 'inputNumber';
}

interface TextAreaProps extends AntdTextAreaProps {
  renderType: 'textArea';
}

interface SelectProps extends AntdSelectProps {
  renderType: 'select';
}

interface SwitchProps extends AntdSwitchProps {
  renderType: 'switch';
}

interface RadioGroupProps extends AntdRadioGroupProps {
  renderType: 'radioGroup';
}

interface TreeProps extends AntdTreeProps {
  renderType: 'tree';
}

interface UploadProps extends Partial<AliyunUploadProps> {
  renderType: 'upload';
}

interface ImageUploadProps extends Partial<AliyunUploadImageProps> {
  renderType: 'imageUpload';
}

interface CustomProps {
  renderType: 'custom';
  render: (formInstance: FormInstance) => ReactElement;
}

export type RenderByTypeProps =
  | InputProps
  | InputNumberProps
  | TextAreaProps
  | SwitchProps
  | SelectProps
  | RangePickerProps
  | TimePickerProps
  | DatePickerProps
  | DateRangePickerProps
  | PasswordProps
  | RadioGroupProps
  | TreeProps
  | UploadProps
  | ImageUploadProps
  | CustomProps;

export function renderByType(
  props: RenderByTypeProps,
  formInstance?: FormInstance,
): ReactElement | null {
  const { renderType, ...otherProps } = props;
  switch (renderType) {
    case 'input': {
      return (
        <Input allowClear autoComplete="off" {...(otherProps as InputProps)} />
      );
    }

    case 'inputNumber': {
      return <InputNumber {...(otherProps as InputNumberProps)} />;
    }

    case 'password': {
      return (
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <HideOutlined />
          }
          allowClear
          autoComplete="off"
          {...(otherProps as PasswordProps)}
        />
      );
    }

    case 'textArea': {
      return <TextArea allowClear {...(otherProps as TextAreaProps)} />;
    }

    case 'select': {
      return <Select {...(otherProps as SelectProps)} />;
    }

    case 'timePicker': {
      return <TimePicker {...(otherProps as TimePickerProps)} />;
    }

    case 'datePicker': {
      return <DatePicker {...(otherProps as DatePickerProps)} />;
    }
    case 'radioGroup': {
      return <Radio.Group {...(otherProps as RadioGroupProps)} />;
    }

    case 'dateRangePicker': {
      return (
        <DatePicker.RangePicker {...(otherProps as DateRangePickerProps)} />
      );
    }

    case 'timeRangePicker': {
      return <TimePicker.RangePicker {...(otherProps as RangePickerProps)} />;
    }

    case 'switch': {
      return <Switch {...(otherProps as SwitchProps)} />;
    }

    case 'upload': {
      return (
        <AliyunUpload
          signatureUrl={`${process.env.BASE_API}/file/signature/oss`}
          superKey={OSS_DIR}
          requestInit={{
            headers: {
              ENTERTOKEN: StorageUtils.getCookie(CookieKeyEnum.Token) ?? '',
            },
          }}
        >
          <Button>上传</Button>
        </AliyunUpload>
      );
    }

    case 'imageUpload': {
      return (
        <AliyunUpload.Image
          {...(otherProps as AliyunUploadImageProps)}
          signatureUrl={`${process.env.BASE_API}/file/signature/oss`}
          superKey={OSS_DIR}
          requestInit={{
            headers: {
              ENTERTOKEN: StorageUtils.getCookie(CookieKeyEnum.Token) ?? '',
            },
          }}
        />
      );
    }

    case 'tree': {
      return (
        <Tree
          checkable
          selectable={false}
          autoExpandParent
          {...(otherProps as TreeProps)}
        />
      );
    }

    case 'custom': {
      return props?.render?.(formInstance as FormInstance);
    }

    default:
      return null;
  }
}
