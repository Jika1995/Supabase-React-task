import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeTemplate } from '../../services/deleteTemplate';

const TemplateCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <Card variant='outlined' sx={{ width: '30%', marginY: '10px' }}>
            {/* <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: item.font_size, fontFamily: item.font }}>
                    {item.subject}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: item.font_size, fontFamily: item.font }}>
                    {item.email_text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='outlined' color='secondary' onClick={() => { removeTemplate(item.id) }}>Delete</Button>
                <Button size="small" variant='outlined' color='secondary' onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
            </CardActions>
        </Card>
    )
}

export default TemplateCard