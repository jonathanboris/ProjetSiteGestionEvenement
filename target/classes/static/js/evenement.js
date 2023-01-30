
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
    $.ajax({
        type: "GET",
        url: url,
        data: params,
        success: function(response){
            console.log(response)
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
        },5000)
        form.each(function(){
            this.reset();
        });
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

// delete and update event



})