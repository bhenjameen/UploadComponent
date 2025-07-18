import React, { useState, useRef } from 'react';
import "./App.css"; // Import the custom CSS file

// Main App component for the file upload form
function App() {
  // State to store the currently selected file
  const [selectedFile, setSelectedFile] = useState(null);
  // State to store any error messages (e.g., validation errors)
  const [errorMessage, setErrorMessage] = useState('');
  // State to manage the visual feedback for drag-and-drop
  const [isDragging, setIsDragging] = useState(false);
  // State to show loading indicator during upload
  const [isUploading, setIsUploading] = useState(false);
  // Reference to the hidden file input element
  const fileInputRef = useRef(null);

  // Define allowed file types and maximum file size
  const ALLOWED_FILE_TYPES = [
    'audio/mpeg', // .mp3
    'audio/wav',  // .wav
    'audio/ogg',  // .ogg
    'audio/aac',  // .aac
    'video/mp4',  // .mp4
    'video/webm', // .webm
    'video/ogg',  // .ogg
    'video/quicktime' // .mov
  ];
  const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB

  /**
   * Handles the file processing and validation.
   * @param {File} file - The file object to process.
   */
  const processFile = (file) => {
    setErrorMessage(''); // Clear previous errors

    if (!file) {
      setErrorMessage('No file selected.');
      setSelectedFile(null);
      return;
    }

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrorMessage(
        `Invalid file type. Please upload an audio or video file (${ALLOWED_FILE_TYPES.map(t => t.split('/')[1]).join(', ')}).`
      );
      setSelectedFile(null);
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMessage(
        `File size exceeds the limit of ${MAX_FILE_SIZE_BYTES / (1024 * 1024)} MB.`
      );
      setSelectedFile(null);
      return;
    }

    // If validation passes, set the selected file
    setSelectedFile(file);
  };

  /**
   * Handles files selected via the browse button.
   * @param {Object} event - The change event from the file input.
   */
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    processFile(file);
  };

  /**
   * Prevents default behavior for drag events (e.g., opening file in browser).
   * @param {Object} event - The drag event.
   */
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true); // Set dragging state for visual feedback
  };

  /**
   * Handles when a dragged file leaves the drop zone.
   * @param {Object} event - The drag leave event.
   */
  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false); // Reset dragging state
  };

  /**
   * Handles when a file is dropped into the drop zone.
   * @param {Object} event - The drop event.
   */
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false); // Reset dragging state
    const file = event.dataTransfer.files[0]; // Get the first dropped file
    processFile(file);
  };

  /**
   * Triggers the hidden file input when the "Browse File" button is clicked.
   */
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  /**
   * Simulates the file upload to a backend API.
   * In a real application, you would send the 'selectedFile' here.
   */
  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('Please select a file to upload.');
      return;
    }

    setIsUploading(true); // Show loading indicator
    setErrorMessage(''); // Clear previous errors

    // --- Backend API Integration Placeholder ---
    // This is where you would send the file to your backend.
    // Example using FormData for file upload:
    const formData = new FormData();
    formData.append('mediaFile', selectedFile); // 'mediaFile' should match your backend's expected field name

    try {
      // Replace with your actual backend API endpoint
      const response = await fetch('/api/upload-media', {
        method: 'POST',
        body: formData, // Send the FormData object
        // Headers like 'Content-Type' are automatically set by fetch when using FormData
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Upload successful:', result);
        setErrorMessage('File uploaded successfully!');
        setSelectedFile(null); // Clear the selected file after successful upload
      } else {
        const errorData = await response.json();
        console.error('Upload failed:', errorData);
        setErrorMessage(`Upload failed: ${errorData.message || 'Server error'}`);
      }
    } catch (error) {
      console.error('Error during upload:', error);
      setErrorMessage(`Error during upload: ${error.message}`);
    } finally {
      setIsUploading(false); // Hide loading indicator
    }
    // --- End of Backend API Integration Placeholder ---
  };

  // Helper function to format file size for display
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="upload-page-container">
      <div className="upload-form-card">
        <h2 className="upload-form-title">Upload Audio/Video</h2>

        {/* Drag and Drop Area */}
        <div
          className={`drop-zone ${isDragging ? "drop-zone-dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick} // Allow clicking the drag area to browse
        >
          <svg
            className="drop-zone-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="drop-zone-text">Drag & drop your file here, or click to browse</p>
          <button
            type="button"
            className="browse-button"
            onClick={handleBrowseClick} // Explicit browse button
          >
            Browse File
          </button>
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden-file-input" // Keep it hidden
            accept={ALLOWED_FILE_TYPES.join(",")} // Restrict file types in browser dialog
          />
          <div className="below-button">
            <p className="drop-zone-text">
              Maximum upload size is <b>50MB</b>
            </p>
            <p className="drop-zone-text">
              File types supported: <br />
            <b>
              mp3, wav, ogg, aac, mp4, webm, ogg, mov
            </b>
          </p>
          </div>
        </div>

        {/* Display selected file information */}
        {selectedFile && (
          <div className="file-info-box">
            <p className="file-info-title">Selected File:</p>
            <p>
              <span className="file-info-label">Name:</span> {selectedFile.name}
            </p>
            <p>
              <span className="file-info-label">Type:</span> {selectedFile.type}
            </p>
            <p>
              <span className="file-info-label">Size:</span>{" "}
              {formatFileSize(selectedFile.size)}
            </p>
          </div>
        )}

        {/* Display error messages */}
        {errorMessage && (
          <div className="error-message-box">
            <p className="error-message-title">Error:</p>
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading} // Disable if no file or uploading
          className={`upload-button ${
            !selectedFile || isUploading ? "upload-button-disabled" : ""
          }`}
        >
          {isUploading ? (
            <div className="upload-button-loading">
              <svg
                className="spinner"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </div>
          ) : (
            "Upload File"
          )}
        </button>
      </div>
    </div>
  );
}

export default App;