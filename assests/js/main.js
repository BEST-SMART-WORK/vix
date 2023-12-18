let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
(function() {
    function asyncLoad() {
        var urls = ["https:\/\/static.affiliatly.com\/shopify\/shopify.js?affiliatly_code=AF-1033297\u0026shop=moe-money-shop.myshopify.com", "https:\/\/static.cdn.printful.com\/static\/js\/external\/shopify-product-customizer.js?v=0.17\u0026shop=moe-money-shop.myshopify.com", "https:\/\/instafeed.nfcube.com\/cdn\/9e42fb5d39104113e11dffdfa870ca51.js?shop=moe-money-shop.myshopify.com", "https:\/\/loox.io\/widget\/4kWlQl72Ku\/loox.1588801791762.js?shop=moe-money-shop.myshopify.com", "https:\/\/cdn.shopify.com\/s\/files\/1\/0382\/4185\/files\/snowfall.js?shop=moe-money-shop.myshopify.com"];
        for (var i = 0; i < urls.length; i++) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = urls[i];
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
    };
    if (window.attachEvent) {
        window.attachEvent('onload', asyncLoad);
    } else {
        window.addEventListener('load', asyncLoad, false);
    }
})();
var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4825426,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
