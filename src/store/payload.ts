export interface Payload<T> {
    type: string;
    action: T;
}
