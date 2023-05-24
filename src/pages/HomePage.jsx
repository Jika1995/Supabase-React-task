import { Container } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
// import AuthPage from './AuthPage';
import { supabase } from '../../src/helpers/supabase';
import {
    // Import predefined theme
    ThemeSupa,
} from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react'
import { authContext } from '../contexts/AuthContextProvider';

const HomePage = () => {
    const { error, setError, loading, isUserLoggedIn, session, } = useContext(authContext);

    useEffect(() => {
        setError(false);
    }, []);

    useEffect(() => {
        isUserLoggedIn();
    }, [])

    if (loading) {
        return <h1>Loading..</h1>
    };

    return (
        <Container sx={{ margin: 'auto' }}>
            {session ?
                (
                    <div>Logged in!</div>
                )
                :
                (
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['github']} />
                )
            }
        </Container>
    )
}

export default HomePage

