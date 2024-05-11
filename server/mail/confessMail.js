const confessMailSingle = (name, description) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Confession Email</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
                background-color: #f8f9fa; /* Light gray background */
            }
            .container {
                width: 80%;
                margin: 20px auto;
                background-color: #ffffff; /* White container background */
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                color: #343a40; /* Dark gray heading text color */
            }
            p {
                color: #495057; /* Gray paragraph text color */
                line-height: 1.6;
            }
            @media only screen and (max-width: 600px) {
                .container {
                    width: 90%;
                    padding: 15px;
                }
            }
        </style>
    </head>
    <body>  
        <div class="container">
            <h1 style="font-size: 24px; margin-bottom: 20px;">New Confession</h1>
            <p style="font-size: 18px;"><strong>${name}</strong> confessed:</p>
            <p style="font-size: 16px; margin-top: 10px;">${description}</p>
        </div>
    </body>
    </html>
    `;
};

export default confessMailSingle;
