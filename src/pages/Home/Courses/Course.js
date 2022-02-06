import { Grid, Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const { title, img, courseCode } = props?.course;
    const navigate = useNavigate();

    const handleEnroll = () => {
        console.log(courseCode)
        navigate(`/allcourses/${courseCode}`)
    }
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Paper className="course-enroll" onClick={handleEnroll}>
                <div className='course'>
                    <img className="course-img img-fluid" src={img} alt="" />
                    <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
                </div>
            </Paper>
        </Grid>
    );
};

export default Course;