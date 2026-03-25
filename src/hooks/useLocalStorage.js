import { useEffect, useState } from "react"

// const useLocalStorage = (storageKey, defaultValue) => {
//     const [value, setValue] = useState(
//         JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
//     );

//     useEffect(() => {
//         localStorage.setItem(storageKey, JSON.stringify(value));
//     }, [value, storageKey]);

//     return [value, setValue];
// };

const useLocalStorage = (storageKey, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(storageKey);
            const parsed = storedValue ? JSON.parse(storedValue) : defaultValue;

            // ✅ Ensure it's always an array
            return Array.isArray(parsed) ? parsed : defaultValue;
        } catch (error) {
            console.error("LocalStorage parse error:", error);
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

export default useLocalStorage;