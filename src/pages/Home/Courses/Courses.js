import React from 'react';
import { Container, Grid } from '@mui/material';

import Course from './Course';
import useCourses from '../../../hooks/useCourses';


const Courses = () => {
    const { courses } = useCourses();
    console.log(courses)
    return (
        <div className='service-area'>
            <Container sx={{ flexGrow: 1 }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '36px' }}>Subject</h3>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {
                        courses?.map((course, i) => <Course
                            key={i}
                            course={course}
                        >
                        </Course>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Courses;