

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var activeSection = "";

        $(".navbar-nav .nav-link").each(function () {
            var href = $(this).attr("href");
            var targetPosition = $(href).offset().top - 130;

            if (scrollPosition >= targetPosition) {
                activeSection = href;
            }
        });

        $(".navbar-nav .nav-link").removeClass("active");
        $(activeSection).addClass("active-section");

        $(".navbar-nav .nav-link").each(function () {
            var href = $(this).attr("href");

            if (href === activeSection) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var counters = document.querySelectorAll('.counter');

    counters.forEach(function (counter) {
        var targetValue = parseInt(counter.innerText);
        var currentValue = 0;
        var increment = Math.ceil(targetValue / 100);

        var counterInterval = setInterval(function () {
            currentValue += increment;

            if (currentValue >= targetValue) {
                counter.innerHTML = targetValue + '<span>' + counter.querySelector('span').innerText + '</span>';
                clearInterval(counterInterval);
            } else {
                counter.innerHTML = currentValue + '<span>' + counter.querySelector('span').innerText + '</span>';
            }
        }, 20);
    });
});

const accordionItems = document.querySelectorAll('.accordion_item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('accordion_active');
        const content = item.querySelector('.accordion_content');
        content.classList.toggle('open');
    });
});
