import React from 'react';
import Courses from '../Home/Courses/Courses';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const OurCourses = () => {
    return (
        <>
            <Header />
            <div>
                <Courses></Courses>
            </div>
            <Footer />
        </>

    );
};

export default OurCourses;