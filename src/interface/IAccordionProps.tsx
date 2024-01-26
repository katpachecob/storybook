import { ReactElement } from "react";

interface OptionStructure {
    label: string,
    value: string
}
interface SelectStructure {
    title: string,
    value: string
}

export interface IAccordionProps {
    title: string;
    multi: boolean;
    children?: ReactElement;
    options?: OptionStructure[]
    onChange?: (element) => void;
    selectData?: SelectStructure[]
}
