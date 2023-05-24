import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React from 'react';

const EditTemplate = () => {
    const [subject, setSubject] = React.useState('');
    const [body, setBody] = React.useState('');
    const [fontSize, setFontSize] = React.useState('12px');
    const [fontStyle, setFontStyle] = React.useState('Arial');
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
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
        console.log('Subject:', subject);
        console.log('Body:', body);
        console.log('Font Size:', fontSize);
        console.log('Font Style:', fontStyle);
        console.log('Selected Image:', selectedImage);
    };

    return (
        <Container sx={{ marginY: '20px' }}>
            <Typography variant='h4' align='center' color='secondary'>Change your template</Typography>
            <Box sx={{ width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                <FormControl variant="outlined" margin="normal" sx={{ width: '20%' }} color='secondary'>
                    <InputLabel>Font Size</InputLabel>
                    <Select value={fontSize} onChange={handleFontSizeChange} label="Font Size">
                        <MenuItem value="12px">12px</MenuItem>
                        <MenuItem value="14px">14px</MenuItem>
                        <MenuItem value="16px">16px</MenuItem>
                        <MenuItem value="18px">18px</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" margin="normal" sx={{ width: '30%' }} color='secondary'>
                    <InputLabel>Font Style</InputLabel>
                    <Select value={fontStyle} onChange={handleFontStyleChange} label="Font Style">
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
                value={subject}
                onChange={handleSubjectChange}
                fullWidth
                margin="normal"
                placeholder="Enter name of this template"
            />

            <TextField
                variant="outlined"
                color='secondary'
                value={body}
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
                    Save Changes
                </Button>
            </Box>

        </Container>
    );
}

export default EditTemplate

