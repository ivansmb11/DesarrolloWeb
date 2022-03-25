// $(document).ready(function(){
//     $('#tercera').parent().css({
//         background: '#1b3d82'
//     });
// });

// $(document).ready(function(){
// 	$('#padre').children().fadeOut(1500);
// });

// $(document).ready(function(){
// 	$('#padre').children('#tercera').fadeOut(1000);
// });

// $(document).ready(function(){
// 	$('#contenedor').find('div.caja').slideUp(2000);
// });

// $(document).ready(function(){
// 	$('#tercera').siblings().fadeOut(3500);
// });

// $(document).ready(function(){
// 	$('#tercera').prev().css({
// 	background: '#000'
// 	});
// });

// $(document).ready(function(){
// 	$('#tercera').next().css({
// 	background: '#000'
// 	});
// });

// $(document).ready(function(){
// 	$('#tercera').prevAll().css({
// 	background: '#000'
// 	});
// });

// $(document).ready(function(){
// 	$('#tercera').nextAll().css({
// 	background: '#000'
// 	});
// });

// $(document).ready(function(){
//     $('.caja').first().css({
//             background: '#f9a03f'
//         });
//  });

//  $(document).ready(function(){
//     $('.caja').last().css({
//             background: '#f9a03f'
//         });
//  });

//  $(document).ready(function(){
//     $('.caja').eq(3).css({
//         background: '#f9a03f'
//     });
//  });

//  $(document).ready(function(){
//     $('.caja').filter('#tercera').css({background: '#9A2EFE'});
//  });

 $(document).ready(function(){
    $('.caja').not('#tercera').css({background: '#9A2EFE'});
 });