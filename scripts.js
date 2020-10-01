
function checarEmail () {
    var inputElement = document.getElementById('email');
    var textElement = document.getElementById('welcome');
    
    if (inputElement.value === ""){
        alert("Por favor digite seu email");
        inputElement.focus();

    } else {

        if (inputElement.value.indexOf('@') === -1 || inputElement.value.indexOf('.') === -1 ){
        
            alert("Email inválido");
            inputElement.value = "";
            inputElement.focus();
        

        } else {
            
            var texto = `Bem vindo ${inputElement.value} !`;
            var textwelcome = document.createTextNode(texto);

            textElement.appendChild(textwelcome);
            
            inputElement.value = "";
        }
        
        
    }

    
}
