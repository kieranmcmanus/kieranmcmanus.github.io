// Make it rain!

//When the user opens the 'About' page
  //Image fades in
//When the user scrolls down
  //Info text fades in
var path = location.pathname;

console.log(location.pathname);

if(path = "about.html") {
  $('img').fadeIn(2000);
  console.log('Image faded in!');

  $(window).on('scroll', function () {
    var distanceScrolled = $(window).scrollTop();
    console.log('The distance scrolled is: ' + distanceScrolled);

    if (distanceScrolled > 200) {
      $('p').fadeIn(1000);
      $('.venues').fadeIn(1000);
    }
  });
}
$('.soloReleases').addClass('selected');

$('.soloReleases').on('click', function() {
  $('.solo').fadeIn(0);
  $('.shattuck').fadeOut(0);
  $('.soloReleases').addClass('selected');
  $('.shattuckReleases').removeClass('selected');
  console.log('Solo releases!');
});

$('.shattuckReleases').on('click', function() {
  $('.solo').fadeOut(0);
  $('.shattuck').fadeIn(0);
  $('.shattuckReleases').addClass('selected');
  $('.soloReleases').removeClass('selected');
  console.log('Shattuck releases!');
});


//On the 'Releases' page
//When the user clicks on 'Solo'
  //Shattuck releases slide out
  //Solo releases slide in
//When the user clicks on 'Shattuck'
  //Solo releases slide out
  //Shattuck releases slide in

//On the 'About' page
//When the user clicks 'next'
  //image slides out and next image slides in
//When the user clicks 'previous'
  //image slides out and previous image slides in
//If user is on last image and clicks 'next'
  //load first image
//If the user is on first image and clicks previous
  //load last image
