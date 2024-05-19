var bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSb2xlX1VTRVIifV0sInN1YiI6InZpc0BnbWFpbC5jb20iLCJpYXQiOjE3MTYwODIxODMsImV4cCI6MTcxNjE2ODU4M30.UPVdnmhRPWFEhCM0EYc_JkiLqvNkBtoJjmpOAHeGecQ';

function showAlert(iconType,titleMessage,textMessage){
    Swal.fire({
        icon: iconType,
        title: titleMessage,
        text: textMessage,
    });
}

function formatDate(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}