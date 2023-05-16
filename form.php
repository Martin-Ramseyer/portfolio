<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $asunto = $_POST["asunto"];
  $mensaje = $_POST["mensaje"];

  // Configuración de los datos del correo
  $destinatario = "martinramseyer4@gmail.com";
  $asuntoCorreo = "Nuevo mensaje de contacto";
  $mensajeCorreo = "Nombre: " . $nombre . "\n";
  $mensajeCorreo .= "Correo electrónico: " . $correo . "\n";
  $mensajeCorreo .= "Asunto: " . $asunto . "\n";
  $mensajeCorreo .= "Mensaje: " . $mensaje . "\n";

  mail($destinatario, $asuntoCorreo, utf8_decode($mensajeCorreo));

  // Envío del correo
  if (mail($destinatario, $asuntoCorreo, $mensajeCorreo)) {
    echo "El correo ha sido enviado correctamente.";
  } else {
    echo "Hubo un error al enviar el correo.";
  }
}
?>

