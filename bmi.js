<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- title is used to provide
             a specific name to our web-page! -->
        <title>BMI-CALCULATOR</title>
        <!-- link function is used here, so that we can
    connect our css file with our html file externally -->
        <link rel="stylesheet" href="1.css" />
    </head>
    <body>
        <div id="MAIN">
            <h1 id="heading">BMI-CALCULATOR</h1>
        </div>
  
        <form action="/bmicalculator" method="post">
            <input type="text" 
                   name="Name"
                   placeholder="Enter your  name!" />
            <br />
            <input id="Height"
                   name="Height"
                   placeholder="Enter your height(m)" />
            <br />
            <input id="Weight" 
                   name="Weight"
                   placeholder="Enter your weight(kg)" />
            <br />
            <button class="btn" 
                    type="submit">Get-BMI</button>
        </form>
    </body>
</html>