import { Container, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TemplateCard from './TemplateCard';
import { supabase } from '../../lib/supabase';

const TemplatesList = () => {
    const [templates, setTemplates] = useState([]);

    async function readTemplates() {
        let { data, error } = await supabase
            .from('templates')
            .select("*")
            .order('created_at', { ascending: false })
        if (error) {
            return alert(`${error.message}`)
        } else {
            setTemplates(data);
        }
    }

    useEffect(() => {
        readTemplates()
    }, [templates])

    if (templates?.length === 0) {
        return <Typography align='center' variant='h3'>There is no templates yet</Typography>
    }

    return (
        <Container sx={{ marginY: '20px' }}>
            <Typography variant='h3' color='secondary' align='center'>My templates</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {templates ?
                    (templates?.map((item) => <TemplateCard key={item.id} item={item} read={readTemplates} />)) : (
                        <h3>Loading...</h3>
                    )}
            </Box>
        </Container>
    )
}
export default TemplatesList

