
$(document).ready(function() {
    window.jQuery = window.$ = jQuery = $;

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


//intial hide sections
   containerModDiv.hide()
   containerViewDiv.hide()

//init event liste create
const query = "evenement/liste"
    const url = "http://localhost:8080/"+query
    const params = {

        }
    const eventPartlist = $('#partEvent')
    eventPartlist.empty()
    eventPartlist.append("<option selected></option>")
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            response.forEach((val,index)=>{
                eventPartlist.append("<option value = '"+val.id+"'>"+"'"+val.titre+"' organise par "+val.organisateur+"</option>")
            })
        },
        error:function(err){
            
        }
      });
//init event liste update
const query2 = "evenement/liste"
    const url2 = "http://localhost:8080/"+query
    const params2 = {

        }
    const eventPartlist2 = $('#partModEvent')
    eventPartlist2.empty()
    eventPartlist2.append("<option selected></option>")
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            response.forEach((val,index)=>{
                eventPartlist2.append("<option value = '"+val.id+"'>"+"'"+val.titre+"' organise par "+val.organisateur+"</option>")
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
    const eventlist = $('#partModSelect')
    eventlist.empty()
    eventlist.append("<option selected></option>")
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            response.forEach((val,index)=>{
                eventlist.append("<option value = '"+val.id+"'>"+" '"+val.nom+" "+val.prenom+"' entreprise "+val.entreprise+"</option>")
            })
        },
        error:function(err){
            
        }
      });

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

    const tableBody = $('#evView table tbody');

    const query = "evenement/liste"
    const url = "http://localhost:8080/"+query
    const params = { 
        }
    
$.ajax({
    type: "GET",
    url: url,
    data: params,
    success: function(response){
        const datas = response
        console.log(datas)
        datas.forEach((data,index)=>{
         const tr = "<tr>"+
         "<th scope='row'>"+index+"</th>"+
        "<td>"+data.titre+"</td>"+
        "<td>"+data.date+"</td>"+
        "<td>"+data.duree+"</td>"+
        "<td>"+data.maxpart+"</td>"+
        "<td>"+data.organisateur+"</td>"+
        "<td>"+data.type_event+"</td>"+
        "<td>"+data.description+"</td>"+
        "</tr>"
        tableBody.append(tr)
        })
        
    },
    error:function(err){
       
    },
  });



   
   })

   // create part

   

   const createSubmitBtn = $('#partUpload')
   const successAlert = $('.succesalert')
   const deleteAlert  = $('.deletealert')
   const errorAlert = $('.erroralert')
   const container = $('#container');

successAlert.hide();
errorAlert.hide()
deleteAlert.hide()

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

// selected event
const partlist = $('#partModSelect')
const partNom = $('#partModNom');
const partPrenom = $('#partModPrenom');
const partMail= $('#partModMail');
const partNaiss= $('#partModNaiss');
const partEntr = $('#partModEntr');
const partObs = $('#partModObs');
const partEvent = $('#partModEvent');

partlist.change(()=>{

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
        console.log(data)
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

const EventUpdateBtn = $('#partUpdate')
const EventDeleteBtn = $('#partDelete')
const formUp = $('#evModForm');

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


