// // // Advertisements
// // // ===============================================================

// var bottomBannerSponsors = [
//     {
//         sponsor: "JSE",
//         href: "http://jacksonsuperiorelectric.com/",
//         src: "/static/assets/img/sponsors/JSE-logo-660px.png"
//     },
//     {
//         sponsor: "BrucatoFis", // All
//         href: "http://www.brucatofis.com/",
//         src: "/static/assets/img/sponsors/brucatonewlogo-660px.png"
//     },
//     {
//         sponsor: "BFCS",
//         href: "https://www.bassforcash.com/",
//         src: "/static/assets/img/sponsors/bfcs logo.png"
//     },
//     {
//         sponsor: "CBC",
//         href: "https://www.cattteamtrail.com/",
//         src: "/static/assets/img/sponsors/CBC-logo-660px.png"
//     },
//     {
//         sponsor: "Collins",
//         href: "http://collinsboating.com/",
//         src: "/static/assets/img/sponsors/collinslogo.png"
//     },
//     {
//         sponsor: "Outhouse",
//         href: "http://www.outhousetackle.com/",
//         src: "/static/assets/img/sponsors/outhouse-tacklelogo.png"
//     },
//     {
//         sponsor: "DeepCreek", // All
//         href: "http://deepcreeklures.com/",
//         src: "/static/assets/img/sponsors/deepcreeklures logo.png"
//     },
//     {
//         sponsor: "CATT",
//         href: "https://www.cattteamtrail.com/",
//         src: "/static/assets/img/sponsors/catt logo.png"
//     },
//     {
//         sponsor: "Academy", // All
//         href: "https://www.academy.com/",
//         src: "/static/assets/img/sponsors/academy logo.png"
//     },
    
//     {
//         sponsor: "Daves", // All
//         href: "https://www.davestournamenttackle.com/",
//         src: "/static/assets/img/sponsors/daves logo.png"
//     },
//     {
//         sponsor: "TrueSouth", // All
//         href: "https://www.truesouthlures.com/",
//         src: "/static/assets/img/sponsors/true south logo.png"
//     },
//     {
//         sponsor: "Siebert", //All
//         href: "http://www.siebertoutdoors.com",
//         src: "/static/assets/img/sponsors/siebert outdoors logo.png"
//     },
//     {
//         sponsor: "Taterhog", //All
//         href: "http://www.taterhoglures.com",
//         src: "/static/assets/img/sponsors/tater hog logo.png"
//     },
//     {
//         sponsor: "Foothills",// All
//         href: "https://www.foothillsmarine.com/",
//         src: "/static/assets/img/sponsors/foothills logo.png"
//     },
//     {
//         sponsor: "Flatlands", // All
//         href: "http://www.flatlandstackle.com",
//         src: "/static/assets/img/sponsors/flatlands logo.png"
//     },
//     {
//         sponsor: "TRC",// All
//         href: "http://www.trccovers.com",
//         src: "/static/assets/img/sponsors/trc logo.png"
//     },
//     {
//         sponsor: "Bobcats",// All
//         href: "http://www.bobcatslakecountry.com/",
//         src: "/static/assets/img/sponsors/bobcat logo.png"
//     },
//     {
//         sponsor: "BBS",// All
//         href: "https://www.bassboatsaver.com/",
//         src: "/static/assets/img/sponsors/bbs logo.png"
//     },
//     {
//         sponsor: "Level",// All
//         href: "https://level-rods.myshopify.com/",
//         src: "/static/assets/img/sponsors/level logo.png"
//     },
//     {
//         sponsor: "AnglersChoice",// All
//         href: "https://www.anglerschoicemarine.com/",
//         src: "/static/assets/img/sponsors/anglers choice logo.png"
//     }
//     ];

// // Clear any ad content in the scroller
// $("#adScrollerBottom").empty();

// // Loop through our ads and append them to the page in format: <li><a><img></a></li>

// bottomBannerSponsors.forEach(function(element) {
//     var li = $("<li>");
//     var a = $("<a target='_blank'>");
//     a.attr("href", element.href);
//     var adImg = $("<img class='ad-scroller-img'>");
//     adImg.attr("src", element.src);
//     $("#adScrollerBottom").append(li);
//     $(li).append(a);
//     $(a).append(adImg);
// });


// // Function code for bottom banner scroller

// $(function(){
//     var scroller = $('#scroller div.innerScrollArea');
//     var scrollerContent = scroller.children('ul');
//     scrollerContent.children().clone().appendTo(scrollerContent);
//     var curX = 0;
//     scrollerContent.children().each(function(){
//         var $this = $(this);
//         $this.css('left', curX);
//         curX += $this.outerWidth(true);
//     });
//     var fullW = curX / 2;
//     var viewportW = scroller.width();

//     scroller.css('overflow-x', 'auto');
// });

// $(function(){
//     var scroller = $('#scroller div.innerScrollArea');
//     var scrollerContent = scroller.children('ul');
//     scrollerContent.children().clone().appendTo(scrollerContent);
//     var curX = 0;
//     scrollerContent.children().each(function(){
//         var $this = $(this);
//         $this.css('left', curX);
//         curX += $this.outerWidth(true);
//     });
//     var fullW = curX / 2;
//     var viewportW = scroller.width();

//     // Scrolling speed management
//     var controller = {curSpeed:0, fullSpeed:1};
//     var $controller = $(controller);
//     var tweenToNewSpeed = function(newSpeed, duration)
//     {
//         if (duration === undefined)
//             duration = 600;
//         $controller.stop(true).animate({curSpeed:newSpeed}, duration);
//     };

//     // Pause on hover
//     scroller.hover(function(){
//         tweenToNewSpeed(0);
//     }, function(){
//         tweenToNewSpeed(controller.fullSpeed);
//     });

//     // Scrolling management; start the automatical scrolling
//     var doScroll = function()
//     {
//         var curX = scroller.scrollLeft();
//         var newX = curX + controller.curSpeed;
//         if (newX > fullW*2 - viewportW)
//             newX -= fullW;
//         scroller.scrollLeft(newX);
//     };
//     setInterval(doScroll, 20);
//     tweenToNewSpeed(controller.fullSpeed);
// });