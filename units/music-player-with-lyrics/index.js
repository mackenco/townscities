var currentLine = '';

function align() {
   var a = $('.highlighted').height();
   var c = $('.content').height();
   var d =
      $('.highlighted').offset().top -
      $('.highlighted')
         .parent()
         .offset().top;
   var e = d + a / 2 - c / 2;
   //  if we are scrolling than the pause property will point to true, thus we can scroll!
   if (!document.querySelector('audio').paused) {
      $('.content').animate({ scrollTop: e + 'px' }, { easing: 'swing', duration: 250 });
   } else {
      $('.content').animate({ scrollTop: e + 'px' }, { easing: 'swing', duration: 0 });
   }
}

var lyricHeight = $('.lyrics').height();
$(window).on('resize', function() {
   if ($('.lyrics').height() != lyricHeight) {
      //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
      lyricHeight = $('.lyrics').height();
      align();
   }
});

$(document).ready(function() {
   $('audio').on('timeupdate', function(e) {
      // When we reach the last lyric, we can't go back, but before we reach the last lyric we can

      // get current time prop of audio element
      //var time = this.currentTime;
      var time = this.currentTime * 1000;
      var past = song.lyricsPlayer.lyrics.filter(function(item) {
         return item.time < time;
      });

      // for some reason the if statement below was making our highlighted class only stay on the last lyric

      // if (song.lyricsPlayer[past.length] != currentLine) {
      currentLine = song.lyricsPlayer.lyrics[past.length];
      $('.lyrics div').removeClass('highlighted');
      $(`.lyrics div:nth-child(${past.length})`).addClass('highlighted'); //Text might take up more lines, do before realigning
      align();
      // }
   });
});

generate();

function generate() {
   var html = '';
   for (var i = 0; i < song.lyricsPlayer.lyrics.length; i++) {
      console.log('hello');
      // create individual divs for each lyric that will be shown on the screen.
      html += '<div';
      if (i == 0) {
         // add the class highlighted to the first div, which will receive the color of white
         html += ` class="highlighted"`;
         currentLine = 0;
      }
      html += '>';
      html += song.lyricsPlayer.lyrics[i]['line'] == '' ? '&middot;' : song.lyricsPlayer.lyrics[i]['line'];
      html += '</div>';
   }
   // grab the element with the class of lyrics and append the html with the html string that we've created
   $('.lyrics').html(html);
   align();
}
