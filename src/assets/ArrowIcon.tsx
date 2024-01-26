import React from 'react';
import { ISVGProps } from '../interface/ISVGProps';

const ArrowIcon: React.FC = ({fill="#1967FF", width='20', height='20'}:ISVGProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}viewBox="0 0 24 24" strokeWidth="2" stroke={fill} fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
    );
};

export default ArrowIcon;
