
$(document).ready(function() {
    window.jQuery = window.$ = jQuery = $;
    const token = sessionStorage.getItem('token')
    const deconn = $('.deconn')
    if(token != "tfrggdgdbvhjsjndbbdhh"){
        window.location.href = "/"
    }

    deconn.click(()=>{
        sessionStorage.setItem('token','')
        window.location.href = "/"
    })
   const navCreateDiv = $('#navCreate')
   const navModDiv = $('#navMod')
   const navViewDiv = $('#navView')
   const nav1EvntLink= $('#evLink')
   const nav1PartLink= $('#partLink')
   const navActive = $('.nav')
   const nav1Active2 = $('.nav1')

   
   const containerCreateDiv = $('#partCreate')
   const containerModDiv = $('#partMod')
   const containerViewDiv = $('#partView')
   const eventPartlist = $('#partEvent')
   const eventPartlist2 = $('#partModEvent')
   const eventPartlist3 = $('#partModEventFiltre')
   const partlist = $('#partModSelect')
     

   const createSubmitBtn = $('#partUpload')
   const successAlert = $('.succesalert1')
   const deleteAlert  = $('.deletealert1')
   const errorAlert = $('.erroralert1')
   const container = $('#container');



   const EventUpdateBtn = $('#partUpdate')
   const EventDeleteBtn = $('#partDelete')

//intial hide sections
   containerModDiv.hide()
   containerViewDiv.hide()
   successAlert.hide();
errorAlert.hide()
deleteAlert.hide()

//init event liste create
const query = "evenement/liste"
    const url = "http://localhost:8080/"+query
    const params = {}
    
    eventPartlist.empty()
    eventPartlist2.empty()
    eventPartlist3.empty()
    eventPartlist.append("<option selected></option>")
    eventPartlist2.append("<option selected></option>")
    eventPartlist3.append("<option selected></option>")
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            response.forEach((val,index)=>{
                eventPartlist.append("<option value = '"+val.id+"'>"+"'"+val.titre+"' | organisateur: "+val.organisateur+"</option>")
                eventPartlist2.append("<option value = '"+val.id+"'>"+"'"+val.titre+"' | organisateur: "+val.organisateur+"</option>")
                eventPartlist3.append("<option value = '"+val.id+"'>"+"'"+val.titre+"' | organisateur: "+val.organisateur+"</option>")
            })
        },
        error:function(err){
            
        }
      });

//navigation controllers


   navModDiv.click(function(){
    navActive.removeClass('active')
    $(this).addClass('active')
    containerCreateDiv.hide()
    containerViewDiv.hide()
    containerModDiv.show()

    //initialize event list
    const query = "participant/liste"
    const url = "http://localhost:8080/"+query
    const params = {

        }
eventPartlist3.change(()=>{
    const eventlist = $('#partModSelect')
    eventlist.empty()
    eventlist.append("<option selected></option>")
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            const responseFiltre = response.filter(el=> el.event_id == eventPartlist3.val())
            eventlist.empty()
            eventlist.append("<option selected></option>")
            responseFiltre.forEach((val,index)=>{
                eventlist.append("<option value = '"+val.id+"'>"+" '"+val.nom+" "+val.prenom+"' | entreprise: "+val.entreprise+"</option>")
            })
        },
        error:function(err){
            
        }
      });
})
    
    

   })

   navCreateDiv.click(function(){
    navActive.removeClass('active')
    $(this).addClass('active')
    containerModDiv.hide()
    containerViewDiv.hide()
    containerCreateDiv.show()
   })

   navViewDiv.click(function(){
    navActive.removeClass('active')
    $(this).addClass('active')
    containerCreateDiv.hide()
    containerModDiv.hide()
    containerViewDiv.show()

    const tableBody = $('#partView table tbody');

    const query = "participant/liste"
    const url = "http://localhost:8080/"+query
    const params = { 
        }
    
$.ajax({
    type: "GET",
    url: url,
    data: params,
    success: function(response){
        tableBody.empty()
        const datas = response
        datas.forEach((data,index)=>{
         const tr = "<tr>"+
         "<th scope='row'>"+index+"</th>"+
        "<td>"+data.nom+"</td>"+
        "<td>"+data.prenom+"</td>"+
        "<td>"+data.mail+"</td>"+
        "<td>"+data.date_naiss+"</td>"+
        "<td>"+data.observation+"</td>"+
        "<td>"+data.entreprise+"</td>"+
        "<td>"+data.event_id+"</td>"+
        "</tr>"
        tableBody.append(tr)
        })
        
    },
    error:function(err){
       
    },
  });



   
   })

   // create part

 

   createSubmitBtn.click((e)=>{
   
    e.preventDefault();

   const createPartNom = $('#partNom').val();
   const createpartPrenom = $('#partPrenom').val();
   const createPartMail= $('#partMail').val();
   const createPartNaiss= $('#partNaiss').val();
   const createPartEntr = $('#partEntr').val();
   const createPartObser = $('#partObserv').val();
   const createPartEvent = $('#partEvent').val();

    
    console.log(createPartNom,createpartPrenom,createPartEntr)
    
    const query = "participant/create"
    const url = "http://localhost:8080/"+query
    const params = {
        nom:createPartNom, 
        prenom:createpartPrenom  ,
        mail:createPartMail,
        date_naiss:createPartNaiss,
        entrep:createPartEntr,
        observ:createPartObser,
        event_id:createPartEvent

        }
    
$.ajax({
    type: "POST",
    url: url,
    data: params,
    success: function(response){
       
	container.animate({
		scrollTop: 20
	});
        successAlert.show()
        console.log(response)
        setTimeout(()=>{
            successAlert.hide()
        },3000)
        setTimeout(() => { 
            window.location.href = "/participant";
        }, 3500);
    },
    error:function(err){
        errorAlert.show()
        container.animate({
            scrollTop: 20
        });
        setTimeout(()=>{
            errorAlert.hide()
        },5000)
          console.log(err)
    },
  });
   
})


const partNom = $('#partModNom');
const partPrenom = $('#partModPrenom');
const partMail= $('#partModMail');
const partNaiss= $('#partModNaiss');
const partEntr = $('#partModEntr');
const partObs = $('#partModObs');
const partEvent = $('#partModEvent');
partlist.change(()=>{


// selected event



    const query = "participant/getId"
    const url = "http://localhost:8080/"+query
    const params = {
        id:partlist.val(), 
        }
    
$.ajax({
    type: "GET",
    url: url,
    data: params,
    success: function(response){
        const data = response[0]
        partNom.attr("value",data.nom)
        partPrenom.attr("value",data.prenom)
        partMail.attr("value",data.mail)
        partNaiss.attr("value",data.date_naiss)
        partEvent.val(data.event_id)
        partEntr.attr("value",data.entreprise)
        partObs.attr("value",data.observation)
        
    },
    error:function(err){
       
    },
  });
   
})

// update event



EventUpdateBtn.click((e)=>{
    e.preventDefault()

    const query = "participant/update"
    const url = "http://localhost:8080/"+query
    const params = {
        nom:partNom.val(), 
        prenom:partPrenom.val()  ,
        mail:partMail.val(),
        date_naiss:partNaiss.val(),
        entrep:partEntr.val(),
        observ:partObs.val(),
        event_id:partEvent.val(),
        currentId:partlist.val()
        }
    
$.ajax({
    type: "POST",
    url: url,
    data: params,
    success: function(response){
        
	container.animate({
		scrollTop: 20
	});
        successAlert.show()
        console.log(response)
        setTimeout(()=>{
            successAlert.hide()
        },3000)
        
        setTimeout(() => { 
            window.location.href = "/participant";
        }, 3500);
        
    },
    error:function(err){
        errorAlert.show()
        container.animate({
            scrollTop: 20
        });
        setTimeout(()=>{
            errorAlert.hide()
        },5000)
          console.log(err)
    },
  });
})

//delete event
EventDeleteBtn.click((e)=>{
    e.preventDefault()

    const query = "participant/delete"
    const url = "http://localhost:8080/"+query
    const params = {
        id:partlist.val(),
        idEvent:partEvent.val()
        }
    
$.ajax({
    type: "POST",
    url: url,
    data: params,
    success: function(response){
  
	container.animate({
		scrollTop: 20
	});
        deleteAlert.show()
        console.log(response)
        setTimeout(()=>{
            deleteAlert.hide()
        },3000)
        setTimeout(() => { 
            window.location.href = "/participant";
        }, 3500);
    },
    error:function(err){
        errorAlert.show()
        container.animate({
            scrollTop: 20
        });
        setTimeout(()=>{
            errorAlert.hide()
        },5000)
          console.log(err)
    },
  });
})

// event liste



})


