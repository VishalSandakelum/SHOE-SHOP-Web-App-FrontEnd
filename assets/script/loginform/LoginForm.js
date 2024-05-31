$('.tosignupform').click(function(){
    $('.signincontainer').attr('style', 'display: none !important');
    $('.signupoptionmaincontainer').attr('style', 'display: none !important');
    
    $('.signupcontainer').attr('style', 'display: block');
    $('.signinoptionmaincontainer').attr('style', 'display: block');
});

$('.tosigninform').click(function(){
    $('.signupcontainer').attr('style', 'display: none !important');
    $('.signinoptionmaincontainer').attr('style', 'display: none !important');
    
    $('.signincontainer').attr('style', 'display: block');
    $('.signupoptionmaincontainer').attr('style', 'display: block');
});