app.controller('CatCtrl', ['$scope', '$compile', function ($scope, $compile) {

    $scope.typeTmplt = {
        "1": {
            name: "Simple Image"
            , form: "template/category/Cat-form-simple.html"
            , template : "simpleImage"
        }, 
          "2": {
            name: "Image with CTA button"
           , form: "template/category/Cat-form-cta.html"
           , template : "imageCTA-new"
        },		
          "2": {
            name: "Image with CTA button - OLD"
           , form: "template/category/Cat-form-cta.html"
           , template : "imageCTA"
        },
           "3": {
            name: "Promotion Banner"
           , form: "template/category/Cat-form-promo.html"
           , template : "catPromo"
        } ,
          "4": {
            name: "Outlet Promotion Banner"
           , form: "template/category/Cat-form-promo-outlet.html"
           , template : "outletPromo"
        }   
    };

    $scope.getForm = function ($event) {
       
    /*    var $target = angular.element(event.target);
        var tmp = $target.data('form');
        var txt = "<form class='form-category'><" + tmp + "></" + tmp + "></form>";
        var output = $compile(txt)($scope);
        angular.element("#form-cat").html(output); // set the right form */
        $("#cat-result").removeClass("actif");
        
         // Load the template and append it to the main div
        $("#cat-result .eng").val('');
        $("#cat-result .fr").val('');
        var $target = angular.element(event.target);
        var template =  $target.data('form');
        var tmp = $target.data('template');
          
        if (!template) {
                alert("Not available");
                return;
        }
        
        $.get(template, function (template) {
                var rendered = Mustache.render(template);
                var output = $compile(rendered)($scope);
                if (tmp == 'outletPromo') {
                     var output2 = $compile("<br><br><button ng-click='getOutletTemplate($event)' data-tplt='" + tmp + "'class='btn btn-success btn-sm'>Get Code</button>")($scope);
                }
                else {
                    var output2 = $compile("<br><br><button ng-click='getCatTemplate($event)' data-tplt='" + tmp + "' class='btn btn-success btn-sm'>Get Code</button>")($scope);
                }
                $("#form-cat").html(output);
                $("#form-cat").append(output2);
                $("#form-cat .container .row.options").remove();
                
      });   
        
},
        
    $scope.addCssScript = function (resENG, reFR) {
       var cssLink = '<link rel="stylesheet" type="text/css" href="https://lechateau.com/style/html/landing/assets/css/lc-category-banners.css">';
            
              
       var add = '<style type="text/css">.wrapper{padding:0!important;margin-bottom:0!important}@media (min-width:592px){.FS-SHOW-DESKTOP{display:block}.FS-SHOW-MOBILE{display:none}}@media (max-width:591px){.FS-SHOW-DESKTOP{display:none}.FS-SHOW-MOBILE{display:block}}img[usemap]{border:none;height:auto;max-width:100%;width:auto}@media (max-width:767px){#catBanner,.categoryBanner{display:inline!important}}</style>';
                
       var script = '<script>function NewWindow(o,n,t,e,i,s){"random"==s&&(LeftPosition=screen.width?Math.floor(Math.random()*(screen.width-t)):100,TopPosition=screen.height?Math.floor(Math.random()*(screen.height-e-75)):100),"center"==s?(LeftPosition=screen.width?(screen.width-t)/2:100,TopPosition=screen.height?(screen.height-e)/2:100):("center"!=s&&"random"!=s||null==s)&&(LeftPosition=0,TopPosition=20),settings="width="+t+",height="+e+",top="+TopPosition+",left="+LeftPosition+",scrollbars="+i+",location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no",win=window.open(o,n,settings)}var win=null</script>';
                
        $("#cat-result .eng").val( cssLink + add + resENG + script); 
        $("#cat-result .fr").val(cssLink + add + reFR + script); 
        $("#cat-result").addClass("actif");
        
    },  

    // Category Banner Logic
    $scope.getCatTemplate = function (tmp) {
        
        var $form = angular.element(event.target).parent().parent(); // Find the form. It's the parent of the parent
        var file = angular.element(event.target).data('tplt');
        // Get the template we want
        var template = 'template/category/' + file + '.html';
        
        // Reset the value
        var ENG = {};
        var FR = {};
        $("#cat-result .eng").val('');
        $("#cat-result .fr").val('');
        $("#cat-result").removeClass("actif"); 
       
        
        // Do a loop of all input
        // Get the name and the value
        $form.find("input").each(function (e) {
            var value = $(this).val();
            var key = $(this).attr('name');
            var lang = $(this).data('lang');
            
            if ( lang == 'eng') {
                ENG[key] = value;
            } else if ( lang == 'fr') {
                FR[key] = value;
            } else if (key == 'posLeft') {
                var left = Math.round((value - 16.2 ) * 3.08);
                ENG.left = left;
            } else if (key == 'posTop') {
                var h = Number($form.find("input[name='img'][data-lang='eng']").data('height')) || 400;
                var h2 = h / 2  ;
                var r = (((( 50 - value  ) * 2) / 100 ));
                var top  = Math.round((r * h2)+ 15);
                ENG.top = top;
            } 
            else {
               ENG[key] = value;
               FR[key] = value;
            }
        }); // End loop
        
        
        // background logic
       if( $form.find("input[name='useBG']").is(':checked') ) {
              FR.color = "background-image: url(" + FR.bgImg + "); background-reapeat:no-repeat;";
              ENG.color = "background-image: url(" + ENG.bgImg +"); background-reapeat:no-repeat;";
        } else {
             FR.color = "background-color: " + FR.color + ";";
             ENG.color = "background-color: " + ENG.color + ";";
        }
        
            
        // Get the selected template
        // Send the data or empty data if not available ( || "" )
        $.get(template, function (template) {
            var outputENG = Mustache.to_html(template, {
                 image: ENG.img || $form.find("input[name='img'][data-lang='eng']").val()
                , seo: ENG.seo || ""
                , text: ENG.text || "&#160;"
                , height : $form.find("input[name='img'][data-lang='eng']").data('height') || 400
                , cta :  ENG.cta || ""
                , link : ENG.link || ""
                , terms: ENG.terms || ""
                , termsSEO : "Read the terms for this promotion"
                , bgColor : ENG.color || ""
                , style : " margin-top:0px; left:" + ENG.left + "%; " + "top:" +  ENG.top + "px;" || ""
            });
            
            var outputFR = Mustache.to_html(template, {
                image: FR.img || ""
                , seo: FR.seo || ""
                , text: FR.text || "&#160;"
                , height : $form.find("input[name='img'][data-lang='fr']").data('height') || 400
                , cta : FR.cta || ""
                , link : ENG.link || ""
                , terms: FR.terms || ""
                , termsSEO : "Lire les conditions de cette promotion"
                , bgColor : FR.color || ""
                , style : " margin-top:0px; left:" + ENG.left + "%; " + "top:" +  ENG.top + "px;" || ""
            });
            
            var resENG = decodeHtml(outputENG);
            var reFR = decodeHtml(outputFR);
            var cssLink = '<link rel="stylesheet" type="text/css" href="https://lechateau.com/style/html/landing/assets/css/lc-category-banners.css">';
            
            // Release the result
            // Put the code on the preview divs
            
            if (file == 'catPromo') {
              $scope.addCssScript(resENG, reFR);
            } else {
              $("#cat-result .eng").val( cssLink + resENG); 
              $("#cat-result .fr").val(cssLink + reFR); 
              $("#cat-result").addClass("actif");
            }
       
        });




    },    
    
    // Outlet Logic    
    $scope.getOutletTemplate = function(tmp) {
        var $form = angular.element(event.target).parent().parent(); // Find the form. It's the parent of the parent
        
        // Get the template we want
        var template = 'template/category/' + angular.element(event.target).data('tplt') + '.html';
        
        // Reset the value
        var ENG = {};
        var FR = {};
        $("#cat-result .eng").val('');
        $("#cat-result .fr").val('');
        $("#cat-result").removeClass("actif");
       
        
        // Do a loop of all input
        // Get the name and the value
        $form.find("input").each(function (e) {
            var value = $(this).val();
            var key = $(this).attr('name');
            var lang = $(this).data('lang');
            
            if ( lang == 'eng') {
                ENG[key] = value;
            } else if ( lang == 'fr') {
                FR[key] = value;
            } else {
               ENG[key] = value;
               FR[key] = value;
            }
        }); // End loop
        
        if( $form.find("input[name='useBG']").is(':checked') ) {
            //
        }
        
        // Get the selected template
        $.get(template, function (template) {
            var outputENG = Mustache.to_html(template, {
                image: ENG.img || $form.find("input[name='img'][data-lang='eng']").val()
                , eng : true
             /*    , seo: ENG.seo || ""
                , text: ENG.text || "&#160;"
                , height : $form.find("input[name='img'][data-lang='eng']").data('height') || 400
                , cta : ENG.cta || ""
                , link : ENG.link || ""
                , terms: ENG.terms || ""
                , termsSEO : "Read the terms for this promotion"
                , bgColor : ENG.color || ""
            */ 
               // ENG
            });
            
            var outputFR = Mustache.to_html(template, {
                image: FR.img || $form.find("input[name='img'][data-lang='fr']").val()
                , fr : true
               /* , seo: FR.seo || ""
                , text: FR.text || "&#160;"
                , height : $form.find("input[name='img'][data-lang='fr']").data('height') || 400
                , cta : FR.cta || ""
                , link : ENG.link || ""
                , terms: FR.terms || ""
                , termsSEO : "Lire les conditions de cette promotion"
                , bgColor : FR.color || "" */
            });
            
            var resENG = decodeHtml(outputENG);
            var reFR = decodeHtml(outputFR);
            $scope.addCssScript(resENG, reFR);
       });
        
    }
        
}]); // End Controller
