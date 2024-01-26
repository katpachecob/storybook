import React from 'react';
import { IGeneralLayoutProps } from '../interface/IGeneralLayoutProps'

const GeneralLayout: React.FC<IGeneralLayoutProps> = ({ children }) => {
    return (
        <div>
            <main className='flex  p-24 h-screen'>
                {children}
            </main>
        </div>
    );
};

export default GeneralLayout;
