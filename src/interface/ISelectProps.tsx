import { InputHTMLAttributes } from 'react';


export interface ISelectProps extends InputHTMLAttributes<HTMLInputElement

    | 'onChange'
    | 'checked'> {
label?:string,
multi?:boolean,
}
