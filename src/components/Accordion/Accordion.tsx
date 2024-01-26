import React from 'react';
import { IAccordionProps } from '../../interface/IAccordionProps'
import ArrowIcon from '../../assets/ArrowIcon';
import Checkbox from '../Checkbox/Checkbox';

import { useDisclosure } from '../../hooks/useDiscloure';

const Accordion: React.FC<IAccordionProps> = ({ title, children, options, multi, onChange,  selectData, index }) => {
    const { toggle, isOpen } = useDisclosure(false)

    return (
        <div className='mb-2 bg-neutral_blue backdrop-blur-2xl p-3 rounded-md'>
            <button onClick={toggle} className='text-white w-full flex  flex-row items-center justify-between  lg:gap-40 font-semibold text-md fo'>
                <p>{title}</p>
                <div className={`${isOpen ? 'rotate-180' : ''}`}>
                    <ArrowIcon />
                </div>
            </button>
            {isOpen && <div>
                {
                    options.map((item, key) =>
                        <Checkbox key={key + title} multi={multi} label={item.value} onChange={() => onChange(item)} checked={!!selectData.some(data => data.value === item.value && data.title == title && parseInt(data.index) == index)} />
                    )
                }
                {children}
            </div>}
        </div>
    );
};


export default Accordion;
