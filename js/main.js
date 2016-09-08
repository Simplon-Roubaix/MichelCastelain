
/* ==========================================================================
   js for page contact and form
   ========================================================================== */
;
// Lightbox gallery (karim)

// rediriger le clik allant vers le lien , vers une image
   $("#galleryphoto a").click(function(event);{
      event.preventDefault();
      var href = $(this).attr("href");
         console.log(href);
      //    montrer le Lightbox
      //    charger dans le Lightbox l'image du lien
      //    obtenir l'attribut alt des enfants et mettre un caption

   });

// montrer la Lightbox
   // ajouter l'image à la Lightbox
   // ajouter un caption
// Quand on clik sur la Lightbox
   // cache le Lightbox
