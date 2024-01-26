import React from 'react';
import { ISVGProps } from '../interface/ISVGProps';

const XIcon= ({fill="#FFFFFF", width='10', height='10'}:ISVGProps) => {
    return (
      
<svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 1.27334L8.72667 0.333344L5 4.06001L1.27334 0.333344L0.333336 1.27334L4.06 5.00001L0.333336 8.72668L1.27334 9.66668L5 5.94001L8.72667 9.66668L9.66667 8.72668L5.94 5.00001L9.66667 1.27334Z" fill={fill}/>
</svg>


    );
};

export default XIcon;


