let userURI = 'http://localhost:8080/app/api/v0/user'

$('.userdatasave').click(function(){
    const userData = getAllUserDataFromField();
    $.ajax({
        url:userURI,
        method:'POST',
        data:JSON.stringify(userData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","User "+resp.email+" Saved Sucessfully.");
            clearAllUserField();
        },
        error:function(resp){
        }
    });
});

function getAllUserDataFromField(){
    return{
        email: $('.useremail').val(),
        password: $('.userpassword').val(),
        role: $('.userrole').find('option:selected').text(),
    }
}