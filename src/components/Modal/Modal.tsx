import React from 'react';
import { IModalProps } from '../../interface/IModalProps'
import XIcon from '../../assets/XIcon';



const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children, title, icon, filters, onClick }) => {
    return (
        <>
            <div className='flex gap-2 h-auto justify-start mb-2 items-start '>

                <button onClick={onClose}>
                    <div className={`flex items-center justify-center gap-3 border p-2 rounded-md ${!isOpen ? 'border-neutral  hover:bg-blue-600/30  transition-all duration-200 ease-in-out' : 'border-primary bg-primary'}`}>
                        {icon}<span className={`${!isOpen ? 'text-blue-600' : 'text-white'} hidden lg:block`}>{title}</span>
                    </div>
                </button>
                <div className='hidden lg:flex flex-wrap'>
                    {
                        filters?.map((item, index) =>
                            <div key={index + item.value} className='bg-neutral h-full min-h-[45px] mb-2 text-sm lg:text-md flex items-center gap-2  p-2 rounded-md mr-2' onClick={() => onClick(item)}>
                                <XIcon />
                                <p className='text-white  text-light'>{`${item.title}: ${item.value}`}</p>
                            </div>)
                    }
                </div>
            </div>
            <div className='w-[90vw]  md:w-[380px]'>

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
