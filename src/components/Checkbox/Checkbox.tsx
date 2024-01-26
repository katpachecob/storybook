import React from 'react';
import { ISelectProps } from '../../interface/ISelectProps';

const Checkbox = ({ onChange, checked, label, multi }: ISelectProps) => {
    return (
        <div>
            <label className="flex items-center gap-2   my-3">
                <input

                    type={"checkbox"}
                    className={` 
                        peer relative 
                        appearance-none shrink-0 
                        w-4 h-4 
                        border border-gray ${!multi ? 'rounded-full' : 'rounded-sm'}  bg-transparent
                        focus:outline-none 
                        checked:bg-primary
                         checked:border-0`}
                    checked={checked}
                    onChange={onChange}
                />
                {multi?<svg
                    className="absolute w-4 h-3 pointer-events-none hidden peer-checked:block stroke-white  outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>:null}
                <span className='text-white font-light text-sm'>
                    {label}
                </span>
            </label>
        </div>
    );
};

export default Checkbox;
