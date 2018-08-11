<?php
session_start();
require_once'helpers/security.php';
$errors=isset($_SESSION['errors'])?$_SESSION['errors']:[];
$fields=isset($_SESSION['fields'])?$_SESSION['fields']:[];
?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="bootstrap.min.css">
        <script src="jquery-3.1.1.min.js"></script>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Corporate index</title>

        <!-- Bootstrap -->
        <link rel="shortcut icon" type="image/png" href="favicon.ico" />
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link href="css/animate.min.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet">

    </head>
    <body>
    <!-- style='background: url(img/3.jpg);' -->
    <div id="home">
    <div class="slider">
      <img src="img/3.jpg" class="img-responsive" />
    </div>
  </div>
    <div class="container" >
                <div class="row contact-wrap">
                  <div class="col-md-8 col-md-offset-2">
                  <div class="panel">
                <!--     <?php if(!empty($errors)):?>
                    <div class="panel">
                        <ul><li><?php echo implode('</li> <li>', $errors)?></li></ul>
                    </div>
                <?php endif; ?> -->
                </div>
                <h3>Contacto</h3>
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form action="contact.php" method="post" role="form" class="" >
                      <div class="form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Ingrese Nombre" data-rule="minlen:4" data-msg="Ingrese 4 caracteres o mas"
                        />
                        <div class="validation"></div>
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Tu Correo" data-rule="email" data-msg="Ingrese correo valido"
                        />
                        <div class="validation"></div>
                      </div>
                      <!-- <div class="form-group">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Ingrese por lo menos 8 caracteres"
                        />
                        <div class="validation"></div>
                      </div> -->
                      <div class="form-group">
                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                        <div class="validation"></div>
                      </div>
      
                      <div class="text-center" style='display: flex;justify-content: center;'>
                        <input type="submit" value="Enviar" class="form-control" class="btn btn-primary"
                        style=" width: 50%;display: flex;justify-content: center;">   
                        <!-- <button type="submit" class="btn btn-primary btn-lg">Enviar Mensaje</button> -->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="text-center">
              <a href="#home" class="scrollup">
                <i class="fa fa-angle-up fa-3x"></i>
              </a>
              <p>
                <img src="img/favicon.ico" height="42" width="42"> &copy;Indice Empresarial Corporativo,todos los derechos reservados
              </p>
              <div class="credits">
                  <p>
                    Para contactarse con nosotros escríbanos
                  </p>
                  <p>
                     a <u><big>contacto@corporateindex.cl </big>  </u> 
                  </p>
                  <p>
                    Teléfono de contacto <u><big>+56988264551 </big> </u> 
                  </p>
                 <!--  <p>
                      Teléfono de contacto +56988264551
                  </p> -->
                     
                Designed by
                <big>
                  <u>
                    <a href="">JeraInsigth</a>
                  </u>
                </big>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </body>
</html>

<?php
unset($_SESSION['errors']);
unset($_SESSION['fields']);
?>