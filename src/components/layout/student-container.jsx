import Footer from 'components/common/elements/footer';
import Navbar from 'components/common/elements/navbar';
import React from 'react'

const StudentContainer = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};
export default StudentContainer;