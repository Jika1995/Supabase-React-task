import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { updateTemplate } from '../../services/updateTemplate';
import PreviewCard from './PreviewCard';
import ReactDOMServer from 'react-dom/server';
import { saveAs } from 'file-saver';

const EditTemplate = () => {
    const { id } = useParams();
    const [templateToEdit, setTemplateToEdit] = useState(null);
    const navigate = useNavigate();
    // const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        fetchOneTemplateById()
    }, []);

    async function fetchOneTemplateById() {
        const { data, error } = await supabase
            .from('templates')
            .select()
            .eq('id', id)
            .maybeSingle()
        if (error) {
            return alert(`${error.message}`)
        } else setTemplateToEdit(data)
    }

    if (!templateToEdit) return

    const handleInp = (e) => {

        let obj = {
            ...templateToEdit,
            [e.target.name]: e.target.value
        };
        setTemplateToEdit(obj)
    };

    const handleSubmit = () => {
        updateTemplate(templateToEdit);
        navigate('/');
    };

    const downloadEmail = () => {
        // Generate HTML content
        const emailContent = ReactDOMServer.renderToString(<PreviewCard item={templateToEdit} />);

        // Create a Blob from the HTML content
        const blob = new Blob([emailContent], { type: 'text/html;charset=utf-8' });

        // Save the Blob as a file
        saveAs(blob, 'email.html');
    };

    return (
        <Container sx={{ marginY: '20px', }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '45%' }}>
                    <Typography variant='h4' align='center' color='secondary'>Edit template</Typography>
                    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                        <FormControl variant="outlined" margin="normal" sx={{ width: '20%' }} color='secondary'>
                            <InputLabel>Font Size</InputLabel>
                            <Select value={templateToEdit.font_size} name='font_size' onChange={handleInp} label="Font Size">
                                <MenuItem value="12px">12px</MenuItem>
                                <MenuItem value="14px">14px</MenuItem>
                                <MenuItem value="16px">16px</MenuItem>
                                <MenuItem value="18px">18px</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" margin="normal" sx={{ width: '40%' }} color='secondary'>
                            <InputLabel>Font Style</InputLabel>
                            <Select value={templateToEdit.font} name='font' onChange={handleInp} label="Font Style">
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
                        value={templateToEdit.name}
                        name='name' onChange={handleInp}
                        fullWidth
                        margin="normal"
                        placeholder="Enter name of this template"
                    />
                    <TextField
                        variant="outlined"
                        color='secondary'
                        value={templateToEdit.subject}
                        name='subject' onChange={handleInp}
                        fullWidth
                        margin="normal"
                        placeholder='Enter subject'
                        label="Template's email subject*"
                        sx={{ fontSize: templateToEdit.font_size, fontFamily: templateToEdit.font }}
                    />
                    <TextField
                        variant="outlined"
                        color='secondary'
                        value={templateToEdit.email_text}
                        name='email_text' onChange={handleInp}
                        fullWidth
                        multiline
                        rows={6}
                        margin="normal"
                        placeholder='Enter text'
                        label="Template's email text*"
                        sx={{ fontSize: templateToEdit.font_size, fontFamily: templateToEdit.font }}
                    />
                </Box>
                <Box sx={{ width: '45%' }}>
                    <Typography variant='h4' align='center' color='secondary'>Receiver will get</Typography>
                    <PreviewCard item={templateToEdit} />
                </Box>
            </Box>
            <Box textAlign='center' sx={{ marginY: '20px', }}>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleSubmit}
                    sx={{ marginX: '20px' }}
                >
                    Save Changes
                </Button>
                <Button variant='outlined' color='secondary' onClick={downloadEmail}>Download HTML</Button>
            </Box>
        </Container>
    );
};

export default EditTemplate


