(function() {
    var lazyElements = document.getElementsByClassName('youtube-lazyload');
    var lazyElementsList = Object.values(lazyElements);

    lazyElementsList.forEach(function(el) {

        let play = document.createElement("div");
        play.classList.add('button-play');
        el.appendChild(play);

        var thumbUrl = "https://img.youtube.com/vi/" + el.dataset['videoId'] + "/sddefault.jpg";
        el.style.backgroundImage = "url('" + thumbUrl + "')";
        el.addEventListener( "click", function() {
            var iframe = document.createElement( "iframe" );
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ el.dataset['videoId'] +"?rel=0&showinfo=0&autoplay=1&controls=0" );
            this.innerHTML = "";
            this.appendChild( iframe );
        } );
    });

})();
