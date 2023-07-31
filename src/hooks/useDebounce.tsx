import {useRef, useState} from "react";

const useDebounce = <T extends (...args: any[]) => void>(
    callback: T,
    timeout: number
): [(...args: Parameters<T>) => void, boolean] => {
    const timerId = useRef<NodeJS.Timeout | null>(null);
    const [isDone, setIsDone] = useState<boolean>(false);
    timeout = timeout || 0;

    const debouncedCallback = (...args: Parameters<T>) => {
        if (timerId.current) {
            clearTimeout(timerId.current);
            timerId.current = null;
            setIsDone(true);
        }

        timerId.current = setTimeout(() => {
            setIsDone(false);
            callback(...args);
        }, timeout);
    };

    return [debouncedCallback, isDone];
};

export default useDebounce;
