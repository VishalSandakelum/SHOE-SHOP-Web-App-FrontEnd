const employeeContainer = document.querySelector('.employeecontainer');
getMostSaleInvetorysInDashBoard();
findAllEmployeesOrderByDob();

function getMostSaleInvetorysInDashBoard(){
    $.ajax({
        url:inventoryURI+'/mostsaleitem',
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
           $('.mostsaleshoedetailstable td').parent().remove();
           console.log(resp.length);
           setMostSaleShoePicture(resp[0].itemPicture);
           for(var i in resp){
            dataToMostSaleShoeTable(resp[i]);
           }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}

function findAllEmployeesOrderByDob(){
    $.ajax({
        url:employeeURI+'/dob',
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            employeeContainer.innerHTML = '';
            console.log(resp[0]);
           for(var i in resp){
            console.log(isDateToday(resp[i].dob));
            addEmployeeDetails(resp[i].employeeName,resp[i].employeeCode,formatDate(resp[i].dob),resp[i].employeeProfilePic);
           }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}