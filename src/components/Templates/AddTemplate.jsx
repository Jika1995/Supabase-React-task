import React, { useState, useContext, useEffect } from 'react';
import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContextProvider';
import { createTemplate } from '../../services/createTemplate';
import { addTemplate } from '../../store/slices/templateSlice';
import PreviewCard from './PreviewCard';
import ReactDOMServer from 'react-dom/server';
import { saveAs } from 'file-saver';

const AddTemplate = () => {
    const { userInSys, getLoggedUser } = useContext(authContext);

    const [newTemplate, setNewTemplate] = useState({
        name: '',
        email_text: '',
        font_size: '12px',
        font: 'Arial',
        author: userInSys.id,
        html_export: false,
        subject: ''
    });

    // const [image, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getLoggedUser()
        console.log(userInSys);
    }, [])

    const handleInp = (e) => {
        let obj = {
            ...newTemplate,
            [e.target.name]: e.target.value
        };
        setNewTemplate(obj);
    };

    const handleSubmit = () => {

        createTemplate(newTemplate);
        dispatch(addTemplate(newTemplate));
        navigate('/');

        // let newTemplate = new FormData();
        // newTemplate.append('author', user.id);
        // newTemplate.append('name', name);
        // newTemplate.append('email_text', email_text);
        // newTemplate.append('font_size', font_size);
        // newTemplate.append('font', font);
        // newTemplate.append('image', image);

        // dispatch(addTemplate(newTemplate));
    };

    const downloadEmail = () => {
        // Generate HTML content
        const emailContent = ReactDOMServer.renderToString(<PreviewCard item={newTemplate} />);

        // Create a Blob from the HTML content
        const blob = new Blob([emailContent], { type: 'text/html;charset=utf-8' });

        // Save the Blob as a file
        saveAs(blob, 'email.html');
    };

    return (
        <Container sx={{ marginY: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '45%' }}>
                    <Typography variant='h4' align='center' color='secondary'>Add template</Typography>
                    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                        <FormControl variant="outlined" margin="normal" sx={{ width: '20%' }} color='secondary'>
                            <InputLabel>Font Size</InputLabel>
                            <Select value={newTemplate.font_size} name='font_size' onChange={handleInp} label="Font Size">
                                <MenuItem value="12px">12px</MenuItem>
                                <MenuItem value="14px">14px</MenuItem>
                                <MenuItem value="16px">16px</MenuItem>
                                <MenuItem value="18px">18px</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" margin="normal" sx={{ width: '40%' }} color='secondary'>
                            <InputLabel>Font Style</InputLabel>
                            <Select value={newTemplate.font} name='font' onChange={handleInp} label="Font Style">
                                <MenuItem value="Arial">Arial</MenuItem>
                                <MenuItem value="Verdana">Verdana</MenuItem>
                                <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                                <MenuItem value="Courier New">Courier New</MenuItem>
                            </Select>
                        </FormControl>
                        <input
                            type="file"
                            accept="image/*"
                            id="image-upload"
                            // onChange={(e) => setSelectedImage(e.target.files[0])}
                            style={{ display: 'none' }}
                        />

                        <label htmlFor="image-upload">
                            <IconButton size='large' component="span" sx={{ alignSelf: 'center' }}>
                                <AddPhotoAlternateIcon color='secondary' fontSize='large' />
                            </IconButton>
                        </label>

                        <Typography variant="caption" display="block" gutterBottom>
                            {/* {selectedImage && `Selected Image: ${selectedImage.name}`} */}
                        </Typography>

                    </Box>
                    <TextField
                        label="Template's name*"
                        variant="outlined"
                        color='secondary'
                        value={newTemplate.name}
                        name='name' onChange={handleInp}
                        fullWidth
                        margin="normal"
                        placeholder="Enter name of this template"
                    />
                    <TextField
                        variant="outlined"
                        color='secondary'
                        value={newTemplate.subject}
                        name='subject' onChange={handleInp}
                        fullWidth
                        margin="normal"
                        placeholder='Enter subject'
                        label="Template's email subject*"
                        sx={{ fontSize: newTemplate.font_size, fontFamily: newTemplate.font }}
                    />
                    <TextField
                        variant="outlined"
                        color='secondary'
                        value={newTemplate.email_text}
                        name='email_text' onChange={handleInp}
                        fullWidth
                        multiline
                        rows={6}
                        margin="normal"
                        placeholder='Enter text'
                        label="Template's email text*"
                        sx={{ fontSize: newTemplate.font_size, fontFamily: newTemplate.font }}
                    />
                </Box>
                <Box sx={{ width: '45%' }}>
                    <Typography variant='h4' align='center' color='secondary'>Receiver will get</Typography>
                    <PreviewCard item={newTemplate} />
                </Box>
            </Box>
            <Box textAlign='center'>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleSubmit}
                    sx={{ marginX: '20px' }}
                >
                    Add Template
                </Button>
                <Button variant='outlined' color='secondary' onClick={downloadEmail}>Download HTML</Button>
            </Box>
        </Container>
    );
}

export default AddTemplate

