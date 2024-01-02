import React from 'react'
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

const ContextComp = () => {
    return (
        <>
            <ThemeProvider>
                <FunctionContextComponent />
            </ThemeProvider>
        </>
    );
}

export default ContextComp;