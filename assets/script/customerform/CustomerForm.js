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

function clearAllCustomerField(){
    $('.customercode').val('');
    $('.customername').val('');
    $('.customergender').prop('selectedIndex', 0).focus();
    $('.joindate').text('');
    $('.customerlevel').prop('selectedIndex', 0).focus();
    $('.customertotalpoints').val('');
    $('.customerdob').val('');
    $('.customeraddressline01').val('');
    $('.customeraddressline02').val('');
    $('.customeraddressline03').val('');
    $('.customeraddressline04').val('');
    $('.customeraddressline05').val('');
    $('.customercontactno').val('');
    $('.customeremail').val('');
    $('.customerrecentpurchasedatetime').val('');
}