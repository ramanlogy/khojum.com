const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1agvN_ujT3GKmLkmLG4gM7jYpjG0g94PpEUeSZzrWZ7I/edit?gid=0#gid=0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}`,
        });
        if (response.ok) {
            setMessage('Thank you for joining the waitlist!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
