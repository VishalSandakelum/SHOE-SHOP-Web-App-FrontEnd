var bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSb2xlX1VTRVIifV0sInN1YiI6InZpc0BnbWFpbC5jb20iLCJpYXQiOjE3MTYwODIxODMsImV4cCI6MTcxNjE2ODU4M30.UPVdnmhRPWFEhCM0EYc_JkiLqvNkBtoJjmpOAHeGecQ';

function showAlert(iconType,titleMessage,textMessage){
    Swal.fire({
        icon: iconType,
        title: titleMessage,
        text: textMessage,
    });
}