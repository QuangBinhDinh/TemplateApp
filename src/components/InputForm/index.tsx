import React, { createContext, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Keyboard } from 'react-native';
import * as yup from 'yup';
import { AnyObject } from 'yup/lib/types';
import { AssertsShape, TypeOfShape } from 'yup/lib/object';
import { InputProvider } from './context';
import { usePrevious } from '@components/hooks/usePrevious';
import { isEqual } from 'lodash';

interface IProps {
    /** Default input của form, phải gồm tất cả các trường cần thiết  */
    initialState: {
        [key: string]: any;
    };
    /** Schema yup, dùng để validate  */
    yupSchema: yup.ObjectSchema<any, AnyObject, TypeOfShape<any>, AssertsShape<any>>;
    children: JSX.Element;
}
const InputForm = forwardRef(({ initialState, yupSchema, children }: IProps, ref) => {
    const [input, setInput] = useState(initialState);
    const [error, setError] = useState<{ [key: string]: string } | null>(null);
    const prevError = usePrevious(error);
    const prevInput = usePrevious(input);
    /**
     * Set giá trị cho 1 field bất kì
     * @param field
     * @returns
     */
    const setFieldName = (field: string) => (value: any) => {
        setInput(prevState => ({ ...prevState, [field]: value }));
    };

    /**
     * Set error cho 1 field
     * @param field
     * @returns
     */
    const setFieldError = (field: string) => (value: any) => {
        if (!error) setError({ [field]: value });
        else setError(prevState => ({ ...prevState, [field]: value }));
    };

    /**
     * Hàm validate các giá trị input vừa nhập
     * @param onSuccess callback khi nhập input thành công
     * @param onError callback khi nhập input that bai
     * @returns
     */
    const validate = async (onSuccess: (data: any) => void, onError?: (data: any) => void) => {
        try {
            await yupSchema.validate(input, { abortEarly: false });
            setError(null);
            Keyboard.dismiss();
            onSuccess(input);
        } catch (e: any) {
            const errorState: { [key: string]: string } = e.inner.reduce(
                (prev: { [key: string]: string }, next: any) => {
                    if (!Object.keys(prev).includes(next.path)) {
                        prev[next.path] = next.message;
                    }
                    return prev;
                },
                {},
            );
            setError(errorState);
            console.log(errorState);
            if (onError) onError(input);
        }
    };

    const resetToInitial = () => {
        console.log('YES YES YES');
        setInput(initialState);
    };
    // kết hợp với forward ref để gọi method của child từ parent (not recommend !!! )
    useImperativeHandle(ref, () => ({
        input,
        validate,
        resetToInitial,
        setFieldError,
        setFieldName,
    }));
    useEffect(() => {
        //reset error khi user nhập input mới
        if (prevError && !isEqual(input, prevInput)) setError(null);
        //console.log(input);
    }, [input]);

    return (
        <InputProvider value={{ input, setFieldName, setFieldError, setInput, validate, error, resetToInitial }}>
            {children}
        </InputProvider>
    );
});

export default InputForm;
