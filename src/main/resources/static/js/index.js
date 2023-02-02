$(document).ready(function() {
    window.jQuery = window.$ = jQuery = $;
    
    const query = "login/create"
    const url = "http://localhost:8080/"+query
    const params = {
        nom:"test",
        prenom:"test",
        privilege:"admin",
        login:"test",
        password:"test"
        }
    
$.ajax({
    type: "POST",
    url: url,
    data: params,
    success: function(response){ 
     console.log(response)
    },
    error:function(err){
       
    },
  });
    

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