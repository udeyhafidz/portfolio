$(document).ready(function () {
    //Remove Preloader
    $("#preloader").fadeOut("slow");

    // Set Animasi
    init_animate();
});

// Triger Element with class animate__animated
function init_animate() {
    $(".animate__animated").each(function () {
        $(this).on('inview', function (event, isInView) {
             // Mengambil Nilai Dari atibute data animate
            var animate_class = $(this).attr("data-animate");

            // Mendeteksi element ketika tampil
            if (isInView) {
                // Jika tampil/visible
            $(this).addClass(animate_class);
            } else {
                // Jika tidak tampil/not visible
                $(this).removeClass(animate_class)
            }
        });
    });
}

$(document).ready(function () {
    //Remove Preloader
    $("#preloader").fadeOut("slow");

    // Set Animasi
    init_animate();

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    })

    // Navigation Active
    $("a.nav-link").on("click",function() {
        // Menghilangkan Class active pada setiap element
        $("a.nav-link").removeClass("active");
        // Menambahkan class
        $(this).addClass("active");
    });

});

