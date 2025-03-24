<h1>User Management Dashboard</h1>
    <p>A React-based web application with Firebase Firestore integration for managing user data with CRUD operations.</p>

  <h2>Features</h2>
    <ul>
        <li>Create, Read, Update, and Delete (CRUD) user records</li>
        <li>User form with fields for:
            <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Password (with show/hide toggle)</li>
                <li>Gender (radio buttons)</li>
                <li>Hobbies (checkboxes)</li>
                <li>City (dropdown)</li>
            </ul>
        </li>
        <li>Responsive table display of all users</li>
        <li>Real-time data sync with Firebase Firestore</li>
        <li>Edit and Delete functionality with icons</li>
    </ul>

<h2>Screenshot and Video</h2>





https://github.com/user-attachments/assets/bf06d46a-054a-4cea-b79f-46dc27d84afe





![Screenshot 2025-03-24 132811](https://github.com/user-attachments/assets/f06f64aa-3196-4ac0-952b-14d0764f0fbc)
![Screenshot 2025-03-24 132742](https://github.com/user-attachments/assets/1e65639f-231c-426b-916b-8637a9ece150)



  <h2>Technologies Used</h2>
    <ul>
        <li><a href="https://reactjs.org/">React.js</a> - Frontend library</li>
        <li><a href="https://firebase.google.com/">Firebase Firestore</a> - Backend database</li>
        <li><a href="https://react-icons.github.io/react-icons/">React Icons</a> - Icon components</li>
        <li>CSS - Styling with Tailwind-inspired classes</li>
    </ul>

   <h2>Prerequisites</h2>
    <ul>
        <li>Node.js (v14 or higher)</li>
        <li>npm or yarn</li>
        <li>Firebase project setup</li>
    </ul>

  <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre>git clone [repository-url]</pre>
        </li>
        <li>Navigate to project directory:
            <pre>cd [project-directory]</pre>
        </li>
        <li>Install dependencies:
            <pre>npm install</pre>
        </li>
        <li>Install Firebase:
            <pre>npm install firebase</pre>
        </li>
        <li>Install React Icons:
            <pre>npm install react-icons</pre>
        </li>
    </ol>

  <h2>Firebase Setup</h2>
    <ol>
        <li>Create a Firebase project at <a href="https://console.firebase.google.com/">Firebase Console</a></li>
        <li>Enable Firestore in your project</li>
        <li>Copy your Firebase configuration and replace it in <code>Firebase.js</code></li>
        <li>Example configuration:
            <pre>
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
            </pre>
        </li>
    </ol>

   <h2>Running the Application</h2>
    <ol>
        <li>Start the development server:
            <pre>npm start</pre>
        </li>
        <li>Open your browser and navigate to:
            <pre>http://localhost:3000</pre>
        </li>
    </ol>

  <h2>Project Structure</h2>
    <pre>
src/
├── App.jsx            # Main app component
├── Usertable.jsx      # User management component
├── Firebase.js        # Firebase configuration
├── index.jsx          # React DOM entry point
└── index.css          # Global styles
    </pre>
    <h2>Usage</h2>
    <ul>
        <li>Add User: Fill the form and click "Add User"</li>
        <li>Edit User: Click the edit icon, modify details, and click "Update User"</li>
        <li>Delete User: Click the trash icon next to a user</li>
        <li>View Users: Table automatically updates with all users</li>
    </ul>

   <h2>Notes</h2>
    <ul>
        <li>Password is stored in plain text (for demo purposes only - in production, use proper authentication)</li>
        <li>Error handling is basic - console logs only</li>
        <li>Styling is minimal but responsive</li>
    </ul>

  <h2>Contributing</h2>
<p>Feel free to fork the repository and submit pull requests with improvements!</p>

   
   
