
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

   containerModDiv.hide()
   containerViewDiv.hide()
   
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


   

});