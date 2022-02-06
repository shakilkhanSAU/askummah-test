import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const url = 'services.json'


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-area'>
            <Container sx={{ flexGrow: 1 }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '36px' }}>Our Services</h3>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {
                        services.map((service, i) => <Service
                            key={i}
                            service={service}
                        >
                        </Service>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Services;