import { useEffect } from "react";

/**
 * Hook debounce 1 function kèm 1 value thay đổi (dùng cho search input)
 * @param {function} callback callback truyền vào 
 * @param {any} value value truyền vào callback (hay thay đổi)
 * @param {number} delay delay call time (default 500 ms)
 * @returns 
 */
export const useDebounce = (callback, value, delay = 500) => {
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                callback(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
}