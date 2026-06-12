'use strict'

async function requestThumbnails() {
    const response = await fetch('php/request.php/photos/')

    if (response.ok) {
        let photos = await response.text() ;
        displayThumbnails(photos) ;
    }
    else {
        displayErrors(response.status) ;
    }
}

function displayThumbnails(photos) {
    document.getElementById('thumbnails').innerHTML = photos ;
}

function displayErrors(errorCode) {
    let error = document.getElementById('errors') ;
    error.style.display = 'block' ;
    error.innerHTML = error.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur : ' + errorCode ;

    setTimeout(hideErrors, 5000) ;
}

function hideErrors() {
    document.getElementById('errors').style.display = 'none' ;
}

requestThumbnails() ;