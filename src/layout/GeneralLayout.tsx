import React from 'react';
import { IGeneralLayoutProps } from '../interface/IGeneralLayoutProps'

const GeneralLayout: React.FC<IGeneralLayoutProps> = ({ children }) => {
    return (
        <div>
            <main className='mx-auto  lg:p-24 lg:h-screen'>
                {children}
            </main>
        </div>
    );
};

export default GeneralLayout;
    