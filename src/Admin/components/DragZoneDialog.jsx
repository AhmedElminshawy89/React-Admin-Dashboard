import React, { useState } from 'react';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function DragZoneDialog() {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const clearFile = () => {
    setFile(null);
  };

  return (
    <Paper
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.09)'
      }}
    >
      {file ? (
        <Box>
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded"
            width={150}
            height={150}
          />
          <Typography variant="body2">{file.name}</Typography>
          <IconButton onClick={clearFile}>
            Clear
          </IconButton>
        </Box>
      ) : (
        <div>
          <CloudUploadIcon fontSize="large" />
          <Typography variant="body2">Drag & Drop or Click to Upload</Typography>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            id="file-input"
          />
          <label htmlFor="file-input">
            <Typography variant="body2" component="span">
              Select File
            </Typography>
          </label>
        </div>
      )}
    </Paper>
  );
}

export default DragZoneDialog;
