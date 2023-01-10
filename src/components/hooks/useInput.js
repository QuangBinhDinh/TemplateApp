import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import _ from 'lodash';

const defaultFunc = data => {};

/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {Object} data
 */

/**
 * Hook dùng để quản lý việc nhập, validate input
 * @param {Object} initialState object chứa các field input
 * @param {yup.ObjectSchema} yupSchema schema yup để validate
 */
export const useInput = (initialState, yupSchema) => {
    const [input, setInput] = useState(initialState);
    const [error, setError] = useState(null);
    const [empty, setEmpty] = useState(false);

    /**
     * Hàm set giá trị input
     * @param {string} field tên field input
     *
     */
    const setFieldName = field => value => {
        setInput(prevState => ({ ...prevState, [field]: value }));
    };

    /**
     * Hàm validate các giá trị input vừa nhập
     */
    const validate = async (onSuccess, onError) => {
        try {
            await yupSchema.validate(input, { abortEarly: false });
            setError(null);
            onSuccess(input);
            // console.log("SUccess")
        } catch (e) {
            // const errorState = e.inner.reduce((prev, next) => ({ ...prev, [next.path]: next.message }), {});
            const errorState = e.inner.reduce((prev, next) => prev.concat(next.message), []);
            setError(errorState);
            console.log(errorState);
            onError(errorState);
        }
    };

    /**
     * Hàm xoá toàn bộ input
     */
    const clearInput = () => {
        setInput(state =>
            Object.keys(state).reduce((prev, next) => {
                return { ...prev, [next]: '' };
            }, {}),
        ); // set toàn bộ field trong object = empty
    };

    const resetToInitial = () => {
        setInput(initialState);
    };

    return { input, error, setFieldName, validate, clearInput, resetToInitial, setInput };
};

export const isEmpty = input => {
    let empty = false;
    Object.keys(input).map(key => {
        if (input[key] == '' || input[key] == undefined) empty = true;
    });
    // console.log(empty)
    return empty;
};
