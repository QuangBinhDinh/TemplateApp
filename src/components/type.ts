export type Nullable<T> = T | null | undefined;
export type Callback = (data: any) => void;
export interface CustomCall {
    url: string;
    method: string;
    body?: any;
}
