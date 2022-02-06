import React, { useState } from 'react';
import { Button, Container, Paper, TextField } from '@mui/material';
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useCourses from '../../../hooks/useCourses';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import '../EnrollCourse.css'
import useAuth from '../../../hooks/useAuth';

const EnrollCourse = () => {
    const { courseId } = useParams();
    const { user } = useAuth();
    const { courses } = useCourses();
    const [open, setOpen] = useState(false);
    // order related information

    const initialOrderInfo = { clientName: user.displayName, email: user.email, phone: '', address: '', status: 'pending' }
    const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // find the course
    const findCourse = courses?.find(course => course?.courseCode === courseId);

    const style = {
        position: 'absolute',
        top: '50%',
        width: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: '4px',
        boxShadow: 20,
        padding: '40px'
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo }
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo)
    }

    const handleBookSubmit = (e) => {
        e.preventDefault();
        alert("submitting")
    }

    return (
        <div>
            <Header></Header>
            <Container style={{ textAlign: 'center' }}>
                <Paper className="m-3 p-4" >
                    <h3 style={{ fontWeight: 'bold' }}>Enroll to <span style={{ color: 'crimson', fontWeight: '600' }}>{findCourse?.title}</span></h3>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                        <div>
                            <img className="course-image img-fluid" src={findCourse?.img} alt="" />
                            <h5 style={{ fontWeight: '500', paddingBottom: '10px' }}>Course Title: <span style={{ color: 'crimson', fontWeight: '600' }}>{findCourse?.title}</span></h5>
                            <h5 style={{ fontWeight: '500', paddingBottom: '10px' }}>Course Duration: <span style={{ color: 'crimson', fontWeight: '600' }}>{findCourse?.duration}</span></h5>
                            <Button onClick={handleOpen} variant="contained">Enroll Now</Button>
                        </div>
                    </div>
                </Paper>
            </Container>
            {/* modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 style={{ fontWeight: 'bold', textAlign: 'center', paddingBottom: '20px', color: 'crimson' }}>
                        {findCourse?.title}
                    </h3>
                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            defaultValue={user.displayName}
                            name="clientName"
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <TextField
                            required
                            id="outlined-basic"
                            label="Your Phone Number"
                            variant="outlined"
                            name="phone"
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <TextField
                            required
                            id="outlined-basic"
                            label="Your Address"
                            variant="outlined"
                            name="address"
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 2, mt: 1 }}
                        />
                        <TextField
                            disabled
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <Button variant="contained" type="submit">Enroll Now</Button>
                    </form>

                </Box>
            </Modal>
            <Footer></Footer>
        </div>
    );
};

export default EnrollCourse;