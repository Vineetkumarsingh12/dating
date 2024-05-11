const confessMailMulti = (name1, desc, name2, des2) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Confession Match</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            <h1 style="font-size: 24px; margin-bottom: 20px;">New Confession Match</h1>
            <div style="margin-bottom: 20px;">
                <p style="font-size: 18px;"><strong>${name1}</strong> confessed:</p>
                <p style="font-size: 16px;">${desc}</p>
            </div>
            <div>
                <p style="font-size: 18px;"><strong>${name2}</strong> confessed:</p>
                <p style="font-size: 16px;">${des2}</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

export default confessMailMulti;
