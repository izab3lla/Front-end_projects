<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="estilizar.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>

        <div class= "one">
            <form action="">
                <h1>Login</h1>
                <div class= "input-box">
                    <input type="text" placeholder="Nome de usuário" required>
                    <i class='bx bxs-user'></i>
                </div>
                <div class= "input-box">
                    <input type="password" placeholder="Senha" required>
                    <i class='bx bxs-lock-alt'></i>
                </div>

                <div class="lembre-de-mim">
                    <label> <input type="checkbox">
                    Lembre-se de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button type="submit" class="botão">Login</button>

                <div class="link-registro">
                    <p>Ainda não possui conta? <a href="#">Registre-se</a></p>
                </div>

            </form>
        </div>

<footer>
</footer>

</body>
</html>