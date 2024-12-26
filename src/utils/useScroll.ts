import { useEffect, useState } from "react";

export const useScrollColorChange = (threshold: number) => {
    const [isColorChanged, setIsColorChanged] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsColorChanged(window.scrollY >= threshold);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('popstate', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handleScroll);
        };
    }, [threshold]);

    return isColorChanged;
}
