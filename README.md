# townsandcities

Towns and Cities teaches English through music! [www.townsandcitiesapp.com](http://www.townsandcitiesapp.com)

TODO:

Get quiz working - Pete working on quiz

Get lyric videos working - Sizing/position of lyric container and highlighter isn't responsive.

- line 19 of /units/music-player-with-lyrics/index.js currently has an animate issue when scrolling manually across the player: \$('.content').animate({ scrollTop: e + 'px' }, { easing: 'swing', duration: 250 });

The transition works when playing the paplayer lyer from the start. However issues when scrolling manually through player.

Looked at .pause property on the audio player itself, which is triggered when scrolling manually.

Goal -> to turn duration to 0 of { easing: 'swing', duration: 250 } when scrolling manually or vice versa

vice versa -> start duration at 0 then reassing duration to 250 when playing normally.

Thinking about which event were looking at

Next Step
Move mp3 files to online hosting
Authentication
Databases
Payments (stripe, paypal)

Next Next Step
