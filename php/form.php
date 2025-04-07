<?php

if($_SESSION["RESQUEST_METHOD"] == "$POST"){
    // Pega os dados do formulário
    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $assunto = strip_tags(trim($_POST["assunto"]));


    // Verificação básica
    if(!$nome || !$email || !$assunto){
        echo "Por favor preencha todos os campos do formulário!";
        exit;
    }

    // para onde vai o e-mail
    $para = "kaessestudos@gmail.com";

    // Assunto do e-mail

    $assuntoEmail = "Mensagem do portfólio de $nome";

    // Corpo da mensagem

    $mensagem = "Você recebeu uma nova mensagem do seu portfólio:\n\n";
    $mensagem .= "Nome: $nome\n";
    $mensagem .= "E-mail: $email\n\n";
    $mensagem .= "Mensagem: \n$assunto\n";

    // Cabeçalho do e-mail

    $headers = "From: $nome <$email>\r\n";
    $headers .= "Reply-to: $email\r\n";

    // Envio

    if(mail($para, $assuntoEmail, $mensagem, $headers)){
        echo "Mensagem enviada com sucesso!";
    }else{
        echo "Error ao enviar. Tente novamente mais tarde.";
    }
}else{
    // Impede o acesso direto ao script
    echo "Acesso inválido.";
}

?>