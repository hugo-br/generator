/*////////////////////////////////
  Adding a new template :
  
    1. Must create a form (copy the custom-html)
	2. Rename it (LP-form-<TYPE>.html)

////////////////////////////////////*/

// MAIN APP
var app = angular.module("myApp", ["ngRoute"]);

// Router for the main app
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/landing", {
            templateUrl: "landing.html"
        })
        .when("/menu", {
            templateUrl: "menu.html"
        })
        .when("/category", {
            templateUrl: "category.html"
        })
        .when("/cta", {
            templateUrl: "cta.html"
        })
});


/* LANDING PAGE CONTROLLER AND FUNCTIONS */
app.controller('LPCtrl', ['$scope', '$compile', '$timeout', function ($scope, $compile, $timeout) {

    // Enter the type of block we can render
    // Value should be the same has the data-type attribute of the container(template html file)
    // For forms
    
   $scope.pages = {
   
       "3" : {
        "name": "Regular Landing Page (815px)",
        "template": "template/landingPage/landingPage.html",   
        "typeBlock": { 
            
            "1": {
                Name: "Single Image"
                , value: "single"
                , template: "template/LP-form.html"
            }
            , "2": {
                Name: "Single image with image map (50%-50%)"
                , value: "single-imageMap"
                , template: "template/LP-form-imageMap.html"
            }
            , "3": {
                Name: "2 Images side by side"
                , value: "multiple"
                , template:"template/LP-form-double.html"
            }
           , "4": {
                  Name: "Video Vimeo"
                , value: "video"
				, template: "template/LP-form-video.html"
            }			
            , "5": {
                Name: "Custom HTML"
                , value: "custom-html"
                , template: "template/LP-form-html.html"
            }
 
            
        }
     },
	 
       "4" : {
        "name": "Outlet and Sale Landing Page (815px)",
        "template": "template/landingPage/landingPage-Sale-Outlet.html",   
        "typeBlock": { 
            
            "1": {
                Name: "Single Image"
                , value: "single"
                , template: "template/LP-form.html"
            }
            , "2": {
                Name: "Single image with image map (50%-50%)"
                , value: "single-imageMap"
                , template: "template/LP-form-imageMap.html"
            }
            , "4": {
                Name: "2 Images side by side"
                , value: "multiple"
                , template:"template/LP-form-double.html"
            }
            , "3": {
                Name: "Custom HTML"
                , value: "custom-html"
                , template: "template/LP-form-html.html"
            }
            , "4": {
                  Name: "Video Vimeo"
                , value: "video"
				, template: "template/LP-form-video.html"
            }
            
            
        }
     },	 
	 
	 
    // HomePage
      "2" : {
        "name": "HomePage (2000px)",
        "template": "template/homePage/homePage.html",   
        "typeBlock": { 
            
            "1": {
                Name: "Single Image"
                , value: "single-home"
                , template: "template/LP-form.html"
            }
            , "2": {
                Name: "Single image with image map (50%-50%)"
                , value: "single-imageMap"
                , template: "template/LP-form-imageMap.html"
            }
            , "4": {
                Name: "2 Images side by side"
                , value: "multiple"
                , template:"template/LP-form-double.html"
            }
            , "3": {
                Name: "Custom HTML"
                , value: "custom-html"
                , template: "template/LP-form-html.html"
            }
            , "5": {
                  Name: "Video Vimeo"
                , value: "video"
				, template: "template/LP-form-video.html"
            }
            
        }
     },
	 
	 
	 // Landing Page (2000px)
      "1" : {
        "name": "Landing Page - (2000px)",
        "template": "template/homePage/widePage.html",   
        "typeBlock": { 
            
            "1": {
                  Name: "Single Image"
                , value: "single-home"
                , template: "template/LP-form.html"
            }
            , "2": {
                  Name: "Single image with image map (50%-50%)"
                , value: "single-imageMap"
                , template: "template/LP-form-imageMap.html"
            }
            , "4": {
                  Name: "2 Images side by side"
                , value: "multiple"
                , template:"template/LP-form-double.html"
            }
            , "3": {
                  Name: "Custom HTML"
                , value: "custom-html"
                , template: "template/LP-form-html.html"
            }
            , "5": {
                  Name: "Video Vimeo"
                , value: "video"
				, template: "template/LP-form-video.html"
            }
            
        }
     },	 
	 
	 

	 // BANNERS TEMPLATE
       "5" : {
           "name": "Category Banners Page",
           "template": "template/category/category.html",
           "typeBlock": { 
                "1": {
                    Name: "Single Image"
                    , value: "category"
                    , template:"template/category/Cat-form-simple.html"
                } 
				, "2": {
                    Name: "Single Image with CTA"
                    , value: "category"
                    , template:"template/category/Cat-form-cta-new.html"
                }
               , "3": {
                    Name: "Promotion Banners"
                    , value: "category"
                    , template:"template/category/Cat-form-promo.html"
                }
			/* , "4": {
                    Name: "Outlet Promotion Banners"
                    , value: "outletBanner"
                    , template:"template/category/Cat-form-promo-outlet.html"
                } */
				, "5": {
                    Name: "Single Image with CTA - OLD"
                    , value: "category"
                    , template:"template/category/Cat-form-cta.html"
                }
				, "4": {
                    Name: "Cropping Promo Banner - NEW"
                    , value: "category"
                    , template:"template/category/Cat-form-promo-crop.html"
                }
          }  
       },
	   
	 	 
 /*   "5" : {
           "name": "Sale - Outlet Page",
           "template": "template/salePage/sale.html",
           "typeBlock": { 
                "1": {
                    Name: "Items Row"
                    , value: "items"
                    , template:"template/salePage/sale-form-items.html"
                }
               , "4": {
                Name: "Custom HTML"
                , value: "custom-html"
                , template: "template/LP-form-html.html"
            }
          }  
       }, */
	   
	   
	   
    
};
    



    // Multiple possible position for the cta with the position in %
    // By Default CTAs are place at center center
    $scope.posCta = {
        "5": {
            Name: "Top Left"
            , top: "-31"
            , left: "-27"
        }
        , "4": {
            Name: "Top Center"
            , top: "-31"
            , left: "0"
        }
        , "6": {
            Name: "Top Right"
            , top: "-31"
            , left: "27"
        }
        , "2": {
            Name: "Center Left"
            , top: "0"
            , left: "-27"
        }
        , "1": {
            Name: "Center Center"
            , top: "0"
            , left: "0"
        }
        , "3": {
            Name: "Center Right"
            , top: "0"
            , left: "27"
        }
        , "8": {
            Name: "Bottom Left"
            , top: "31"
            , left: "-27"
        }
        , "7": {
            Name: "Bottom Center"
            , top: "31"
            , left: "0"
        }
        , "9": {
            Name: "Bottom Right"
            , top: "31"
            , left: "27"
        }
    };

    // Cta buttons for possible styles
    $scope.styleCta = {
        "3": {
            Name: "Regular - Black (Hover: Grey)"
            , value: "btn-lc regular"
        }
        , "1": {
            Name: "Secondary - White (Hover: Grey)"
            , value: "btn-lc secondary"
        }
        , "5": {
            Name: "Wedding - Black (Hover: Grey)"
            , value: "btn-lc wb-bride"
        }
        , "4": {
            Name: "Wedding Groom - Grey (Hover: Grey Blue)"
            , value: "btn-lc wb-groom"
        }
		, "2": {
            Name: "Underline CTA - Black"
            , value: "underlineCTA gothamMed"
        } 
    };
    
	
	
    // Function to add an block into the Landing Page 
    $scope.addImage = function () {
            // Get the Value of the selected options
        
            var type = $scope.typeValue.value;
            var template = $scope.typeValue.template;
            var tmpt = $scope.pageValue.template;
            angular.element("#pageValue").data("template", tmpt);

            if (!template) {
                alert("Not available. Coming soon maybe");
                return;
            }

            // Load the template and append it to the main div
            $.get(template, function (template) {
                var rendered = Mustache.render(template);
                var output = $compile(rendered)($scope);
                $("#landingGenerator").append(output);
                // Add an unique color the the div to diference them
                var color = randomColor();
                $("#landingGenerator .landingImage").last().find(".options .toogle-btn").css({"color":color});
                var y = $("#landingGenerator .landingImage").last().offset();
                $('html, body').animate({scrollTop: y.top}, 800);
                info(); // function for the tooltiper
            });


    };

        
        // Function to Reset the App 
        $scope.resetLP = function () {
            $("#landingGenerator").empty();
        },
        
       // Function to Reset the App on change of page type
        $scope.changeType = function (ev) {
           $("#landingGenerator").empty();
        //    var current = $scope.pageValue.name;
         //   if (current){
        //        console.log(current);
        //    }

        };
        

        // Delete A Row
        $scope.delete = function (event) {
            var $target = angular.element(event.target);
            $target.parents(".landingImage").remove();
        };

        
        // Moove Up A Row
        $scope.up = function (event) {
            var $t = angular.element(event.target);
            var $div = $t.parents('.options').parent();
            var $wrap = $div.parent(); // container
            var idx = angular.element($div).index();
            if( idx === 0 ) { // it is the last element
                return;
            } else {
                var target = $("#landingGenerator .landingImage").eq(idx - 1) ;
                $div.insertBefore(target);
            }
        };

        // Moove Down A Row
        $scope.down = function (event) {
            var $t = angular.element(event.target);
            var $div = $t.parents('.options').parent();
            var $wrap = $div.parent(); // container
            var nb = angular.element("#landingGenerator").childElementCount; // number of direct child (w class landingImage)
            var idx = angular.element($div).index();
            if( (idx + 1) === nb ) { // it is the last element
                return;
            } else {
                var target = $("#landingGenerator .landingImage").eq(idx + 1) ;
                $div.insertAfter(target);
            }
        };
        
        // Dupplicate a content
        $scope.duplicate = function (event) {
            var $t = angular.element(event.target);
            var $div = $t.parents('.options').parent();
            var $wrap = $div.parent(); // container
            var output = $compile($($div).clone())($scope);
            output.appendTo( $wrap );
            var color = randomColor();
            $("#landingGenerator .landingImage").last().find(".options .toogle-btn").css({"color":color});
            info();
        };
    
        // Show or hide all elements of a form
        $scope.toogle = function (event) {
            var $t = angular.element(event.target);
            if ($t.hasClass("glyphicon-chevron-up")) { // if they are hidden, we must show them
                $t.next("small").text("Show");
                var $div = $t.parents('.options');
                angular.element($div).siblings('.row').addClass("hidden");
                $t.removeClass("glyphicon glyphicon-chevron-up actif");
                $t.addClass("glyphicon glyphicon-chevron-down");
            } else { // if they are shown, we must hide them
                $t.next("small").text("Hide");
                var $div = $t.parents('.options');
                angular.element($div).siblings('.row').removeClass("hidden");
                $t.removeClass("glyphicon glyphicon-chevron-down");
                $t.addClass("glyphicon glyphicon-chevron-up actif");
            }

        };

        
        // Function to add CTAs to an image
        $scope.addCTA = function (event) {
            // init
            var nbCTA = 0;
            var add = 0;
            var child = 0;

            // Get the element in a jQuey syntax
            var jQueryElement = angular.element(event.target);

            // number of CTAs wanted by the user
            nbCTA = Number(jQueryElement.next("input[type=number]").val());

            // Number of current CTA, if we modify the count, we don't want to erease them
            child = Number(jQueryElement.next().next(".cta-wrapper")[0].childElementCount);
            add = nbCTA - child;

            // Logic for Adding / Removing / Remove 
            if (!nbCTA || nbCTA == 0 || nbCTA < 0) { // Erase
                jQueryElement.next().next(".cta-wrapper").empty();
                return;

            } else if (add > 0) { // Add more than one
                var txt = "";

                for (var i = 0; i < add; i++) {
                    txt += "<div class='cta row'><cta-eng></cta-eng><cta-fr></cta-fr><cta-link></cta-link><cta-opt></cta-opt></div>";
                }
                var output = $compile(txt)($scope);
                jQueryElement.next().next(".cta-wrapper").append(output);
                return;

            } else if (add < 0) { // Remove the last X
                //   var remove = child - nbCTA;
                for (var j = child - 1; j >= nbCTA; j--) {
                    jQueryElement.next().next(".cta-wrapper").find("div").eq(j).remove();
                }
                return;
            }

        }; 
        
        
        /* For Menu tbas */
        $scope.tab = 1;

    
        $scope.setTab = function(newTab){
            $scope.tab = newTab;
        };

    
        $scope.isSet = function(tabNum){
           return $scope.tab === tabNum;
        };

        $scope.closeBlock = function(event) {
            var $t = angular.element(event.target);
            var $div = $t.parents('.landingImage');
            var $target = $div.find(".options .toogle-btn");
             $timeout(function() {
                angular.element($target).triggerHandler('click');
              });
            backToTop();
        };



}]); // End of the Landing Page Controller 


app.directive('formOptions', function () {
return {
        template:'<span ng-click="delete($event)" class="infotip glyphicon delete glyphicon-remove-circle" data-toggle="tooltip" data-placement="left" title="Delete this section"></span>\
        <span ng-click="duplicate($event)" class="infotip glyphicon duplicate glyphicon glyphicon-file" data-toggle="tooltip" data-placement="left" title="Duplicate"></span>\
        <br><br>\
        <span ng-click="toogle($event)" class="glyphicon glyphicon-chevron-up toogle-btn actif"></span>\
        <small>Hide</small>\
        <button ng-click="up($event)" class="btn btn-default btn-sm up infotip" data-toggle="tooltip" data-placement="top" title="Up"></button>\
        <button ng-click="down($event)" class="btn btn-default btn-sm down infotip" data-toggle="tooltip" data-placement="top" title="Down"></button>'
    , }
});         
        
// Template used to render CTA forms
app.directive('textEng', function () {
    return {
        template: "<input type='text' class='form-control' name='textENG' placeholder='Add English text or code'><br>"
        , restrict: "E"
    , }
});

app.directive('textFr', function () {
    return {
        template: "<input type='text' class='form-control' class='form-control' name='textFR' placeholder='Add French text or code'><br>"
        , restrict: "E"
    , }
});

app.directive('ctaEng', function () {
    return {
        template: "<input type='text' class='form-control' placeholder='English CTA text here' style='text-transform:uppercase;'>"
        , restrict: "E"
    , }
});

app.directive('ctaFr', function () {
    return {
        template: "<input type='text' class='form-control' placeholder='French CTA text here' style='text-transform:uppercase;'><br>"
        , restrict: "E"
    , }
});

app.directive('ctaLink', function () {
    return {
        template: "<input type='text' class='form-control' placeholder='https://www....' onblur='checkLink(this)'><br>"
        , restrict: "E"
    , }
});

// CTA selection template
app.directive('ctaOpt', function () {
    return {
        template: "Position :<br> <select class='form-control col-xs-3'><option ng-repeat='x in posCta' data-left='{{x.left}}' data-top='{{x.top}}'>{{x.Name}}</option></select><br>\
                  Select CSS Class : <br><select class='form-control col-xs-3'><option ng-repeat='x in styleCta' value='{{x.value}}'>{{x.Name}}</option></select>"
        , restrict: "E"
    , }
});

app.directive('ctaForm', function () {
    return {
        template: "<button ng-click='addCTA($event)'>Add</button><input type='number' name='nbCTA' min='0' max='5'><div class='cta-wrapper'></div>"
        , restrict: "E"
    , }
});

app.directive('closeForm', function () {
    return {
        template: "<small ng-click='closeBlock($event)' data-toggle='tooltip' data-placement='bottom' title='Hide this section'>Close</small>"
        , restrict: "E"
    , }
});

// On image change
function imgChange(elem, callbck) {

    var scene = "https://lechateau.scene7.com/is/image/LeChateau/";
    var verif = "lechateau.scene7.com";
    var validImg = "http";
    var sceneEND = "?$jpeg-full$&qlt=94&ver=1.0";
    var val = elem.value;

    if ($(elem).next('input[type=checkbox]').is(':checked') && ((val.indexOf(verif) !== -1) == false) && val != "") {
        elem.value = scene + elem.value + sceneEND;
    }

  // Get Dimension of the Image 
    try {
        img = new Image();
        img.onerror = function () {
             $(elem).siblings('.glyphicon-eye-open').removeClass("active");

        };

        img.onload = function () {
            var natHeight = img.naturalHeight;
            var natWidth = img.naturalWidth;
            elem.setAttribute("data-height", natHeight);
            elem.setAttribute("data-width", natWidth);
            // Show the preview and bind the function
            $(elem).siblings('.glyphicon-eye-open').addClass("active").attr("onclick","seeInWindow(this)");
        };

        img.src = elem.value;
        callbck;
    } catch (err) {
        console.log(err);
    };
    
    
}


// CTA Template for single form
function ctaTemplate(name, link, css, posLeft, posTop, seo) {
    return "<a class='" + css + "' style='position:relative; left:" + posLeft +"px; top:" + posTop + "px; z-index: 2;' href='" + link + "' target='_top' title='" + seo + "'>" + name.toUpperCase() + "</a>\n";
}


// change the name of picture for tablet or mobile
function changeImgto(img, patt, letter){
         var arr = img.split(patt);
         var m = img.match(patt);
         m = String(m);
         var n = m.replace(/d/gi, letter);
         res = arr[0] + n + '&qlt=94&ver=1.0';
         return res;
}


// function to convert gif name for tablet or mobile 
function changeGif(img, letter){
	try{
         var patt = new RegExp(/(_|-)?d(_|-)/gi);
         var arr = img.split(patt);
         var m = img.match(patt);
         m = String(m);
         var n = m.replace(/d/gi, letter);
         res = arr[0] + arr[1].substring(0,0) + n + arr[2].substring(0,0) + arr[3];
         return res;
	} catch(err){
	     console.log(err);
	     return img;
	}
}


// Transform Desktop image into Mobile and Tablet
function getMobileImages(img, type) {
    var delim = 'd?$jpeg-full';
	var patt = new RegExp(/(_|-)?[0-9]?d(_|-)[0-9]{1,2}.?\$(jpeg|png)-full\$/gi); // ex : lechateau-170525_en-1d_01.jpg
	var pattgif = new RegExp(/(lechateau.scene7.com\/is\/content\/LeChateau).+(gif)/g); // gifs, ex : https://lechateau.scene7.com/is/content/LeChateau/landing/shops/dresses/Dress-shop_LP_110817_en_d_04-v3.gif
	
    if (type == 'tab') { // tablet
	  if ( img.indexOf(delim) !== -1 ) { // if letter at end of image
        var arr = img.split(delim);
        var res = arr[0] + 't?$jpeg-full' + arr[1] ;
        return res; 
	  } else if( patt.test(img) ){  // if jpeg or png image
		res = changeImgto(img, patt, 't');  
		return res; 
	  } else if( pattgif.test(img) ){
          res = changeGif(img, 't');
          return res;
      } else { // if something else
		return img;  
	  }
    } else if (type == 'mob') { // mobile
	  if ( img.indexOf(delim) !== -1 ) { // if letter at end of image
        var arr = img.split(delim);
        var res = arr[0] + 'm?$jpeg-full' + arr[1] ;
        return res; 
	  } else if( patt.test(img) ){  // if jpeg or png image
		res = changeImgto(img, patt, 'm'); 
		return res; 		
	  } else if( pattgif.test(img) ){
          res = changeGif(img, 'm');
          return res;
      } else { // if something else
		return img;  
	  }
    } else {
        return img;
    }
}


// GLOBAL VARIABLES
var tempENG = {
          "d" :[]
        , "t" :[]
        , "m" :[]
    };

var tempFR = {
          "d" :[]
        , "t" :[]
        , "m" :[]
    };

var ENG = {
      "desktop": ""
    , "tablet": ""
    , "mobile": ""
};

var FR = {
      "desktop": ""
    , "tablet": ""
    , "mobile": ""
};

var ERROR = "";




////////////////////////////////////
/////////   THE LOGIC    ///////////
////////////////////////////////////


// LOGIC FOR SINGLE IMAGE
function singleImage($that, type, e, error) {
            
    var tpt = 'template/landingPage/' + type + '.html'; // Desktop html template
    var mobTpt = 'template/landingPage/single-mob.html'; // Mobile and Tablette html template
    var ind = e + 1;
    var ctaENG = ""; // holder for the english cta
    var ctaFR = ""; // holder for the french cta
    var nbCTA = $that.find(".cta-wrapper .row.cta").length;
    var imgENG = $that.find("input[name='pathImg']").val();
    var imgFR = $that.find("input[name='pathImgFR']").val();
    var imgHeight = $that.find("input[name='pathImg']").data('height') || '700';
    var imgWidth = $that.find("input[name='pathImg']").data('width') || '815';
    var seoENG = $that.find("input[name='seoImg']").val();
    var seoFR = $that.find("input[name='seoImgFR']").val();    

            // Loop of CTAs     
            if (nbCTA > 0) {
                $that.find(".cta-wrapper .row.cta").each(function (e) {
                    var nameENG = $(this).find('cta-eng input').val();
                    var nameFR = $(this).find('cta-fr input').val();
                    var link = $(this).find('cta-link input').val();
                    var cssClass = $(this).find('cta-opt select').eq(1).val(); // the second select
                    var posLeft = Math.round((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(imgWidth)) / 100) || '0';
                    var posTop = Math.round((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(imgHeight)) / 100) || '0';
                    ctaENG += ctaTemplate(nameENG, link, cssClass, posLeft, posTop, seoENG);
                    ctaFR += ctaTemplate(nameFR, link, cssClass, posLeft, posTop, seoFR);
                });
            }
            
            // Variables to send for rendering templates    
            var en_CA = {
             //   title: $that.find("input[name='titleImg']").val()
                  title: seoENG
                , SEO: seoENG
                , link: $that.find("input[name='linkImg']").val()
                , img: imgENG
                , imgHeight: imgHeight
                , cta: ctaENG
                , imgTab: getMobileImages(imgENG, 'tab')
                , imgMob: getMobileImages(imgENG, 'mob')
                , text: $that.find("input[name='textENG']").val()
                
            }

            var fr_CA = {
              //  title: $that.find("input[name='titleImgFR']").val()
                  title: seoFR
                , SEO: seoFR
                , link: $that.find("input[name='linkImg']").val()
                , img: imgFR
                , imgHeight: imgHeight
                , cta: ctaFR
                , imgTab: getMobileImages(imgFR, 'tab')
                , imgMob: getMobileImages(imgFR, 'mob')
                , text: $that.find("input[name='textFR']").val()
            }


            // Desktop
            $.get(tpt, function (template) {
                var deskEn = Mustache.to_html(template, {
                    i: ind
                    , title: en_CA.title
                    , SEO: en_CA.SEO
                    , link: en_CA.link
                    , img: en_CA.img
                    , imgHeight: en_CA.imgHeight
                    , cta: ctaENG
                    , text: en_CA.text
                });
                var deskFr = Mustache.to_html(template, {
                    i: ind
                    , title: fr_CA.title
                    , SEO: fr_CA.SEO
                    , link: fr_CA.link
                    , img: fr_CA.img
                    , imgHeight: fr_CA.imgHeight
                    , cta: ctaFR
                    , text: fr_CA.text
                });
                
        //        ENG.desktop += deskEn;
        //        FR.desktop += deskFr;
               
                tempENG.d[ind]= deskEn;
                tempFR.d[ind]= deskFr;
            });

            // Tablet and Mobile use the same template only the variable changes
            $.get(mobTpt, function (template) {
                var mobEn = Mustache.to_html(template, {
                    i: ind
                    , title: en_CA.title
                    , SEO: en_CA.SEO
                    , link: en_CA.link
                    , img: en_CA.imgMob
                });
                var mobFr = Mustache.to_html(template, {
                    i: ind
                    , title: fr_CA.title
                    , SEO: fr_CA.SEO
                    , link: fr_CA.link
                    , img: fr_CA.imgMob
                });
                var tabEn = Mustache.to_html(template, {
                    i: ind
                    , title: en_CA.title
                    , SEO: en_CA.SEO
                    , link: en_CA.link
                    , img: en_CA.imgTab
                });
                var tabFr = Mustache.to_html(template, {
                    i: ind
                    , title: fr_CA.title
                    , SEO: fr_CA.SEO
                    , link: fr_CA.link
                    , img: fr_CA.imgTab
                });

          //      ENG.tablet += tabEn;
          //      FR.tablet += tabFr;

          //      ENG.mobile += mobEn;
          //      FR.mobile += mobFr;
                
                
                tempENG.t[ind]= tabEn;
                tempENG.m[ind]= mobEn;
                
                tempFR.t[ind]= tabFr;
                tempFR.m[ind]= mobFr;

            });
}

// LOGIC FOR IMAGE MAP
function singleImageMap($that, type, e){
    
 var tpt = 'template/landingPage/' + type + '.html';  // Desktop html template
            var mobTpt = 'template/landingPage/single-imageMap-mob.html'; // Mobile html template
            var tabTpt = 'template/landingPage/single-imageMap-tab.html'; // Tablette html template
            var ind = e + 1;
            
            /* Image */
            var imgENG = $that.find("input[name='pathImg']").val();
            var imgFR = $that.find("input[name='pathImgFR']").val();
            var imgHeight = $that.find("input[name='pathImg']").data('height') || '700';
            var imgWidth = $that.find("input[name='pathImg']").data('width') || '815';
       
            /* Left side */
            var ctaENGlft = ""; 
            var ctaFRlft = ""; 
            var ctaENGrgt = ""; 
            var ctaFRrgt = "";
            var nbCTAlft = $that.find(".left-img .cta-wrapper .row.cta").length;
            var nbCTArgt = $that.find(".right-img .cta-wrapper .row.cta").length;
                
            /* Left side */
            var en_lft ={
                "seo": $that.find("input[name='seoLeft']").val()
                ,"link": $that.find("input[name='linkImgLeft']").val()
                , "text": $that.find(".left-img text-eng input[name='textENG']").val()
                
            };    
           var fr_lft ={
                "seo": $that.find("input[name='seoLeftFR']").val()
                ,"link": $that.find("input[name='linkImgLeft']").val()
               , "text": $that.find(".left-img text-fr input[name='textFR']").val()
                
            };
                
            /* Right Side */
            var fr_rgt = {    
                "seo": $that.find("input[name='seoRightFR']").val()
                ,"link": $that.find("input[name='linkImgRight']").val()
                , "text": $that.find(".right-img text-fr input[name='textFR']").val()
            
            };                
            var en_rgt = {
                "seo": $that.find("input[name='seoRight']").val()
                ,"link": $that.find("input[name='linkImgRight']").val()
                , "text": $that.find(".right-img text-eng input[name='textENG']").val()
            };   
    
            
             // Loop of CTAs Left Side     
            if (nbCTAlft > 0) {
                $that.find(".left-img .cta-wrapper .row.cta").each(function (e) {
                    var nameENG = $(this).find('cta-eng input').val();
                    var nameFR = $(this).find('cta-fr input').val();
                    var link = $(this).find('cta-link input').val();
                    var cssClass = $(this).find('cta-opt select').eq(1).val(); // the second select
                    var posLeft = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(imgWidth)) /2) / 100) || '0';
                    var posTop = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(imgHeight)) / 2) / 100) || '0';
                    ctaENGlft += ctaTemplate(nameENG, link, cssClass, posLeft, posTop, en_lft.seo);
                    ctaFRlft += ctaTemplate(nameFR, link, cssClass, posLeft, posTop, fr_lft.seo);
                });
            }
                
            // Loop of CTAs Right Side     
            if (nbCTArgt > 0) {
                $that.find(".right-img .cta-wrapper .row.cta").each(function (e) {
                    var nameENG = $(this).find('cta-eng input').val();
                    var nameFR = $(this).find('cta-fr input').val();
                    var link = $(this).find('cta-link input').val();
                    var cssClass = $(this).find('cta-opt select').eq(1).val(); // the second select
                    var posLeft = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(imgWidth)) / 2) / 100) || '0';
                    var posTop = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(imgHeight)) / 2) / 100) || '0';
                    ctaENGrgt += ctaTemplate(nameENG, link, cssClass, posLeft, posTop, en_rgt.seo);
                    ctaFRrgt += ctaTemplate(nameFR, link, cssClass, posLeft, posTop, fr_rgt.seo);
                });
            }
            
            // Desktop
            $.get(tpt, function (template) {
                var deskEn = Mustache.to_html(template, {
                    i: ind
                    , img: imgENG
                    , imgHeight: imgHeight
                    , seoLEFT: en_lft.seo
                    , seoRIGHT: en_rgt.seo
                    , linkLEFT : en_lft.link
                    , linkRIGHT: en_rgt.link
                    , textLEFT: en_lft.text
                    , textRIGHT: en_rgt.text
                    , ctaLEFT: ctaENGlft
                    , ctaRIGHT: ctaENGrgt
                });
                
                var deskFr = Mustache.to_html(template, {
                    i: ind
                    , img: imgFR
                    , imgHeight: imgHeight
                    , seoLEFT:fr_lft.seo
                    , seoRIGHT:fr_rgt.seo
                    , linkLEFT : fr_lft.link
                    , linkRIGHT: fr_rgt.link
                    , textLEFT: fr_lft.text
                    , textRIGHT: fr_rgt.text
                    , ctaLEFT: ctaFRlft
                    , ctaRIGHT: ctaFRrgt      
                });
                
          //      ENG.desktop += deskEn;
          //      FR.desktop += deskFr;
                
                tempENG.d[ind] = deskEn;
                tempFR.d[ind] = deskFr;
            });
                
            
            // Tablet
            $.get(tabTpt, function (template) {
                var tabEn = Mustache.to_html(template, {
                    i: ind
                    , seoLEFT: en_lft.seo
                    , seoRIGHT: en_rgt.seo
                    , linkLEFT: en_lft.link
                    , linkRIGHT: en_rgt.link
                    , img: getMobileImages(imgENG, 'tab')
                    , imgHeight: imgHeight
                });
                var tabFr = Mustache.to_html(template, {
                    i: ind
                    , seoLEFT: fr_lft.seo
                    , seoRIGHT: fr_rgt.seo
                    , linkLEFT: fr_lft.link
                    , linkRIGHT: fr_rgt.link
                    , img: getMobileImages(imgFR, 'tab')
                    , imgHeight: imgHeight
                });

          //      ENG.tablet += tabEn;
          //      FR.tablet += tabFr;
                
                tempENG.t[ind] = tabEn;
                tempFR.t[ind] = tabFr;
            });
                
				
				
       /* 2 images side by side on Mobile LOGIC */  
		/*
             // Mobile
            $.get(mobTpt, function (template) {
                
                // LEFT image 
                var mobEnL = Mustache.to_html(template, {
                    i: ind+"-A"
                    , title: en_lft.seo
                    , SEO: en_lft.seo
                    , link: en_lft.link
                    , img: getMobileImages(imgENG, 'mob')
                });
                var mobFrL = Mustache.to_html(template, {
                    i: ind+"-A"
                    , title: fr_lft.seo
                    , SEO: fr_lft.seo
                    , link: fr_lft.link
                    , img: getMobileImages(imgFR, 'mob')
                });
                
                // Right Image 
                var mobEnR = Mustache.to_html(template, {
                    i: ind+"-B"
                    , title: en_rgt.seo
                    , SEO: en_rgt.seo
                    , link: en_rgt.link
                    , img: getMobileImages(imgENG, 'mob')
                });
                var mobFrR = Mustache.to_html(template, {
                    i: ind+"-B"
                    , title: fr_rgt.seo
                    , SEO: fr_rgt.seo
                    , link: fr_rgt.link
                    , img: getMobileImages(imgFR, 'mob')
                });

		*/		
				
				

         //       ENG.mobile += mobEnL;
         //       ENG.mobile += mobEnR;
         //       FR.mobile += mobFrL;
        //        FR.mobile += mobFrR;
		
		
		  $.get(mobTpt, function (template) {
                
                var MobEn = Mustache.to_html(template, {
                    i: ind
                    , seoLEFT: en_lft.seo
                    , seoRIGHT: en_rgt.seo
                    , linkLEFT: en_lft.link
                    , linkRIGHT: en_rgt.link
                    , img: getMobileImages(imgENG, 'mob')
                    , imgHeight: imgHeight
                });
				
                var MobFr = Mustache.to_html(template, {
                    i: ind
                    , seoLEFT: fr_lft.seo
                    , seoRIGHT: fr_rgt.seo
                    , linkLEFT: fr_lft.link
                    , linkRIGHT: fr_rgt.link
                    , img: getMobileImages(imgFR, 'mob')
                    , imgHeight: imgHeight
                });

				
				
               tempENG.m[ind] = MobEn;
               tempFR.m[ind] =  MobFr;                
                
                
              //  ERROR += "Please check your <strong>mobile</strong> image for <strong>ROW #"+ind+"</strong>, it might be wrong. <br>";    
			  
			  
			  
            });
}

// LOGIC FOR CUSTOM HTML BLOCK
function customHTML($that, type, e) {
    
    var tpt = 'template/landingPage/' + type + '.html'; // Desktop html template
    var ind = e + 1;
    var no = "\n<!-- ROW #" + ind + " START  -->\n<!-- ROW #" + ind + " END -->\n";
            
     $.get(tpt, function (template) {
             
       var eng = Mustache.to_html(template, {
            i:  ind
            , code: $that.find("textarea[name='codeENG']").val()
       });
               
       var fr = Mustache.to_html(template, {
            i:  ind
            , code: $that.find("textarea[name='codeFR']").val()
       });
           
         if ($that.find("input[name='checkDesktop']").is(':checked')) { 
                tempENG.d[ind] = eng;
                tempFR.d[ind] = fr;    
         } else {
             tempENG.d[ind] = no;
             tempFR.d[ind] =  no; 
         } 

         if($that.find("input[name='checkTab']").is(':checked')) {
             tempENG.t[ind] = eng;
             tempFR.t[ind] = fr;
             
         } else {
             tempENG.t[ind] = no;
             tempFR.t[ind] = no;
         }
         
         if($that.find("input[name='checkMob']").is(':checked')){
             tempENG.m[ind] = eng;
             tempFR.m[ind] = fr;
         } else {
             tempENG.m[ind] = no;
             tempFR.m[ind] = no;            
         }
      
       });   
    
}


// LOGIC FOR TWO IMAGES SIDE BY SIDE
function twoImages($that, type, e) {
    
            var tpt = 'template/landingPage/' + type + '.html';  // Desktop html template
            var mobTpt = 'template/landingPage/single-mob.html'; // Mobile html template
            var tabTpt = 'template/landingPage/single-imageMap-tab.html'; // Tablette html template
            var ind = e + 1;
            
            // English
            var enCA = {
                  imgLeft : $that.find("input[name='pathImgLeftENG']").val()
                , HeightLeft : $that.find("input[name='pathImgLeftENG']").data('height') || '700'
                , seoLeft : $that.find("input[name='seoLeftENG']").val()
                , linkLeft : $that.find("input[name='linkImgLeft']").val()
                , imgRight :  $that.find("input[name='pathImgRightENG']").val()
                , HeightRight : $that.find("input[name='pathImgRightENG']").data('height') || '700'
                , seoRight : $that.find("input[name='seoRightENG']").val()
                , linkRight : $that.find("input[name='linkImgRight']").val()
                , imgWidthLeft : $that.find("input[name='pathImgLeftENG']").data('width') || '815'
                , imgWidthRight : $that.find("input[name='pathImgRightENG']").data('width') || '815'
            }
            
            
            // French
            var frCA = {
                   imgLeft : $that.find("input[name='pathImgLeftFR']").val()
                 , HeightLeft : $that.find("input[name='pathImgLeftFR']").data('height') || '700'
                 , seoLeft : $that.find("input[name='seoLeftFR']").val()
                 , linkLeft : $that.find("input[name='linkImgLeft']").val()
                 , imgRight :  $that.find("input[name='pathImgRightFR']").val()
                 , HeightRight : $that.find("input[name='pathImgRightFR']").data('height') || '700'
                 , seoRight : $that.find("input[name='seoRightFR']").val()
                 , linkRight : $that.find("input[name='linkImgRight']").val()
                 , imgWidthLeft : $that.find("input[name='pathImgLeftFR']").data('width') || '815'
                 , imgWidthRight : $that.find("input[name='pathImgRightFR']").data('width') || '815'
            }
            
       
            // CTAs 
            var ctaENGlft = ""; 
            var ctaFRlft = ""; 
            var ctaENGrgt = ""; 
            var ctaFRrgt = "";
            var nbCTAlft = $that.find(".left-img .cta-wrapper .row.cta").length;
            var nbCTArgt = $that.find(".right-img .cta-wrapper .row.cta").length;
            
           // Loop of CTAs Left Side     
            if (nbCTAlft > 0) {
                $that.find(".left-img .cta-wrapper .row.cta").each(function (e) {
                    var nameENG = $(this).find('cta-eng input').val();
                    var nameFR = $(this).find('cta-fr input').val();
                    var link = $(this).find('cta-link input').val();
                    var cssClass = $(this).find('cta-opt select').eq(1).val(); // the second select
                    
                    // English
                    var posLeft = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(enCA.imgWidthLeft)) /2) / 100) || '0';
                    var posTop = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(enCA.HeightLeft)) / 2) / 100) || '0';
                    
                    // French
                    var posLeftFR = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(frCA.imgWidthLeft)) /2) / 100) || '0';
                    var posTopFR = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(frCA.HeightLeft)) / 2) / 100) || '0';
                    
                    ctaENGlft += ctaTemplate(nameENG, link, cssClass, posLeft, posTop, enCA.seoLeft);
                    ctaFRlft += ctaTemplate(nameFR, link, cssClass, posLeftFR, posTopFR, frCA.seoLeft);
                });
            };
                
            // Loop of CTAs Right Side     
            if (nbCTArgt > 0) {
                $that.find(".right-img .cta-wrapper .row.cta").each(function (e) {
                    var nameENG = $(this).find('cta-eng input').val();
                    var nameFR = $(this).find('cta-fr input').val();
                    var link = $(this).find('cta-link input').val();
                    var cssClass = $(this).find('cta-opt select').eq(1).val(); // the second select
                    
                     // English
                    var posLeft = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(enCA.imgWidthRight)) /2) / 100) || '0';
                    var posTop = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(enCA.HeightRight)) / 2) / 100) || '0';
                    
                    // French
                    var posLeftFR = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("left")) * Number(frCA.imgWidthRight)) /2) / 100) || '0';
                    var posTopFR = Math.round(((Number($(this).find('cta-opt select option:selected').eq(0).data("top")) * Number(frCA.HeightRight)) / 2) / 100) || '0';
                    
                    ctaENGrgt += ctaTemplate(nameENG, link, cssClass, posLeft, posTop, enCA.seoRight);
                    ctaFRrgt += ctaTemplate(nameFR, link, cssClass, posLeftFR, posTopFR, frCA.seoRight);
                });
            };
            
            // Desktop
            $.get(tpt, function (template) {
                var deskEn = Mustache.to_html(template, {
                    i: ind
                    , imgLeft : enCA.imgLeft
                    , HeightLeft : enCA.HeightLeft
                    , seoLeft : enCA.seoLeft
                    , linkLeft : enCA.linkLeft
                    , ctaLeft :  ctaENGlft
                    , imgRight :  enCA.imgRight
                    , HeightRight : enCA.HeightRight
                    , seoRight : enCA.seoRight
                    , linkRight : enCA.linkRight
                    , ctaRight : ctaENGrgt
                });
                
                var deskFr = Mustache.to_html(template, {
                    i: ind
                    , imgLeft : frCA.imgLeft
                    , HeightLeft : frCA.HeightLeft
                    , seoLeft : frCA.seoLeft
                    , linkLeft : frCA.linkLeft
                    , ctaLeft :  ctaFRlft
                    , imgRight :  frCA.imgRight
                    , HeightRight : frCA.HeightRight
                    , seoRight : frCA.seoRight
                    , linkRight : frCA.linkRight
                    , ctaRight : ctaFRrgt
                });
                
          //      ENG.desktop += deskEn;
          //      FR.desktop += deskFr;
                
                tempENG.d[ind] = deskEn;
                tempFR.d[ind] = deskFr;
            });
                
            
            // Tablet
            $.get(tabTpt, function (template) {
                var tabEn = Mustache.to_html(template, {
                    i: ind
                    , seoLEFT: enCA.seoLeft
                    , seoRIGHT: enCA.seoRight
                    , linkLEFT:  enCA.linkLeft
                    , linkRIGHT: enCA.linkRight
                    , img: getMobileImages(enCA.imgLeft, 'tab')
                    , imgHeight: enCA.HeightLeft || '800'
                });
                var tabFr = Mustache.to_html(template, {
                    i: ind
                    , seoLEFT: frCA.seoLeft
                    , seoRIGHT: frCA.seoRight
                    , linkLEFT:  frCA.linkLeft
                    , linkRIGHT: frCA.linkRight
                    , img: getMobileImages(frCA.imgLeft, 'tab')
                    , imgHeight: frCA.HeightLeft || '800'
                });

          //      ENG.tablet += tabEn;
          //      FR.tablet += tabFr;
                
                tempENG.t[ind] = tabEn;
                tempFR.t[ind] = tabFr;
                
            });
                
                
             // Mobile
            $.get(mobTpt, function (template) {
                
                // LEFT image
                var mobEnL = Mustache.to_html(template, {
                    i: ind+"-A"
                    , title: enCA.seoLeft
                    , SEO: enCA.seoLeft
                    , link: enCA.linkLeft
                    , img: getMobileImages(enCA.imgLeft, 'mob')
                });
                var mobFrL = Mustache.to_html(template, {
                    i: ind+"-A"
                    , title: frCA.seoLeft
                    , SEO: frCA.seoLeft
                    , link: frCA.linkLeft
                    , img: getMobileImages(frCA.imgLeft, 'mob')
                });
                
               // Right Image
                var mobEnR = Mustache.to_html(template, {
                    i: ind+"-B"
                    , title: enCA.seoRight
                    , SEO: enCA.seoRight
                    , link: enCA.linkRight
                    , img: getMobileImages(enCA.imgRight, 'mob')
                });
                
                var mobFrR = Mustache.to_html(template, {
                    i: ind+"-B"
                    , title: frCA.seoRight
                    , SEO: frCA.seoRight
                    , link: frCA.linkRight
                    , img: getMobileImages(frCA.imgRight, 'mob')
                });


         //       ENG.mobile += mobEnL;
         //       ENG.mobile += mobEnR;
         //       FR.mobile += mobFrL;
        //        FR.mobile += mobFrR;
                
               tempENG.m[ind] = mobEnL + mobEnR;
               tempFR.m[ind] =  mobFrL + mobFrR;                
                   
            });
}


// LOGIC FOR VIDEO BLOCK
function video($that, type, e, tmp) {
    
//	$that  == the templating form you're in

    var tpt = 'template/landingPage/video.html'; // Desktop html template
    var tabTpt = 'template/landingPage/video-mob.html'; // Tablette html template		
    var ind = e + 1;
	
	
	// values 
	var videoENG = $that.find("input[name='vimeoENG']").val();
	var videoFR = $that.find("input[name='vimeoFR']").val();
	var vidWdith = $that.find("input[name='widthVideo']").val() + "px";
	if (tmp.indexOf('landingPage.html') == -1){
		var blockWidth = '2000px';
	} else {
		var blockWidth = '815px';
	}
    
	console.log(vidWdith);
	if(!vidWdith || vidWdith == 'px') { vidWdith = '100%';}
	var commands = ['Play', 'Jouez', 'Stop', 'Arrêtez', 'Sound', 'Son', 'Mute', 'Muet'];
            
           // Desktop
             $.get(tpt, function (template) {
                var deskEn = Mustache.to_html(template, {
                      i: ind 
                    , video: videoENG,
					  width: vidWdith,
					  play: commands[0],
					  stop: commands[2],
					  sound: commands[4],
					  mute: commands[6],
					  blockWidth: blockWidth
                });
                
                var deskFr = Mustache.to_html(template, {
                      i: ind 
                    , video: videoFR,
					  width: vidWdith,
					  play: commands[1],
					  stop: commands[3],
					  sound: commands[5],
					  mute: commands[7],
					  blockWidth: blockWidth
                });
                
                tempENG.d[ind] = deskEn;
                tempFR.d[ind] = deskFr;
            });
                
            
            // Tablet
            $.get(tabTpt, function (template) {
                
				var tabEn = Mustache.to_html(template, {
                      i: ind 
                    , video: videoENG
                });
                var tabFr = Mustache.to_html(template, {
                      i: ind 
                    , video: videoFR
                });

            
            // tablet			
                tempENG.t[ind] = tabEn;
                tempFR.t[ind] = tabFr;
			
			// mobile
                tempENG.m[ind] = tabEn;
                tempFR.m[ind] = tabFr;               
            });
    
}


// LOGIC FOR CATEGORY BLOCK
function category($that, type, e) {
    var ind = e + 1;
    var engl = {};
    var fre = {};
    var template = 'template/category/' + type + '.html';
    //  var tpt = '/template/landingPage/' + type + '.html';  // Desktop html template
    // var template = '/template/category/' + angular.element(event.target).data('tplt') + '.html';
 
     $that.find("input").each(function (ev) {

        var value = $(this).val();
        var key = $(this).attr('name');
        var lang = $(this).data('lang');

           if ( lang == 'eng') {
                engl[key] = value;
            } else if ( lang == 'fr') {
                fre[key] = value;
            } else if (key == 'posLeft') {
                var left = Math.round((value - 16.2 ) * 3.08);
                ENG.left = left;
            } else if (key == 'posTop') {
                var h = Number($that.find("input[name='img'][data-lang='eng']").data('height')) || 400;
                var h2 = h / 2  ;
                var r = (((( 50 - value  ) * 2) / 100 ));
                var top  = Math.round((r * h2)+ 15);
                ENG.top = top;
            } else {
               engl[key] = value;
               fre[key] = value;
            }
        }); // End loop
    
       // background logic
       if( $that.find("input[name='useBG']").is(':checked') ) {
              fre.color = "background-image: url(" + fre.bgImg + "); background-reapeat:no-repeat;";
              engl.color = "background-image: url(" + engl.bgImg +"); background-reapeat:no-repeat;";
        } else {
             fre.color = "background-color: " + fre.color + ";";
             engl.color = "background-color: " + engl.color + ";";
        }
    
    
       $.get(template, function (template) {
             var outputENG = Mustache.to_html(template, {
                     image: engl.img || $that.find("input[name='img']").attr("lang","eng").val()
                    , seo: engl.seo || ""
                    , text: engl.text || "&#160;"
                    , height : $that.find("input[name='img'][data-lang='eng']").data('height') || 400
                    , link : engl.link || ""
                    , cta : engl.cta || ""
                    , terms: engl.terms || ""
                    , termsSEO : "Read the terms for this promotion"
                    , bgColor : engl.color || ""
                    , style : " margin-top:0px; left:" + ENG.left + "%; " + "top:" +  ENG.top + "px;" || ""
                    , page : true
         });
        
           var outputFR = Mustache.to_html(template, {
              image: fre.img || ""
               , seo: fre.seo || ""
               , text: fre.text || "&#160;"
               , height : $that.find("input[name='img'][data-lang='fr']").data('height') || 400
               , link : engl.link || ""
               , cta : fre.cta || ""
               , terms: fre.terms || ""
               , termsSEO : "Lire les conditions de cette promotion"
               , bgColor : fre.color || ""
               , style : " margin-top:0px; left:" + ENG.left + "%; " + "top:" +  ENG.top + "px;" || ""
               , page : true
         });
                
     var resENG = decodeHtml(outputENG);
     var reFR = decodeHtml(outputFR);  

     tempENG.d[ind] = outputENG + "\n\n<br><br>\n\n";
     tempFR.d[ind] = outputFR + "\n\n<br><br>\n\n";
           
     tempENG.t[ind] = "";
     tempFR.t[ind] = "";
     tempENG.m[ind] = "";
     tempFR.m[ind] = "";    
        
  });  
}


// LOGIC FOR SALE ITEMS BLOCK
function itemsSale($that, type, e) {
    var ind = e + 1;     
    var template = 'template/salePage/' + type + '.html';
    $.get(template, function (template) {
          var outputENG = Mustache.to_html(template, {
                    i : ind
                    ,  heightLeft : $that.find("input[name='pathImgLeftENG']").data('height') || 600
                    , imageLeft : $that.find("input[name='pathImgLeftENG']").val() || ""
                    , seoLeft : $that.find("input[name='seoLeftENG']").val() || ""
                    , linkLeft : $that.find("input[name='linkImgLeft']").val() || ""
                    , ctaLeft : $that.find("input[name='ctaLeftENG']").val() || ""
                    , heightRight : $that.find("input[name='pathImgRightENG']").data('height') || 600
                    , imageRight : $that.find("input[name='pathImgRightENG']").val() || ""
                    , seoRight : $that.find("input[name='seoRightENG']").val() || ""
                    , linkRight : $that.find("input[name='linkImgRight']").val() || ""
                    , ctaRight : $that.find("input[name='ctaRightENG']").val() || ""
         });
        
           var outputFR = Mustache.to_html(template, {
                    i : ind
                    , heightLeft : $that.find("input[name='pathImgLeftFR']").data('height') || 600
                    , imageLeft : $that.find("input[name='pathImgLeftFR']").val() || ""
                    , seoLeft : $that.find("input[name='seoLeftFR']").val() || ""
                    , linkLeft : $that.find("input[name='linkImgLeft']").val() || ""
                    , ctaLeft : $that.find("input[name='ctaLeftFR']").val() || ""
                    , heightRight : $that.find("input[name='pathImgRightFR']").data('height') || 600
                    , imageRight : $that.find("input[name='pathImgRightFR']").val() || ""
                    , seoRight : $that.find("input[name='seoRightFR']").val() || ""
                    , linkRight : $that.find("input[name='linkImgRight']").val() || ""
                    , ctaRight : $that.find("input[name='ctaRightFR']").val() || ""            
         }); 
        
        
             tempENG.d[ind] = outputENG;
             tempFR.d[ind] = outputFR;
             
             tempENG.t[ind] = "";
             tempFR.t[ind] = "";
             tempENG.m[ind] = "";
             tempFR.m[ind] = "";        
    });
}


// transform for homepage
function toHomepage(t, lang) {
    var txt = document.createElement("textarea");
    var res = t;
    txt.innerHTML = t;
    var str = txt.value.replace(/max-width:815px;/g, 'max-width:2000px;').replace(/div class="cb-text" style="text-align:center;"/g,'div class="cb-text" style="text-align:left;"');
    // French fixes
    if (lang == 'fr') {
       str = str.replace(/window.ParsleyValidator.setLocale\('en'\)/g, "window.ParsleyValidator.setLocale\('fr'\)").replace(/window.ParsleyValidator.locale == 'fr'/g, "window.ParsleyValidator.locale == 'en'"); 
    }
    return str;
}


////////////////////////////////////
///////   THE CONTROLLER  //////////
////////////////////////////////////

function generateLP() {
	
	$("#get-code").disable(true); // disabled get code button
	
   //   Reset GLOBAL VARIABLES
    ERROR ="";
    
     ENG = {
        "desktop": ""
        , "tablet": ""
        , "mobile": ""
    };
    
     FR = {
        "desktop": ""
        , "tablet": ""
        , "mobile": ""
    };
    
    // Tempory stocking arrays
    tempENG = {
          "d" :[]
        , "t" :[]
        , "m" :[]
    };
    
    // Tempory stocking arrays
    tempFR = {
          "d" :[]
        , "t" :[]
        , "m" :[]
    };

    $("#LPcode .english").val('').text('');
    $("#LPcode .french").val('').text('');
    // Template is the path on the template scope.pages
    var tmp = $("#pageValue").data("template") || 'template/landingPage/landingPage.html'; // set the right template to use
	var pageLenght = Number($(".landingImage").length) + 1;
	var isThereAVideo = false; // if video variable
	
    // LOOP to pick all values of the inputs
    $(".landingImage").each(function (e) {
       
        // type of the div. *** IMPORTANT. Need to be unique. data-type on the html first div with class="container landingImage"
       var type = $(this).data("type"); 
       var $that = $(this);

	   
	   // what it does : select the function for each block template
        switch (type) {
            
            // Regular Landing Page logic       
            case 'single':   
                singleImage($that, type, e);
            break;

            case 'single-imageMap':
                singleImageMap($that, type, e);
            break;

            case 'multiple':
               twoImages($that, type, e);
            break;

            case 'custom-html':
                customHTML($that, type, e);
            break;
			
            case 'video':
                video($that, type, e, tmp);
				isThereAVideo = true;
            break;			
            
            // Category Baners logic      
            case 'simpleImage':
            case 'imageCTA':
            case 'catPromo':
			case 'imageCTANew':
			case 'cropPromoBanners':
                category($that, type, e);
            break;
                
      //      case 'outletPromo':
      //          alert("hi");
      //      break; 
            
            // Sale Page logic    
            case 'itemsSale':
                itemsSale($that, type, e);
            break;        
                
            default:
                alert("Something went wrong...");
        }

    }); // END OF THE LOOP

	
	var c = 0;
	var t;
	var timer_is_on = 0;
	
	
	function stopChecking() {
      clearTimeout(t);
	  timer_is_on = 0;
	}
	
	function startCount() {
     if (!timer_is_on) {
        timer_is_on = 1;
        checkPage();
	 }
	}


    function getPage() {
		
		
		var l = tempENG.d.length;
		
		
        for ( var j = 1; j < l; j++ ) {
            ENG.desktop += tempENG.d[j];
            ENG.tablet += tempENG.t[j];
            ENG.mobile += tempENG.m[j];
            
            FR.desktop += tempFR.d[j];
            FR.tablet += tempFR.t[j];
            FR.mobile += tempFR.m[j];
        };
        
        
        $.get(tmp, function (template) {
            var res = Mustache.render(template, {
                Desktop: ENG.desktop
                , Tablet: ENG.tablet
                , Mobile: ENG.mobile
				, english: true
				, video: isThereAVideo
            });
            var resFR = Mustache.render(template, {
                Desktop: FR.desktop
                , Tablet: FR.tablet
                , Mobile: FR.mobile
				, french: true
				, video: isThereAVideo
            });
            
            $("#LPcode .english").text(res);
            $("#LPcode .french").text(resFR);
            
        }).done(function() {
            
            var input = $("#LPcode .english").text();
            var output = decodeHtml(input);
            // if for homepage
            if(tmp == 'template/homePage/homePage.html' || tmp == 'template/homePage/widePage.html' ) {
               output = toHomepage(output);
            }				
			
            // reset and put the code
            $("#LPcode .english").val('').text('');
            $("#LPcode .english").val(output);

            // French
            var inputFR = $("#LPcode .french").text();
            var outputFR = decodeHtml(inputFR);
            
			// if for homepage
            if(tmp == 'template/homePage/homePage.html'){
               outputFR = toHomepage(outputFR, 'fr');
            }
			
			// if wide page 
            if(tmp == 'template/homePage/widePage.html'){
               outputFR = toHomepage(outputFR);
            }			
			
            // reset and put the code
            $("#LPcode .french").val('').text('');
            $("#LPcode .french").val(outputFR);
            
            $("#error-modal").html(ERROR); // show error if they are
            $("#result-preview-eng").attr("srcdoc", output); // iframe preview
            $("#result-preview-fr").attr("srcdoc", outputFR); // iframe french preview
            
            // Show the results in the modal
            $("#LPModal").modal();
			stopChecking();
			
         });
    }		 
    
    // END OF THE FUNCTION
    // Check every 380 until the page is render 
    function checkPage() {
	  console.log("Check");
	  t = setTimeout(function() {	
	  var l = tempENG.d.length;
	  console.log(l);
		if (pageLenght == l || pageLenght == 1) {	
		  getPage();
		  clearTimeout(t);
		  $("#get-code").disable(false); // reable get code button
		  console.timeEnd("Start");
		} else {
	      checkPage();
		}
      }, 380);
	}

	
	startCount();
	console.time("Start");

} // End Function


////////////////////////////////////
/////// COMMON FUNCTIONS  //////////
////////////////////////////////////

// Decode Html file
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    var res = html;
    txt.innerHTML = html;
    var str = txt.value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, '\'').replace(/&#x2F;/g, '/').replace(/&#x3D;/g, '=').replace(/&#39;/g, '\"').replace(/é/g,'&eacute;').replace(/è/g, '&egrave;').replace(/à/g, '&agrave;').replace(/men"s/gi, 'men\'s').replace(/’/gi, '\'').replace(/ê/gi, '&ecirc;').replace(/É/g,'&Eacute;').replace(/È/g,'&Egrave;').replace(/Ê/g,'&Ecirc;').replace(/ç/gi,'&ccedil;').replace(/ô/gi,'&ocirc;').replace(/ men's /gi,' Men\'s ');
    return str;
}

// Returns a random color
function randomColor(){
   var color = '#' + Math.floor( Math.random() * 16777215 ).toString( 16 );
   return color;
};

// Select all elements with data-toggle="tooltips" in the document
function info() {
    $('[data-toggle="tooltip"]').tooltip(); 
};   

// Select the value of the next textarea
function selectResult(that){
    var lang = "."+$(that).data("lang") || "";
    $(that).siblings("textarea"+lang).select();
}

// Scroll to top
function backToTop() {
    $('html,body').animate({scrollTop: 0}, 700);
}

// Open New Window
function seeInWindow(that) {
    var name = Math.floor(Math.random()*1000001) + "img";
    var page = $(that).siblings("input[name*='mg']").val();
    var NWin = window.open(page, name, 'height=500,width=700');

    if (window.focus){
       NWin.focus();
    }
     return false;
}

function previewCTA(that){
     setTimeout(function(){
        var img = $(that).val();
        var h = $(that).data("height");
        var w = $(that).data("width");
        var ratio = (w/h) * 300 ;
        
         if (h > 300) { 
          var hc = ( 30 * 300) / h;
        } else {
          var hc = 30; 
        }
         
        var wc = (160 / w) * ratio;

        var styles = {
              backgroundImage : "url(" + img + ")",
              width: ratio + "px",
              height: "300px",    
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"    
            };
         
         var styleBtn = {
             height: hc + "px",
             width: wc + "px",
         };
         
        $(that).parents(".container.landingImage").find(".preview-imgcta").css(styles);
        $(that).parents(".container.landingImage").find(".preview-cta").css(styleBtn);
      }, 150);
}

function mooveCTA(elem, pos) {   
    var v = $(elem).val();
    if (pos == 'left') {
        style = {
            left: v + "%",
        }
    } else if ('top'){
        style = {
            top: 100- v + "%",
        }
    }
    $(elem).parents(".container.landingImage").find(".preview-cta").css(style);
  //  $(that).parents(".container.landingImage").find(".preview-imgcta .preview-cta");

}

// Change http to https on links input
function checkLink(that) {
    var val = $(that).val();
    var verif = 'http://';
    // check if contains http
    if ( ((val.indexOf(verif) == -1) == false) && val != "" ) {
      // if so, change it to https
        var res = val.split(verif);
        var n =  "https://" + res[1];
        $(that).val(n);
    }  
}



// Disable function
jQuery.fn.extend({
    disable: function(state) {
        return this.each(function() {
            this.disabled = state;
        });
    }
});