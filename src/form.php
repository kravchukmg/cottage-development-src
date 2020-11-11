<?php 
  header("Content-type: text/html; charset=utf-8");

  $to1 = "kravchukmaxym@gmail.com";
  $subject = "Обращение с сайта ". date("Y-m-d H:i:s");

  $message = "";
  foreach ($_POST as $item) {
    if(is_array($item)) {
      foreach ($item as $dd) {
        $message .= '<p>'.$dd.'</p>';
      }
    } else {
      $message .= '<p>'.$item.'</p>';
    }
  }

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf8\r\n";

  mail($to1, $subject, $message, $headers);

  header("Content-type: application/json");
  echo json_encode(['message' => 'Mail sent.'])
?>
