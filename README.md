UploadForm Component
This React component provides a user-friendly interface for uploading audio and video files, featuring both drag-and-drop functionality and a traditional file browse button. It includes client-side validation for file type and size before initiating an upload to a backend API.

What it Does
File Selection: Allows users to select audio or video files either by dragging and dropping them into a designated area or by clicking a "Browse File" button to open their file explorer.

File Type Validation: Ensures that only specified audio (e.g., MP3, WAV, OGG, AAC) and video (e.g., MP4, WebM, OGG, MOV) formats are accepted.

File Size Validation: Enforces a maximum file size limit (currently 50 MB) to prevent excessively large uploads.

Visual Feedback: Provides visual cues when files are dragged over the drop zone.

File Information Display: Shows the name, type, and size of the selected file.

Error Handling: Displays clear error messages for invalid file types, oversized files, or issues during the upload process.

Upload Integration: Prepares the selected file using FormData for easy integration with a backend API endpoint. It includes a loading indicator during the upload process.

How to Test it Locally
To test this UploadForm component locally, you'll need a basic React development environment set up.

Prerequisites
Node.js (LTS version recommended)

npm or Yarn

Steps
Set up a React Project (if you don't have one):
If you don't have an existing React project, you can quickly create one using Vite or Create React App.

Using Vite (Recommended for speed):

npm create vite@latest my-upload-app -- --template react
cd my-upload-app
npm install

Using Create React App:

npx create-react-app my-upload-app
cd my-upload-app
npm install

Place the Component and CSS Code:
Create the folder structure src/frontend/components/UploadComponent/ inside your React project's src directory.

Copy the provided React code (from the upload-form-react-css immersive) into a file named UploadForm.js within this new folder:
src/frontend/components/UploadComponent/UploadForm.js

Copy the provided CSS code (from the upload-form-css immersive) into a file named UploadForm.css in the same directory as UploadForm.js:
src/frontend/components/UploadComponent/UploadForm.css

Your project structure should look something like this:

my-upload-app/
├── public/
├── src/
│   ├── frontend/
│   │   └── components/
│   │       └── UploadComponent/
│   │           ├── UploadForm.js
│   │           └── UploadForm.css
│   │           └── README.md (this file)
│   ├── App.js  (or your main entry component)
│   └── index.js
│   └── ...
├── package.json
└── ...

Integrate into your App.js (or main component):
Open your project's main App.js file (usually src/App.js) and replace its content with the following to render the UploadForm component:

import React from 'react';
// Adjust the import path based on where your App.js is relative to UploadForm.js
import UploadForm from './frontend/components/UploadComponent/UploadForm';

function App() {
  return (
    <div className="App">
      <UploadForm />
    </div>
  );
}

export default App;

Important: Ensure the import path ./frontend/components/UploadComponent/UploadForm is correct relative to your App.js file.

Run the Development Server:
Start your React development server:

npm start  # for Create React App
# OR
npm run dev # for Vite

This will typically open your application in your browser at http://localhost:3000 (for CRA) or http://localhost:5173 (for Vite). You should now see the upload form, and you can test its drag-and-drop, browse, and validation features.

Simulate Backend Upload (Optional):
The handleUpload function in UploadForm.js currently contains a placeholder fetch call to /api/upload-media. To fully test the upload functionality, you would need a simple backend server running that can accept file uploads at that endpoint. For local testing, you can modify handleUpload to simply log the selectedFile to the console and set a success message without making a network request.