$(document).ready(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        e.stopPropagation();
    });

    $('html').click(function() {
        $('.nav-dropdown').hide();
    })
    $('#nav-toggle').click(function(e) {
        $('nav ul').slideToggle();
        e.preventDefault();
        e.stopPropagation();
    })
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    })
    $(document).click(function(e) {
        if (!$(e.target).closest('nav').length) {
            $('.nav-list').slideUp();
            $('#nav-toggle').removeClass('active');
        }
    })
    $('nav-ul class:S#about').click(function(e) {
        $('.about').toggle('active');
    });
});

document.querySelectorAll('.more-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.service-card');
        const isExpanded = card.classList.contains('expanded');

        document.querySelectorAll('.service-card').forEach(otherCard => {
            otherCard.classList.remove('expanded');
        });
        if (!isExpanded) {
            card.classList.add('expanded');
        }
    });
});

document.addEventListener('click', function(e) {
    const expandedCard = document.querySelector('.service-card.expanded');
    if (expandedCard && !expandedCard.contains(e.target) && !e.target.classList.contains('more-link')) {
        expandedCard.classList.remove('l expanded');
    }
});
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#66c2ac'; // Light yellow on hover
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'white'; // Reset to white when not hovering
    });
});
 const slider = document.querySelector('.slider');
 function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}
document.addEventListener('click', activate, false);
