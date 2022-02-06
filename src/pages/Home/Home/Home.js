import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';
import Courses from '../Courses/Courses';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const Home = () => {
    const { open, setOpen, user } = useAuth();

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Courses></Courses>
            <Footer></Footer>

            {/* login success message */}
            <>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Hey, {user.displayName}! Welcome to Our Website.
                    </Alert>
                </Snackbar>
            </>

        </div>
    );
};

export default Home;