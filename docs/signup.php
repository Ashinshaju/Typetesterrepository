<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container">

      <div class="box col-xs-12 col-lg-4">
                <h2 class="mb-3">Sign Up</h2>
                
                <form action="typetester/typetester.html">
                    <div class="inputBox">
                        <input type="email" placeholder="First name" name="email" required onkeyup="this.setAttribute('value', this.value);"  value="">
                        
                      </div>
                      <div class="inputBox">
                        <input type="email" placeholder="Last name" name="email" required onkeyup="this.setAttribute('value', this.value);"  value="">
                      
                      </div>
                  <div class="inputBox">
                    <input type="email" placeholder="Email" name="email" required onkeyup="this.setAttribute('value', this.value);"  value="">
                
                  </div>
                  <div class="inputBox">
                        <input type="text" placeholder="Password" name="text" required onkeyup="this.setAttribute('value', this.value);" value="">
            
                      </div>
                    
                  <input type="submit" name="sign-in" value="Sign Up"></input>
                  <button type="button"  onclick="location.href='index.html'" class="btn btn-light">Sign In Instead</button>
                </form>
              </div>
              </div>
              <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>