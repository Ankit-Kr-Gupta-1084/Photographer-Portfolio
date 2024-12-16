// Refresh the page
function refreshPage() {
    location.reload();
}

// Show Sign In form
function showSignIn() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('signinContainer').style.display = 'block';
}

// Show Sign Up form
function showSignUp() {
    document.getElementById('signinContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

// Handle Sign Up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    // Redirect to thank you page
    document.body.innerHTML = `
        <div class="container">
            <h1>Thank You for Signing Up!</h1>
            <p>We appreciate your registration.</p>
        </div>
    `;
});

// Handle Sign In form submission
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert('Sign In Successful!');
});
