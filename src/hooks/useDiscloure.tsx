import { useState } from "react";

export const useDisclosure = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        open,
        close,
        toggle,
    };
};

