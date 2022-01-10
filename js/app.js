$(function() {
    
    // Code créant les pixels dans l'écran
    
    let getWidthScreen = $(".app-screen").css('width')
    let nbPixels = 32
    getWidthScreen = parseInt(getWidthScreen)/nbPixels


    for (let x = 0; x < (nbPixels**2); x++) {
        $('#content').append("<div></div>");
        $('#content div:last-child').addClass('pixel').css({'width':getWidthScreen,'height':getWidthScreen});
    }

    



    var stateTool = 0;

    $('#pensil').click(function() {
        stateTool = 0 ;


    })

    $('#eraser').click(function() {
        stateTool = 1 ;
  
    })

    $('#fill').click(function() {
        stateTool = 2 ;
      
    })

    $('#dropper').click(function() {
        stateTool = 3 ;
     
    })

















    // Sélection de la couleur

    var selectColor = $('.is-active').css('background-color');

    $('.color-selection button').click(function() {
        $('.app-tools button').removeClass('is-active');
        $(this).addClass('is-active');
        
        selectColor = $('.is-active').css('background-color');       
    })


    // Code gérant le remplissage de la couleur des pixels avec la couleur précédement séléctionée
  
    $('.pixel').click(function() {
        


        if (stateTool == 0) {
            $(this).css('background-color', selectColor);
        } 
        
        if (stateTool == 1) {
            console.log(stateTool)
            $(this).css('background-color', selectColor);
        }



        
    })


    // Système permettant de gommer lorsque l'utilisateur double click sur un "pixel"

    $('.pixel').dblclick(function() {
        
        $(this).css('background-color', 'white');
    })


    // Système de reset

    $('#reset').click(function() {
        // Applique un arrière plan blanc à tous les "pixels"
        $('#content .pixel').css('background-color','white');
    })


    //Système d'exportation d'image avec la bibliothèque DOM to image

    $('#export').click(function() {
        domtoimage.toJpeg(document.getElementById('content'), { quality: 0.95 })
        .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
        });
    })


    // Code gérant la palette d'outil (pinceau, gomme, etc.)

    $('.brush-tool-element').click(function() {
        $('.brush-tool-element').removeClass('brush-active').addClass('brush-disable');
        $(this).addClass('brush-active').removeClass('brush-disable');

        $('.brush-active + select').removeClass('d-none');
        $('.brush-disable + select').addClass('d-none');

    })


    




    // Code ouvrant une fenêtre pop up lorque l'on appuie sur le bouton "+" et permettant de rajouter une couleur à la palette


    $('.add-plus').click(function() {
        $('.color-choice').removeClass('d-none');
        $('.app-tools').addClass('d-none');
        $('.brush-tools').addClass('d-none');
        $('.colorset-name').addClass('d-none');
    })
    
    // Bouton retour de la fenêtre pop up

    $('.btn-return').click(function() {
        $('.color-choice').addClass('d-none');
        $('.app-tools').removeClass('d-none');
        $('.brush-tools').removeClass('d-none');
        $('.colorset-name').removeClass('d-none');
    })

  
    // Bouton ajouter une couleur de la fenêtre pop up

    var colorForm

    $('.btn-add').click(function() {
        $('.color-selection').append('<button class="btn-color swatch custom"></button>');
        colorForm = $('.color-selector').val()
        $('.color-choice').addClass('d-none');
        $('.app-tools').removeClass('d-none');
        $('.brush-tools').removeClass('d-none');
        $('.colorset-name').removeClass('d-none');
        $('.custom:last-child').css("background-color",colorForm);

    })

    


})