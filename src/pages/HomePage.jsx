import { Container } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
// import AuthPage from './AuthPage';
import {
    // Import predefined theme
    ThemeSupa,
} from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react'
import { authContext } from '../contexts/AuthContextProvider';
import { supabase } from '../lib/supabase';
import TemplatesList from '../components/Templates/TemplatesList';

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
                    <TemplatesList />
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

