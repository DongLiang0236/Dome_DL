// JavaScript Document
//鏃犵紳婊氬姩
var leng=$('.main4b_ ul li').length;
var ulW=313*leng;
$('.main4b_ ul').css({'width':ulW+'px'});
var i=0;
var tt;
function autoMove(){
	tt=setInterval(function(){
		$('.main4b_ ul').animate({marginLeft:'-313px'},function(){
			$(this).css({'margin-left':'0'}).find('li:first').appendTo('.main4b_ ul');	
		})	
	},1000)	
}
autoMove();
$('.main4b').hover(function(){
	//
	clearInterval(tt);
},function(){
	autoMove();
})
$('.box a.right').click(function(){
		$('.main4b_ ul').animate({marginLeft:'-313px'},function(){
			$(this).css({'margin-left':'0'}).find('li:first').appendTo('.main4b_ ul');	
		})		
})
$('.box a.left').click(function(){
	$('.main4b_ ul').css({'margin-left':'-313px'}).find('li:last').prependTo('.main4b_ ul');
	$('.main4b_ ul').animate({marginLeft:'0'});
})

//鏂囨湰妗嗚幏寰楃劍鐐逛簨浠�
$('.bottom_l form input').focus(function(){
	var searchs=$('.bottom_l form input').val(); 
	if(searchs=='璇疯緭鍏ュ叧閿瓧'){
		$(this).val('');
	}
})
//鏂囨湰妗嗗け鍘荤劍鐐�
$('.bottom_l form input').blur(function(){
	var searchs=$('.bottom_l form input').val();
	if(searchs==''){
		$(this).val('璇疯緭鍏ュ叧閿瓧');
	}
})

/*杞挱鍥�*/
//闅愯棌绗竴寮犱互澶栫殑鍥剧墖
$('.banner_box ul li:gt(0)').hide();
var n=0;
var len=$('.banner_box ul li').length;  //鑾峰彇鐨勬槸li鐨勯暱搴� 鏁伴噺
var t;
function play(){
	//alert(n)
	$('.banner_box ul li').eq(n).show().siblings().hide();
		//缁欏綋鍓嶇殑span澧炲姞on鏍峰紡锛岀Щ闄�
	$('.white span').eq(n).addClass('on').siblings().removeClass('on');
}
function autoPlay(){
	//鑷姩鎾斁
	t=setInterval(function(){
		//alert(1)	
		n++;
		if(n>=len){
			n=0;
		}
		play();
	},2000)
}
//alert(len)
autoPlay(); //璋冪敤鑷姩鎾斁鍑芥暟

//榧犳爣缁忚繃banner鍋滄鎾斁锛岀Щ寮€缁х画鎾斁
$('.banner_box').hover(function(){
	clearInterval(t)
},function(){
	autoPlay();
})
//鐐瑰嚮鏁板瓧鏄剧ず鐩稿簲鐨勫浘鐗�
$('.white span').each(function(index) {
	//alert(index)
	$(this).click(function(){
		//alert(index)	
		n=index;
		play();
	})
});
	