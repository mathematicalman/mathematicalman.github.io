function setCurrentHref(){
    $('.navbar a').removeClass('current');
    $('.navbar a[href="' + this.location.hash + '"]').addClass('current');
};

$(document).ready(function () {
    setCurrentHref();
    angular.element('body').scope().translate();
    $(window).on('hashchange', function () {
        setCurrentHref();
        angular.element('body').scope().translate();
    });    
});