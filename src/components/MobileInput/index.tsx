'use client';

import { Input, NumberKeyboard } from '@nutui/nutui-react';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (value?: string) => void;
}

export default function MobileInput({ placeholder = '请输入手机号', value, onChange }: Props) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const _isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(_isMobile);
  }, []);

  const onDelete = useCallback(() => {
    if (value) {
      onChange?.(value?.slice?.(0, -1));
    }
  }, [value]);

  const _onChange = useCallback(
    (v: string) => {
      if (v) {
        onChange?.(`${value ?? ''}${v}`);
      }
    },
    [value],
  );

  return (
    <>
      <Input placeholder={placeholder} maxLength={11} readOnly={!!isMobile} type="text" value={value} onClick={() => setVisible(isMobile && true)} />
      <NumberKeyboard
        visible={visible}
        type="rightColumn"
        custom={['', '']}
        onChange={_onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      />
    </>
  );
}
