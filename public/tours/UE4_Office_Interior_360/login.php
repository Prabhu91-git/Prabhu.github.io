<?php 

if(isset($_POST['login'])){
	
	$password = $_POST['password'];
	$uname = $_POST['uname'];
	
	if($password == 'user123' && $uname =='user'){
	
		header('Location:https://www.pamz.co.jp/360/Everpano/UE4_Office_Interior_360/');
	}else{
		 
		 echo '<script type="text/javascript">alert("Please check ur password");</script>'; 
        header ('Location: https://www.pamz.co.jp/360/Everpano/UE4_Office_Interior_360/login.php');
	}	
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="icon" href="12.png" type="image/png" sizes="144x144">
    <link rel="apple-touch-icon" href="12.png" type="image/png" sizes="144x144">
	<meta name="apple-mobile-web-app-capable" content="yes">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> UE4 Office Interior | Login </title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="css.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="css/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="css/custom.min.css" rel="stylesheet">
  </head>

  <body class="login" style="background-color: #B0DDEC;  background-image: linear-gradient(to right, #B0DBB6 , #FDF8C6);"> <!--style="background-image: url('image/1.jpg');">-->
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form action="" method="post">
              <h1>Login Form</h1>
              <div>
                <input type="text" class="form-control" name="uname" placeholder="Username" required="" />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Password" name="password" required="" />
              </div>
              <div>
                <button type="submit" class="btn btn-default submit" name="login">Log in</button>
               
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <!--<p class="change_link">New to site?
                  <a href="#signup" class="to_register"> Create Account </a>
                </p>-->

                <div class="clearfix"></div>
                <br />

                <div>
                 <!-- <h1>Pamz3d!</h1> -->
                  
                </div>
              </div>
            </form>
          </section>
        </div>

        
      </div>
    </div>
  </body>
</html>
