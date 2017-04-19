  const navScrollTo = () => {
    //main navigaton scroll
    let $about = $('.about');
    let $scrollToAbout = $('#about');

    let $gallery = $('.gallery');
    let $scrollToGallery = $('#gallery');

    let $packages = $('.packages');
    let $scrollToPackages = $('#packages');

    let $contact = $('.contact');
    let $scrollToContact = $('#contact');

    //buttons on landing pages
    let $galleryBtn = $('.gallery-btn');
    let $packagesBtn = $('.packages-btn');

    const scroll = (from, to) => {
      from.on( "click", () => {
         $('html, body').animate({
            scrollTop: to.offset().top
        }, 500);
      });
    }

    scroll($about, $scrollToAbout);
    scroll($gallery, $scrollToGallery);
    scroll($packages, $scrollToPackages);
    scroll($contact, $scrollToContact);

    scroll($galleryBtn, $scrollToGallery);
    scroll($packagesBtn, $scrollToPackages);
  }

export default navScrollTo;
