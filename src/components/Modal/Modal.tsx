import React from 'react';
import { IModalProps } from '../../interface/IModalProps'
import XIcon from '../../assets/XIcon';



const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children, title, icon, filters, onClick }) => {
    return (
        <>
            <div className='flex gap-2 '>

                <button onClick={onClose}>
                    <div className={`flex items-center justify-center gap-3 border p-2 rounded-md ${!isOpen ? 'border-neutral  hover:bg-blue-600/30  transition-all duration-200 ease-in-out' : 'border-primary bg-primary'}`}>
                        {icon}<span className={`${!isOpen ? 'text-blue-600' : 'text-white'} hidden lg:block`}>{title}</span>
                    </div>
                </button>
                <div className='flex'>
                    {
                        filters?.map((item, index) =>
                            <div key={index + item.value} className='bg-neutral text-sm lg:text-md flex items-center gap-2 h-full px-2 lg:p-2 rounded-md mr-2' onClick={() => onClick(item)}>
                                <XIcon />
                                <p className='text-white  text-light'>{item.value}</p>
                            </div>)
                    }
                </div>
            </div>
            <div className='w-[380px]'>

                {isOpen && (
                    <div className="modal w-full">
                        <div className="modal-content">

                            {children}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Modal;
