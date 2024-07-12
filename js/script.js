$(document).ready(function() {
    $('nav ul li').hover(
        function() {
            // Mouse enter
            $(this).find('.dropdown').stop(true, true).slideDown('fast');
        }, 
        function() {
            // Mouse leave
            $(this).find('.dropdown').stop(true, true).slideUp('fast');
        }
    );


    const $productContainer = $('.place_container, .blogcont');
    const $nxtBtn = $('.nxt-btn');
    const $preBtn = $('.pre-btn');

    $productContainer.each(function(i, item) {
        const $item = $(item);
        const cardWidth = $item.find('.card, .blogimg').outerWidth(true); // Get the card width including margin

        $nxtBtn.eq(i).on('click', function() {
            $item.scrollLeft($item.scrollLeft() + cardWidth);
        });

        $preBtn.eq(i).on('click', function() {
            $item.scrollLeft($item.scrollLeft() - cardWidth);
        });
    });

    $(window).scroll(function() {
        var aboutSection = $('#about');
        var animatedH1 = $('.about-section h1');

        // Check if about section is in viewport
        var aboutTop = aboutSection.offset().top;
        var aboutBottom = aboutTop + aboutSection.outerHeight();
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        if (aboutTop <= (scrollTop + windowHeight) && aboutBottom >= scrollTop) {
            // Start animation when about section is in viewport
            animatedH1.css('animation', 'ltr 2s forwards');
        } else {
            // Stop animation when about section is not in viewport
            animatedH1.css('animation', 'none');
        }
    });
    
    let slider = document.getElementById('slider');
let current = document.getElementById('current');

slider.addEventListener("input", () => {
    current.innerText = ` ${slider.value}`;
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--value', `${value}%`);
});

slider.addEventListener("mousemove", function(){
    var x=slider.value;
    var color= 'linear-gradient(90deg, rgb(56, 93, 214)'+ x + '%, rgb(214,214,214)'+ x +'%)';
    slider.style.background=color;
});
    
//for the togel


});

function toggleMenu() {
   
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
  }



