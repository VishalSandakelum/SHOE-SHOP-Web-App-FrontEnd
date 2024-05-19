let customerURI = 'http://localhost:8080/app/api/v0/customers'

$('.customerdatasave').click(function(){
    console.log(getAllCustomerDataFromField);
    const customerData = getAllCustomerDataFromField();
    $.ajax({
        url:customerURI,
        method:'POST',
        data:JSON.stringify(customerData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Customer"+resp.customerCode+"Saved Sucessfully.");
        },
        error:function(resp){
        }
    });
});

$('.customerdataget').click(function(){
    $.ajax({
        url:(customerURI+'/'+$('.customercode').val()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            clearAllCustomerField();
            $('.customercode').val(resp.customerCode)
            $('.customername').val(resp.customerName),
            $('.customergender option').each(function() {
                if ($(this).text() === resp.gender) {
                    $(this).prop('selected', true);
                }
            }),
            $('.joindate').val(formatDate(resp.joinDate)),
            $('.customerlevel option').each(function() {
                if ($(this).text() === resp.level) {
                    $(this).prop('selected', true);
                }
            }),
            $('.customertotalpoints').val(resp.totalPoints),
            $('.customerdob').val(formatDate(resp.dob)),
            $('.customeraddressline01').val(resp.addressLine01),
            $('.customeraddressline02').val(resp.addressLine02),
            $('.customeraddressline03').val(resp.addressLine03),
            $('.customeraddressline04').val(resp.addressLine04),
            $('.customeraddressline05').val(resp.addressLine05),
            $('.customercontactno').val(resp.contactNo),
            $('.customeremail').val(resp.email),
            $('.customerrecentpurchasedatetime').val(formatDate(resp.recentPurchaseDateTime))
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllCustomerField();
        }
    });
});

$('.customerdataupdate').click(function(){
    const customerData = getAllCustomerDataFromField();
    console.log(customerData.level);
    $.ajax({
        url:(customerURI+'/'+$('.customercode').val()),
        method:'PUT',
        data:JSON.stringify(customerData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Customer "+$('.customercode').val()+" Updated Sucessfully.");
            clearAllCustomerField();
        },
        error:function(resp){
            showAlert("error","Oops",resp.message)
        }
    });
});

function getAllCustomerDataFromField(){
    return{
        customerCode: null,
        customerName: $('.customername').val(),
        gender: $('.customergender').find('option:selected').text(),
        joinDate: $('.joindate').val(),
        level: $('.customerlevel').find('option:selected').text(),
        totalPoints: $('.customertotalpoints').val(),
        dob: $('.customerdob').val(),
        addressLine01: $('.customeraddressline01').val(),
        addressLine02: $('.customeraddressline02').val(),
        addressLine03: $('.customeraddressline03').val(),
        addressLine04: $('.customeraddressline04').val(),
        addressLine05: $('.customeraddressline05').val(),
        contactNo: $('.customercontactno').val(),
        email: $('.customeremail').val(),
        recentPurchaseDateTime: $('.customerrecentpurchasedatetime').val()

    }
}