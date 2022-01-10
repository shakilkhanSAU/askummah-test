import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImg from '../../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={5} lg={5} xs={12} className='d-flex align-items-center justify-content-center'>
                        <div>
                            <h3 className='text-left banner-text'>Suffering is a Gift <br /> In It is Hidden Mercy.</h3>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={7} lg={7} xs={12}>
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;