const { exec } = require('child_process');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email_address, message } = req.body;

        // Validate and process the data as needed

        // Build the email body
        const emailBody = `Name: ${name}\nEmail: ${email_address}\nMessage: ${message}`;

        // Use the mail command to send the email
        exec(`echo "${emailBody}" | mail -s "New Contact Form Submission" devdavixx@gmail.com`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                // Log the result of the mail command
                console.log('Email sent:', stdout);

                // Respond to the client
                res.status(200).json({ message: 'Success! Your message has been received.' });
            }
        });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
