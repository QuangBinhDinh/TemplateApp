import { createCtx } from '@util/context';
import React from 'react';
interface InputSample {
    input: { [key: string]: any };
    setFieldName: (field: string) => (value: any) => void;
    setFieldError: (field: string) => (value: any) => void;
    setInput: (data: any) => void;
    validate: (onSuccess: (x: any) => void, onError: (x: any) => void) => void;
    error: { [key: string]: string } | null;
    resetToInitial: () => void;
}

export const [useInputContext, InputProvider] = createCtx<InputSample>();
