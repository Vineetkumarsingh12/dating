const confessMailMulti = (name1,desc,name2,des2) => {  
    return `
    <!DOCTYPE html>
    <html>
    <head>
        
        <meta charset="UTF-8">
        <title>Verification Email</title>
        <style>
            body {
                background-color: #f1f1f1;
            }
            .container {
                width: 60%;
                margin: auto;
                background-color: white;
                padding: 20px;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>  
        <div class="container">
            <h1>New Confession Match</h1>
            <p><strong>${name1}</strong> confessed:</p>
            <p>${desc}</p>
            <p><strong>${name2}</strong> confessed:</p>
            <p>${des2}</p>
        </div>
    </body>
    </html>
    `;
};
export default confessMailMulti ;
