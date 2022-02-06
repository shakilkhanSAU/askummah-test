import styled from "@emotion/styled";




const LearnMoreButton = styled('div')({
    color: 'white',
    backgroundColor: '#536DFE',
    padding: '10px 25px',
    fontWeight: '600',
    "&:hover": {
        backgroundColor: "crimson",
        cursor: 'pointer',
        transition: '0.5s',
    }
})

export default LearnMoreButton;







// import { styled } from '@mui/styles';
// import { Button } from '@mui/material';

// const CustomButton = styled(Button)({
//     color: 'white',
//     backgroundColor: '#536DFE',
//     padding: '10px 35px',
//     fontWeight: '600',
//     "&:hover": {
//         background: "#F50057"
//     },
//     margin: "10px 0px"
// })

// export default CustomButton;