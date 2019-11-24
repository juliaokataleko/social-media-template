$(document).ready(function() {

    // answers box toggle
    $('.answers').hide();
    $('.search-box').hide();
    
    $('.openAnswers').on('click', function() {
        $(this).parent().parent().children("#answers").toggle(600);
    });

    // search box toggle
    $('#searchButton').on('click', function() {
        $(".search-box").toggle(600);
    });

    // left sidebar toggle
    $('#toggleSidebarOut').hide();
    $('#toggleSidebar').on('click', function() {
        $(".sidebar-profile").toggle(500);
    });
});