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