let count = 0;

$('.mostsaleshoedetails').click(function(){
    if(count==0){
        $('.mostsaleshoedetails>div').css('display','none');
        $('.shoedetails>div').css('display','block');
        count++;
    }else if(count==1){
        $('.shoedetails>div').css('display','none');
        $('.mostsaleshoedetails>div').css('display','block');
        count=0;
    }
});