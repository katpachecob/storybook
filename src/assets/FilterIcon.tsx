import React from 'react';
import { ISVGProps } from '../interface/ISVGProps';

const FilterIcon= ({fill="#1967FF", width='18', height='12'}:ISVGProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill={fill} />
        </svg>

    );
};

export default FilterIcon;
