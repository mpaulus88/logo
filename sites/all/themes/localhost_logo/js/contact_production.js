(function(a){var b,c,d=function(){a(this).next("div").is(":hidden")&&(a("#block-block-7 div").slideUp(),a(this).next("div").slideDown(),console.log("clicked"));console.log("clicked")};a(function(){b=a("#locomotion h2");c=a("#locomotion h2 +div");b.css("cursor","pointer");a(c.get(1)).hide();a(c.get(2)).hide();b.bind("click",d)})})(jQuery);