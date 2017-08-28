// Make it rain!

$('.hamburger').on('click', function() {
  $('.nav2 ul').fadeIn();
  $('.nav2 a').fadeIn();
  $('.hamburger').hide();
})

$('.close').on('click', function() {
  $('.nav2 ul').hide();
  $('.nav2 a').fadeIn();
  $('.hamburger').fadeIn();
  $('.close').hide();
})

//When the user opens the 'About' page
  //Image fades in
//When the user scrolls down
  //Info text fades in
var path = location.pathname;

console.log(location.pathname);

if(path = "about.html") {
  $('#first').fadeIn(2000);
  $('p').fadeIn(2000);
  $('.venues ul').fadeIn(2000);
  //
  // $(window).on('scroll', function () {
  //   var distanceScrolled = $(window).scrollTop();
  //   console.log('The distance scrolled is: ' + distanceScrolled);
  //
  //   if (distanceScrolled > 200) {
  //     $('p').fadeIn(1000);
  //     $('.venues').fadeIn(1000);
  //   }
  // });

  //On the 'About' page
  //When the user clicks 'next'
    //image slides out and next image slides in
  //When the user clicks 'previous'
    //image slides out and previous image slides in
  //If user is on last image and clicks 'next'
    //load first image
  //If the user is on first image and clicks previous
    //load last image

    var currentImageNumber = 0;
    var numberOfImages = $('img').length - 1;
    console.log("There are " + numberOfImages + "images");
    // When the user clicks the next button (#next)
    $('#next').on('click', function () {
      // if currentImageNumber is less than 3
        // Add one to currentImageNumber
        // Log currentImageNumber to the console
     // else
       // Set currentImageNumber to zero
       // Log currentImageNumber to the console
       if (currentImageNumber < numberOfImages) {
         currentImageNumber += 1;
         //console.log(currentImageNumber);
       } else {
         currentImageNumber = 0;
         //console.log(currentImageNumber);
       }
       $('img').fadeOut(0);
       $('img').eq(currentImageNumber).fadeIn(0);
    });

    // When the user clicks the next button (#next)
    $('#previous').on('click', function () {
      // if currentImageNumber is greater than 0
        // Subtract one from currentImageNumber
        // Log currentImageNumber to the console
      // else
       // Set currentImageNumber to three
       // Log currentImageNumber to the console
       if (currentImageNumber > 0) {
         currentImageNumber -= 1;
         //console.log(currentImageNumber);
       } else {
         currentImageNumber = numberOfImages;
         //console.log(currentImageNumber);
       }
       $('img').fadeOut(0);
       $('img').eq(currentImageNumber).fadeIn(0);
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
