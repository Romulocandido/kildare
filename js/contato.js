$(document).ready(function() {
    $('form[name="contato-form"]').submit(function () {
        $("#btn").prop('disabled', true);

        var empresa  = $('#empresa').val();
        var nome = $('#nome').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var assunto = $('#assunto').val();
        var mensagem = $('#mensagem').val();

        //trabalhar html
        //var html = "Contato: " + nome + "\nEmpresa: " + empresa + "\nEmail: " + email + "\nTelefone: " + telefone + (mensagem != undefined ? "\nMensagem: " + mensagem : "");
        var html = "<p>Resultado de formulário enviado pelo site: http://www.reverseresiduos.com.br.</p>" +
                   "<p>Empresa:&nbsp;" + empresa + "</p>" +
                   "<p>Nome:&nbsp;" + nome + "</p>" +
                   "<p>E-mail:&nbsp;" + email + "</p>" +
                   "<p>Telefone:&nbsp;" + telefone + "</p>" +
                   "<p>Assunto:&nbsp;" + assunto + "</p>" +
                   "<p>Mensagem:&nbsp;" + mensagem + "</p>";
        

        $.ajax({
            type: "POST",
            url: ServiceBasePath + 'SendMail/?subject=' + assunto + '&recipient=' + emailReverse,        
            headers: headers,
            async: true,
            data: JSON.stringify(html), /* informa Url */        
            success: function(response) { /* sucesso */
                $('#btncontactsend').click();

                $("#empresa").val("");
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val("");
                $("#assunto").val("");
                $("#mensagem").val("");

                $("#btn").prop('disabled', false);
                /* alert(data) */
                /* pode ser utilizado um alert para ver o retorno */
            //$('#retornoHTML').html(data); /* imprime o retorno no HTML */
            },
            // beforeSend: function() { /* antes de enviar */
            //    //$('.loading').fadeIn('fast'); /* mostra o loading */
            // },
            // complete: function(){ /* completo */
            //    //$('.loading').fadeOut('fast'); /* esconde o loading */
            // }
        });
        
        return false;
    });
});
