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
                font-family: Arial, sans-serif;
                background-color: #f1f1f1;
            }
            .container {
                width: 80%;
                margin: 20px auto;
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                color: #333;
            }
            p {
                color: #555;
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
            <h1>New Confession</h1>
            <p><strong>${name}</strong> confessed:</p>
            <p>${description}</p>
        </div>
    </body>
    </html>
    `;
};

export default confessMailSingle;
