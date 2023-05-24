// import { Container } from '@mui/material'
// import React from 'react'

// const AddTemplate = () => {
//     return (
//         <div>
//             <Container>
//                 <TextField variant='standard' placeholder='Enter name of this template' label="Template's name*" color='secondary' fullWidth>
//                 </TextField>
//                 <TextField variant='standard' placeholder='Enter text' label="Template's email text*" color='secondary' fullWidth>
//                 </TextField>
//                 <TextField
//                     variant="standard"
//                     label="Image"
//                     placeholder="Image"
//                     color="secondary"
//                     fullWidth
//                     type="file"
//                     accept="image/*"
//                 // onChange={e => setImage(e.target.files[0])}
//                 ></TextField>
//             </Container>
//         </div>
//     )
// }

// export default AddTemplate

import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const AddTemplate = () => {
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
        <div>
            <TextField
                label="Name*"
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
                value={body}
                onChange={handleBodyChange}
                fullWidth
                multiline
                rows={6}
                margin="normal"
                placeholder='Enter text'
                label="Template's email text*"
            />

            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Font Size</InputLabel>
                <Select value={fontSize} onChange={handleFontSizeChange} label="Font Size">
                    <MenuItem value="12px">12px</MenuItem>
                    <MenuItem value="14px">14px</MenuItem>
                    <MenuItem value="16px">16px</MenuItem>
                    <MenuItem value="18px">18px</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" fullWidth margin="normal">
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
                <Button variant="outlined" component="span" fullWidth margin="normal">
                    Upload Image
                </Button>
            </label>

            <Typography variant="caption" display="block" gutterBottom>
                {selectedImage && `Selected Image: ${selectedImage.name}`}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Send Email
            </Button>
        </div>
    );
}

export default AddTemplate

