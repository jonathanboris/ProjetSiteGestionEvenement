
$(document).ready(function() {
    window.jQuery = window.$ = jQuery = $;

   const navCreateDiv = $('#navCreate')
   const navModDiv = $('#navMod')
   const navViewDiv = $('#navView')
   const nav1EvntLink= $('#evLink')
   const nav1PartLink= $('#partLink')
   const navActive = $('.nav')
   const nav1Active2 = $('.nav1')

   
   const containerCreateDiv = $('#evCreate')
   const containerModDiv = $('#evMod')
   const containerViewDiv = $('#evView')


//intial hide sections
   containerModDiv.hide()
   containerViewDiv.hide()
//navigation controllers

   navModDiv.click(function(){
    navActive.removeClass('active')
    $(this).addClass('active')
    containerCreateDiv.hide()
    containerViewDiv.hide()
    containerModDiv.show()

    //initialize event list
    const query = "evenement/liste"
    const url = "http://localhost:8080/"+query
    const params = {

        }
    const eventlist = $('#evModliste')
    eventlist.empty()
    eventlist.append("<option selected></option>")
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            response.forEach((val,index)=>{
                eventlist.append("<option value = '"+val.id+"'>"+"Titre: "+val.titre+", Organiseur: "+val.organisateur+"</option>")
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

   // create event

   

   const createSubmitBtn = $('#evUpload')
   const successAlert = $('.succesalert')
   const deleteAlert  = $('.deletealert')
   const errorAlert = $('.erroralert')
   const container = $('#container');

successAlert.hide();
errorAlert.hide()
deleteAlert.hide()

   createSubmitBtn.click((e)=>{
   
    e.preventDefault();

   const createEventTitre = $('#evTitle').val();
   const createEventDate = $('#evDate').val();
   const createEventDuree= $('#evDuree').val();
   const createEventMaxPart= $('#evMaxpart').val();
   const createEventOrga = $('#evOrga').val();
   const createEventTypeEvent = $('#evTypeev').val();
   const createEventDesc = $('#evDesc').val();

    
    console.log(createEventTitre,createEventDuree,createEventMaxPart)
    
    const query = "evenement/create"
    const url = "http://localhost:8080/"+query
    const params = {
        titre:createEventTitre, 
        date:createEventDate  ,
        duree:createEventDuree,
        max_part:createEventMaxPart,
        desc:createEventDesc,
        org:createEventOrga,
        type_event:createEventTypeEvent

        }
    
$.ajax({
    type: "POST",
    url: url,
    data: params,
    success: function(response){
        const form = $('#evCreatForm');
       
	container.animate({
		scrollTop: 20
	});
        successAlert.show()
        console.log(response)
        setTimeout(()=>{
            successAlert.hide()
        },3000)
        setTimeout(() => { 
            window.location.href = "/evenement";
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
const eventlist = $('#evModliste')
const EventTitre = $('#evModTitle');
const EventDate = $('#evModDate');
const EventDuree= $('#evModDuree');
const EventMaxPart= $('#evModMaxpart');
const EventOrga = $('#evModOrga');
const EventTypeEvent = $('#evModTypeev');
const EventDesc = $('#evModDesc');
eventlist.change(()=>{

    const query = "evenement/getId"
    const url = "http://localhost:8080/"+query
    const params = {
        id:eventlist.val(), 
        }
    
$.ajax({
    type: "GET",
    url: url,
    data: params,
    success: function(response){
        const data = response[0]
        console.log(data)
    EventTitre.attr("value",data.titre)
    EventDate.attr("value",data.date)
    EventDuree.attr("value",parseInt(data.duree))
    EventMaxPart.attr("value",parseInt(data.maxpart))
    EventOrga.attr("value",data.organisateur)
    EventTypeEvent.val(data.type_event)
    EventDesc.text(data.description)
        
    },
    error:function(err){
       
    },
  });
   
})

// update event

const EventUpdateBtn = $('#evUpdate')
const EventDeleteBtn = $('#evDelete')
const formUp = $('#evModForm');

EventUpdateBtn.click((e)=>{
    e.preventDefault()

    const query = "evenement/update"
    const url = "http://localhost:8080/"+query
    const params = {
        titre:EventTitre.val(), 
        date:EventDate.val()  ,
        duree:EventDuree.val(),
        max_part:EventMaxPart.val(),
        desc:EventDesc.val(),
        org:EventOrga.val(),
        type_event:EventTypeEvent.val(),
        currentId:eventlist.val()
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
            window.location.href = "/evenement";
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

    const query = "evenement/delete"
    const url = "http://localhost:8080/"+query
    const params = {
        id:eventlist.val(),
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
            window.location.href = "/evenement";
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


