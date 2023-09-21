'use client';

import MobileInput from '@/components/MobileInput';
import { Button, Form, Input } from '@nutui/nutui-react';

export default function Main() {
  return (
    <Form
      labelPosition="right"
      footer={
        <>
          <Button nativeType="submit" block type="primary">
            提交
          </Button>
        </>
      }
    >
      <Form.Item required label="手机号" name="phone" rules={[{ required: true, message: '请输入手机号' }]}>
        <MobileInput placeholder="请输入手机号" />
      </Form.Item>

      <Form.Item label="验证码" name="code" rules={[{ required: true, message: '请输入验证码' }]}>
        <Input placeholder="请输入验证码" maxLength={4} />
      </Form.Item>
    </Form>
  );
}
