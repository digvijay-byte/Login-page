// Sample array of existing user login IDs
const existingUsers = ['user123', 'johnDoe', 'alice01'];

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const loginID = document.getElementById('loginID').value;
    const errorLoginID = document.getElementById('errorLoginID');

    // Check if the login ID is unique
    if (existingUsers.includes(loginID)) {
        errorLoginID.style.display = 'block';
        errorLoginID.textContent = 'Login ID already exists. Please use a different one.';
    } else {
        errorLoginID.style.display = 'none';
        alert('Login successful!');  // In a real application, you'd send the data to a server here
        // Add the new login ID to existing users (for demonstration purposes)
        existingUsers.push(loginID);
        console.log('Updated Users List:', existingUsers);
    }
});

// Handle "Forgot Password" link click
document.getElementById('forgotPassword').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Redirecting to Forgot Password page...');  // Implement the actual redirection logic here
});
