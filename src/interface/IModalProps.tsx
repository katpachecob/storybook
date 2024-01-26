import { ReactElement } from "react";

interface OptionsModal    {
    title:string,
    value:string
}
export interface IModalProps {
    isOpen: boolean;
    title: string;
    icon?: ReactElement;
    onClose: () => void;
    onClick?: (e) => void;
    children: ReactElement
    filters?: OptionsModal[]
}
