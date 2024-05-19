$('.customertotalpoints').attr('readonly', true)

$('.customerlevel').change(function(){
    console.log($(this).val());
    switch($(this).val()) {
        case '1':
            $('.customertotalpoints').val('800');
            break;
        case '2':
            $('.customertotalpoints').val('600');
            break;
        case '3':
            $('.customertotalpoints').val('400');
            break;
        case '4':
            $('.customertotalpoints').val('200');
            break;
        default:
            alert('No valid level selected');
    }
});