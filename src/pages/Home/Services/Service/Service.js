import { Grid } from '@mui/material';
import React from 'react';
import LearnMoreButton from '../../../../StyledComponents/LearnMoreButton';

const Service = (props) => {
    const { title, serviceImg, description } = props.service;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '5px' }}>
                <img className='img-fluid' src={serviceImg} alt="" />
                <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
                <p style={{ textAlign: 'justify' }}>{description.slice(0, 200)}</p>
                <LearnMoreButton style={{ textAlign: 'center' }}>Learn More</LearnMoreButton>
            </div>
        </Grid>
    );
};

export default Service;