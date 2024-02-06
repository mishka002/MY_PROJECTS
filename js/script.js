// show porfolios
// makes the parallax elements
function parallaxIt() {
    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var $contents = [];
    var $backgrounds = [];

    // for each of content parallax element
    $('[data-type="content"]').each(function(index, e) {
        var $contentObj = $(this);

        $contentObj.__speed = ($contentObj.data('speed') || 1);
        $contentObj.__fgOffset = $contentObj.offset().top;
        $contents.push($contentObj);
    });

    // for each of background parallax element
    $('[data-type="background"]').each(function() {
        var $backgroundObj = $(this);

        $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
        $backgroundObj.__fgOffset = $backgroundObj.offset().top;
        $backgrounds.push($backgroundObj);
    });

    // update positions
    $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        $contents.forEach(function($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

            $contentObj.css('top', yPos);
        })

        $backgrounds.forEach(function($backgroundObj) {
            var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
                backgroundPosition: '100% ' + yPos + 'px'
            });
        });
    });

    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
};

parallaxIt();
// end

// welcome

(function($) {
    var s,
        spanizeLetters = {
            settings: {
                letters: $('.js-spanize'),
            },
            init: function() {
                s = this.settings;
                this.bindEvents();
            },
            bindEvents: function(){
                s.letters.html(function (i, el) {
                    //spanizeLetters.joinChars();
                    var spanizer = $.trim(el).split("");
                    return '<span>' + spanizer.join('</span><span>') + '</span>';
                });
            },
        };
    spanizeLetters.init();
})(jQuery);

// end

$(function () {
    $(".mail, .exit").click(function () {
        $(".email").toggle(1000)
    })
})

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}
// alert("საიტი მუშაობს სატესტო ვერსიად" )
function myFunction1() {
    var element = document.getElementById("f1");
    element.classList.toggle("f1");
}
function myFunction2() {
    var element = document.getElementById("f2");
    element.classList.toggle("f1");
}
function myFunction3() {
    var element = document.getElementById("f3");
    element.classList.toggle("f1");
}

// bands list

function bands_open() {
    var answers = document.getElementById("anwers");
    answers.style.display = "block";
}
function no() {
    var answers_no = document.getElementById("anwers");
    answers_no.style.display = "none";
}
function yes() {
    var list_show = document.getElementById("list_b")
    list_show.style.display = "block"
}
function exit() {
    var answers_also = document.getElementById("anwers")
    var list_none = document.getElementById("list_b")
    list_none.style.display = "none";
    answers_also.style.display = "none"
}
// end
function exitVideo() {
    var video_modal = document.getElementById("video-modal")
    video_modal.style.display = "none"


}
function music_show() {
    var element = document.getElementById("audio-section");
    element.classList.toggle("audio-show");

}

function videoshow() {
    var video = document.getElementById("video-contents");
    video.classList.toggle("videotoggle");
}
// video



// end