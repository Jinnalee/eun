
    var ColourSet = {
         Body : function(color){
            // document.querySelector('body').style.color = color
            $('body').css('color', color);
          },

         Bodybg : function(color){
           //document.querySelector('body').style.backgroundColor = color
           $('body').css('backgroundColor', color);
         }
       };

     ColourSet.Link = function (colour){
       // var i = 0;
       // var a = document.querySelectorAll('a');
       // while(i<a.length){
       //   a[i].style.color = colour;
       //   i = i + 1;}
       //

       $('a').css('color', colour)}
       // $라는 함수 - 이 웹페이지의 모든 a태그를 jQuery로 제어하겠다.
       //jQuery를 이용해서 태그의 CSS를 바꾸고 싶을 때
       //jQuery는 새로운 언어가 아니라, JS를 이용해서 CSS함수를 만들어 둔것.

      ColourSet.Handler = function (self){
           if(self.value === 'night'){
             ColourSet.Body('orange');
             ColourSet.Bodybg('darkgreen');
             ColourSet.Link('skyblue');
             self.value = 'day'
           }
           else{
             ColourSet.Body('navy');
             ColourSet.Bodybg('lightgrey');
             ColourSet.Link('hotpink');
             self.value = 'night'
           }
         }
