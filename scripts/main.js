var videos = document.getElementsByClassName('video');
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)  {

        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          
            for (var x = 0; x < videos.length; x ++) {   
                videos[x].src = window.URL.createObjectURL(stream);
                videos[x].play();
          }
        });
}

