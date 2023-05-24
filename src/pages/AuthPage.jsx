// import React, { useState, useEffect, useContext } from 'react';
// import { Typography, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// // import { authContext } from '../contexts/AuthContextProvider';

// const AuthPage = () => {
//     const navigate = useNavigate();
//     // const { error, setError, loading, supabaseAuthLink } = useContext(authContext);
//     const [email, setEmail] = useState('');

//     useEffect(() => {
//         setError(false);
//     }, []);

//     const checkAndGetLink = () => {
//         if (!email.trim()) {
//             alert('This field is required');
//         }
//         supabaseAuthLink(email)
//     };

//     if (loading) {
//         return <h1>Loading..</h1>
//     };

//     return (
//         <div>
//             <Typography variant="h2" color='blue'>Sign in</Typography>
//             <div>
//                 <TextField variant='standard' label='Email*' placeholder='Enter your email' color='primary' fullWidth sx={{ mb: '10px' }} onChange={e => setEmail(e.target.value)}>
//                 </TextField>

//                 <Button variant="contained" fullWidth onClick={() => checkAndGetLink()}>
//                     Sign in with magic Link
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default AuthPage