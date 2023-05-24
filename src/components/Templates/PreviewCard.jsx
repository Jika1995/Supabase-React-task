import React from 'react';
import { Typography } from '@mui/material';

const PreviewCard = ({ item }) => {
    console.log(item);
    return (
        <div>
            <Typography variant='h5' sx={{ fontSize: item.font_size, fontFamily: item.font, marginY: '20px' }}><b>Subject:</b><br />{item.subject}</Typography>
            <Typography variant='h5' sx={{ fontSize: item.font_size, fontFamily: item.font }}><b>Body:</b><br />{item.email_text}</Typography>
        </div>
    )
}

export default PreviewCard