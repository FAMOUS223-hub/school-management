document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.getElementById('navlinks');
    if (navLinks) {
        var links = navLinks.querySelectorAll('a');
        links.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    var hamburger = document.getElementById('openBtn');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    var footerDate = document.getElementById('footerDate');
    if (footerDate) {
        var currentYear = new Date().getFullYear();
        footerDate.textContent = currentYear;
    }

    var modalOverlay = document.getElementById('modalOverlay');
    var modalClose = document.getElementById('modalClose');
    var modalTriggers = document.querySelectorAll('.modalTrigger');
    var modalForm = document.getElementById('modalForm');

    if (modalOverlay && modalClose && modalTriggers.length > 0) {
        function openModal() {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
            if (modalForm) {
                modalForm.reset();
            }
        }

        modalTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        });

        modalClose.addEventListener('click', function() {
            closeModal();
        });

        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        if (modalForm) {
            modalForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your enquiry! Our admissions team will contact you within 24 hours.');
                closeModal();
            });
        }
    }
});
