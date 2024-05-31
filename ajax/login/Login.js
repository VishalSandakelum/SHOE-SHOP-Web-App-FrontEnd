let signInURI = 'http://localhost:8080/app/api/v0/auth/signin';
let token;

$('.signinbtn').click(function(){
    const signInData = getAllSignInDataFromField();
    $.ajax({
        url:signInURI,
        method:'POST',
        data:JSON.stringify(signInData),
        contentType: 'application/json',
    
        success: function(resp){
            token = resp.token;
            console.log(token);
            localStorage.setItem('authToken', token);
            window.location.href = 'index.html';
        },
        error:function(resp){
            showAlert("error","Oops","Please Check & Enter Correct Email Password");
        }
    });
});

function getAllSignInDataFromField(){
    return{
        email:$('.usernamefield').val(),
        password:$('.passwordfield').val()
    }
}
