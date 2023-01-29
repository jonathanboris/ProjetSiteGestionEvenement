
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

   const createEventTitre = $('#evTitle').val();
   const createEventDate = $('#evDate').val();
   const createEventDuree= $('#evDuree').val();
   const createEventMaxPart= $('#evMaxpart').val();
   const createEventOrga = $('#evOrga').val();
   const createEventTypeEvent = $('#evTypeev').val();
   const createEventDesc = $('#evDesc').val();

   const createSubmitBtn = $('#evUpload');

   const successAlert = $('.succesalert')
   const errorAlert = $('.erroralert')

   var container = $('#container');

successAlert.hide();
errorAlert.hide()

   createSubmitBtn.click((e)=>{
    e.preventDefault();
    const query = "evenement/create"
    const url = "http://localhost:8080/"+query
    const params = {
        titre:createEventTitre, 
        date:createEventDate  ,
        duree:parseFloat(createEventDuree),
        max_part: createEventMaxPart,
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
        form.each(function(){
            this.reset();
        });
	container.animate({
		scrollTop: 20
	});
        successAlert.show()
        console.log(response)
        setTimeout(()=>{
            successAlert.hide()
        },5000)
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

})