import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImg from '../../../images/banner.jpg'
import CustomButton from '../../../StyledComponents/CustomButton';
import './Banner.css'

const Banner = () => {
    const handleMore = () => {
        console.log('nothing')
    }

    return (
        <div className="banner">
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={5} xs={12} className='d-flex align-items-center justify-content-center'>
                        <div>
                            <h3 style={{ fontFamily: 'Mochiy Pop P One' }} className='text-left banner-text'><span style={{ color: '#dc3545' }}>Everyone</span> Can <br />Make A <span style={{ color: '#dc3545' }}>Difference.</span></h3>
                            <CustomButton onClick={handleMore}>Learn More</CustomButton>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} lg={7} xs={12}>
                        <div>
                            <img className='img-fluid banner-image' src={bannerImg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Banner;