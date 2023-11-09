    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMismatchMessage = document.getElementById('passwordMismatchMessage');

    confirmPasswordInput.addEventListener('blur', () => {
        if (confirmPasswordInput.value !== passwordInput.value) {
                passwordMismatchMessage.style.display = 'block';
                passwordInput.value = '';
                confirmPasswordInput.value = '';
                passwordInput.focus();
        } else {
            passwordMismatchMessage.style.display = 'none';
        }
    });

    function updatePageRatingValue(value) {
            const pageRatingValueElement = document.getElementById('pageRatingValue');
            pageRatingValueElement.textContent = `Current Rating: ${value}`;
    }