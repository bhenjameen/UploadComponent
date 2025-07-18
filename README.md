<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UploadForm Component README</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Light background */
            color: #1e293b; /* Dark text */
        }
    </style>
</head>
<body class="p-4 sm:p-8 md:p-12 lg:p-16">
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-500 pb-2">UploadForm Component</h1>

        <p class="text-lg text-gray-700 mb-8 leading-relaxed">This React component provides a user-friendly interface for uploading audio and video files, featuring both drag-and-drop functionality and a traditional file browse button. It includes client-side validation for file type and size before initiating an upload to a backend API.</p>

        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-1">What it Does</h2>
        <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li><strong class="font-medium">File Selection</strong>: Allows users to select audio or video files either by dragging and dropping them into a designated area or by clicking a "Browse File" button to open their file explorer.</li>
            <li><strong class="font-medium">File Type Validation</strong>: Ensures that only specified audio (e.g., MP3, WAV, OGG, AAC) and video (e.g., MP4, WebM, OGG, MOV) formats are accepted.</li>
            <li><strong class="font-medium">File Size Validation</strong>: Enforces a maximum file size limit (currently 50 MB) to prevent excessively large uploads.</li>
            <li><strong class="font-medium">Visual Feedback</strong>: Provides visual cues when files are dragged over the drop zone.</li>
            <li><strong class="font-medium">File Information Display</strong>: Shows the name, type, and size of the selected file.</li>
            <li><strong class="font-medium">Error Handling</strong>: Displays clear error messages for invalid file types, oversized files, or issues during the upload process.</li>
            <li><strong class="font-medium">Upload Integration</strong>: Prepares the selected file using <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">FormData</code> for easy integration with a backend API endpoint. It includes a loading indicator during the upload process.</li>
        </ul>

        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-1">How to Test it Locally</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">To test this <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">UploadForm</code> component locally, you'll need a basic React development environment set up.</p>

        <h3 class="text-xl sm:text-2xl font-medium text-gray-800 mb-3">Prerequisites</h3>
        <ul class="list-disc list-inside space-y-1 mb-6 text-gray-700">
            <li>Node.js (LTS version recommended)</li>
            <li>npm or Yarn</li>
        </ul>

        <h3 class="text-xl sm:text-2xl font-medium text-gray-800 mb-3">Steps</h3>

        <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">1. Set up a React Project (if you don't have one):</h4>
            <p class="text-gray-700 mb-2">If you don't have an existing React project, you can quickly create one using Vite or Create React App.</p>
            <p class="font-semibold text-gray-700 mt-4 mb-2">Using Vite (Recommended for speed):</p>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm mb-4"><code class="language-bash">npm create vite@latest my-upload-app -- --template react
cd my-upload-app
npm install</code></pre>
            <p class="font-semibold text-gray-700 mt-4 mb-2">Using Create React App:</p>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm"><code class="language-bash">npx create-react-app my-upload-app
cd my-upload-app
npm install</code></pre>
        </div>

        <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">2. Place the Component and CSS Code:</h4>
            <p class="text-gray-700 mb-2">Create the folder structure <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">src/frontend/components/UploadComponent/</code> inside your React project's <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">src</code> directory.</p>
            <ul class="list-disc list-inside space-y-1 mb-4 text-gray-700">
                <li>Copy the provided React code (from the <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">upload-form-react-css</code> immersive) into a file named <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">UploadForm.js</code> within this new folder: <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">src/frontend/components/UploadComponent/UploadForm.js</code></li>
                <li>Copy the provided CSS code (from the <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">upload-form-css</code> immersive) into a file named <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">UploadForm.css</code> in the <em>same directory</em> as <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">UploadForm.js</code>: <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">src/frontend/components/UploadComponent/UploadForm.css</code></li>
            </ul>
            <p class="text-gray-700 mb-2">Your project structure should look something like this:</p>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm"><code class="language-plaintext">my-upload-app/
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
└── ...</code></pre>
        </div>

        <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">3. Integrate into your <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">App.js</code> (or main component):</h4>
            <p class="text-gray-700 mb-2">Open your project's main <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">App.js</code> file (usually <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">src/App.js</code>) and replace its content with the following to render the <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">UploadForm</code> component:</p>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm mb-4"><code class="language-jsx">import React from 'react';
// Adjust the import path based on where your App.js is relative to UploadForm.js
import UploadForm from './frontend/components/UploadComponent/UploadForm';

function App() {
  return (
    &lt;div className="App"&gt;
      &lt;UploadForm /&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
            <p class="font-semibold text-gray-700">Important</p>: Ensure the import path <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">./frontend/components/UploadComponent/UploadForm</code> is correct relative to your <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">App.js</code> file.
        </div>

        <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">4. Run the Development Server:</h4>
            <p class="text-gray-700 mb-2">Start your React development server:</p>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm mb-4"><code class="language-bash">npm start  # for Create React App
# OR
npm run dev # for Vite</code></pre>
            <p class="text-gray-700">This will typically open your application in your browser at <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">http://localhost:3000</code> (for CRA) or <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">http://localhost:5173</code> (for Vite). You should now see the upload form, and you can test its drag-and-drop, browse, and validation features.</p>
        </div>

        <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">5. Simulate Backend Upload (Optional):</h4>
            <p class="text-gray-700">The <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">handleUpload</code> function in <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">UploadForm.js</code> currently contains a placeholder <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">fetch</code> call to <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">/api/upload-media</code>. To fully test the upload functionality, you would need a simple backend server running that can accept file uploads at that endpoint. For local testing, you can modify <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">handleUpload</code> to simply log the <code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded">selectedFile</code> to the console and set a success message without making a network request.</p>
        </div>
    </div>
</body>
</html>
