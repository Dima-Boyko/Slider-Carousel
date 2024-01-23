//******************************************************
/*
 * Dmitry Boyko
 * 23.04.2017 v7
 *
 * itdix.met
 * tmgsoft@hotmail.com
*/
//******************************************************
/*
Параметры функции


*/
//******************************************************


(function($){
  jQuery.fn.sliderCarousel = function (slider_get)
	{
	    //******************************************************
    	//Параметры по умолчанию
    	var _slider_default=({
    	  'element':'img',
    	  'interval':1000,
    	  'auto':2000,
    	  'look':5000
    	}) ;
    	if(slider_get==undefined)slider_get=_slider_default;
    	//******************************************************
    	//                      НАСТРОЙКИ
    	var _Slider=jQuery(this);
        var _Selector=this.selector;
    	var sElement=slider_get['element'];
    	var count=0;           					//картинок видимых в слайдере
    	var margin=0;        					//ширина блока
    	var interval=slider_get['interval'];     //анимация блоков
    	var auto_interval=slider_get['auto'];//пауза при авто прокрутке
    	var Look=slider_get['look'];//пауза при ручном выборе
    	var but_prev='#sdprev';
    	var but_next='#sdnext';
    	//******************************************************
    	//Добавить параметры по умолчанию
    	if(sElement==undefined)sElement=_slider_default['element'];
    	if(interval==undefined)interval=_slider_default['interval'];
    	if(auto_interval==undefined)auto_interval=_slider_default['auto'];
    	if(Look==undefined)Look=_slider_default['look'];
    	//******************************************************
        //Подготовка слайдера
        console.log('ok');
        _Slider.find(sElement).addClass('scNone');
        _Slider.find(sElement+':eq(0)').removeClass('scNone');
        _Slider.find(sElement+':eq(0)').addClass('scLeft');
        _Slider.find(sElement+':eq(1)').removeClass('scNone');
        _Slider.find(sElement+':eq(1)').addClass('scCanter');
        _Slider.find(sElement+':eq(2)').removeClass('scNone');
        _Slider.find(sElement+':eq(2)').addClass('scRight');

        _Slider.find(sElement+':eq(0)').attr('SlCr','ok');

        _Slider.find('.scCanter').css({
            'top':'20px',
            'left':'100px',
            'z-index':'100'
          });
          _Slider.find('.scLeft').css({
            'left':'0px',
            'z-index':'50',
            'height':'160px',
          });
          _Slider.find('.scRight').css({
            'left':'200px',
            'z-index':'50',
            'height':'160px',
          });

        //******************************************************
        //


        _Slider.on('click', '.scLeft', function() {
            scAnimateRight();
        });

        _Slider.on('click', '.scRight', function() {
            scAnimateLeft()
        });






        //******************************************************
        //ФУНКЦИИ
        function scAnimateRight(){
          //блоки анимацыи
          var _baC=_Slider.find('.scCanter');
          var _baR=_Slider.find('.scRight');
          var _baL=_Slider.find('.scLeft');
          //alert(_Slider.find('.scLeft').index());
          if(_Slider.find('.scLeft').index()==0){
            _Slider.find('.scNone').last().removeClass('scNone').addClass('scLeftNext');
          }else{
            _Slider.find('.scLeft').prev().removeClass('scNone').addClass('scLeftNext');
          }

 
          _Slider.find('.scLeftNext').css({
            'left':'0px',
            'z-index':'10',
            'height':'160px',
          });

           /*_baL.css({
            'top':'20px',
            'left': '100px',
            'z-index':'100',
            'height':'200px',
          });
          _baC.css({
            'top':'40px',
            'left': '200px',
            'z-index':'50',
            'height':'160px',
          });
          _baR.removeClass('scRight').addClass('scNone');

            _baC.removeClass('scCanter').addClass('scRight');

            _baL.removeClass('scLeft').addClass('scCanter');


            _Slider.find('.scLeftNext').removeClass('scLeftNext').addClass('scLeft');
            _Slider.find('.scLeft').css({'left': '0px','z-index':'50'});
            //_Slider.find('.scCanter').css({'left': '100px','z-index':'100'});
            _Slider.find('.scNone').css({'z-index':'10'});

             */
          _baL.animate({
            'top':'20px',
            'left': '100px',
            'z-index':'100',
            'height':'200px',
          },500);
          _baC.animate({
            'top':'40px',
            'left': '200px',
            'z-index':'50',
            'height':'160px',
          },500);
          var _t=setTimeout(function(){
            _baR.removeClass('scRight').addClass('scNone');

            _baC.removeClass('scCanter').addClass('scRight');

            _baL.removeClass('scLeft').addClass('scCanter');


            _Slider.find('.scLeftNext').removeClass('scLeftNext').addClass('scLeft');
            _Slider.find('.scLeft').css({'left': '0px','z-index':'50'});
            _Slider.find('.scCanter').css({'left': '100px','z-index':'100'});
            _Slider.find('.scNone').css({'z-index':'10'});
          },700);

        }


        function scAnimateLeft(){
          //блоки анимацыи
          var _baC=_Slider.find('.scCanter');
          var _baR=_Slider.find('.scRight');
          var _baL=_Slider.find('.scLeft');

          if(_Slider.find('.scRight').index()==_Slider.find(sElement).length-1){
            _Slider.find('.scNone').first().removeClass('scNone').addClass('scRightNext');
          }else{
            _Slider.find('.scRight').next().removeClass('scNone').addClass('scRightNext');
          }


          _Slider.find('.scRightNext').css({
            'left':'200px',
            'z-index':'10',
            'height':'160px',
          });

          /* _baR.css({
            'top':'20px',
            'left': '100px',
            'z-index':'100',
            'height':'200px',
          });
          _baC.css({
            'top':'40px',
            'left': '0px',
            'z-index':'50',
            'height':'160px',
          });
          _baL.removeClass('scLeft').addClass('scNone');

            _baC.removeClass('scCanter').addClass('scLeft');

            _baR.removeClass('scRight').addClass('scCanter');


            _Slider.find('.scRightNext').removeClass('scRightNext').addClass('scRight');
            _Slider.find('.scRight').css({'left': '200px','z-index':'50'});
            //_Slider.find('.scCanter').css({'left': '100px','z-index':'100'});
            _Slider.find('.scNone').css({'z-index':'10'});
             */

          _baR.animate({
            'top':'20px',
            'left': '100px',
            'z-index':'100',
            'height':'200px',
          },500);
          _baC.animate({
            'top':'40px',
            'left': '0px',
            'z-index':'50',
            'height':'160px',
          },500);
          var _t=setTimeout(function(){
            _baL.removeClass('scLeft').addClass('scNone');

            _baC.removeClass('scCanter').addClass('scLeft');

            _baR.removeClass('scRight').addClass('scCanter');


            _Slider.find('.scRightNext').removeClass('scRightNext').addClass('scRight');
            _Slider.find('.scRight').css({'left': '200px','z-index':'50'});
            //_Slider.find('.scCanter').css({'left': '100px','z-index':'100'});
            _Slider.find('.scNone').css({'z-index':'10'});
          },700);

        }





	}
//***********************************************************************************************************



})(jQuery);