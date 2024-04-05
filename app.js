const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
<head>
<style> 
    body {
        background-image: url(https://vcdn-dulich.vnecdn.net/2021/12/24/An-Giang-0-jpeg-1470-1640315739.jpg);
        text-align: center; 
        background-size: cover;  
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        width: 100%;
        margin: 0%;
    }

    .custom-button {
        color: white;
        background-color: rgb(190, 43, 43);
        width: 300px;
        height: 50px;
        border-radius: 5px;
        text-align: center;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        box-shadow: 10px 20px rgba(red);
        
    }

    .custom-button:hover {
        background-color: red;
        color: white;
        transform: scale(1.1);
    }

    .container {
        padding-top: 250px;
        justify-content: center;
    }

    .hello {
        padding-top: 30px;
        justify-content: center;
    }

</style> 
</head>
<body>       
            <h1> Đào Đình Nhật _ 22810310015 </h1>
            <hr>
            <div class="container">
                    
        <h1> Don't miss this special offer!</h1>

        <p> Get it now for just $10! the price will be increased after 50 downloads </p>
            <div class="hello">
                <p>
                    <button type="submit" class="custom-button"> Get the latest version of Bootslander</button> 
                </p>

            </div>
      
            </div>
</body>
</html>

`
