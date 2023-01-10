export interface InputFormRef {
    input: {
        [key: string]: any;
    };
    validate: (onSuccess: (data: any) => void, onError?: (data: any) => void) => void;
    resetToInitial: () => void;
}
