import React from 'react';
import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { addTemplate } from '../../store/slices/templateSlice';
import { useDispatch } from 'react-redux';

const AddTemplate = () => {
    const [name, setName] = React.useState('');
    const [email_text, setEmailText] = React.useState('');
    const [font_size, setFontSize] = React.useState('12px');
    const [font, setFontStyle] = React.useState('Arial');
    const [selectedImage, setSelectedImage] = React.useState(null);

    const dispatch = useDispatch();

    const handleSubjectChange = (event) => {
        setName(event.target.value);
    };

    const handleBodyChange = (event) => {
        setEmailText(event.target.value);
    };

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    const handleFontStyleChange = (event) => {
        setFontStyle(event.target.value);
    };

    const handleImageUpload = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Subject:', name);
        console.log('Body:', email_text);
        console.log('Font Size:', font_size);
        console.log('Font Style:', font);
        console.log('Selected Image:', selectedImage);
    };

    return (
        <Container sx={{ marginY: '20px' }}>
            <Typography variant='h4' align='center' color='secondary'>Add template</Typography>
            <Box sx={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                <FormControl variant="outlined" margin="normal" sx={{ width: '20%' }} color='secondary'>
                    <InputLabel>Font Size</InputLabel>
                    <Select value={font_size} onChange={handleFontSizeChange} label="Font Size">
                        <MenuItem value="12px">12px</MenuItem>
                        <MenuItem value="14px">14px</MenuItem>
                        <MenuItem value="16px">16px</MenuItem>
                        <MenuItem value="18px">18px</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" margin="normal" sx={{ width: '30%' }} color='secondary'>
                    <InputLabel>Font Style</InputLabel>
                    <Select value={font} onChange={handleFontStyleChange} label="Font Style">
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
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                />

                <label htmlFor="image-upload">
                    <IconButton size='large' component="span" sx={{ alignSelf: 'center' }}>
                        <AddPhotoAlternateIcon color='secondary' fontSize='large' />
                    </IconButton>
                </label>

                <Typography variant="caption" display="block" gutterBottom>
                    {selectedImage && `Selected Image: ${selectedImage.name}`}
                </Typography>

            </Box>
            <TextField
                label="Template's name*"
                variant="outlined"
                color='secondary'
                value={name}
                onChange={handleSubjectChange}
                fullWidth
                margin="normal"
                placeholder="Enter name of this template"
            />

            <TextField
                variant="outlined"
                color='secondary'
                value={email_text}
                onChange={handleBodyChange}
                fullWidth
                multiline
                rows={6}
                margin="normal"
                placeholder='Enter text'
                label="Template's email text*"
            />
            <Box textAlign='center'>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleSubmit}
                >
                    Add Template
                </Button>
            </Box>

        </Container>
    );
}

export default AddTemplate

