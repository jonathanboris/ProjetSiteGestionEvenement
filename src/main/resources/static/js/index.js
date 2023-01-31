$(document).ready(function() {
    window.jQuery = window.$ = jQuery = $;
    
    

    const buttonConnect = $('#connect')
   
    buttonConnect.click((e)=>{
        const login = $('#login').val()
    const pass = $('#pass').val()

        e.preventDefault()

        const query = "login/validation"
    const url = "http://localhost:8080/"+query
    const params = {
        login:login,
        password:pass
        }
    
$.ajax({
    type: "GET",
    url: url,
    data: params,
    success: function(response){
        if(response.length != 0){
            sessionStorage.setItem('token','tfrggdgdbvhjsjndbbdhh')
            window.location.href = "/evenement"
        }else{
            const errMsg = $('#error')
            sessionStorage.setItem('token','')
            errMsg.text('identifiant incorrecte !!')

        }
        
     console.log(login,pass,response)
    },
    error:function(err){
       
    },
  });
    })
})