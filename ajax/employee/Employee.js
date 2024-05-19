let employeeURI = 'http://localhost:8080/app/api/v0/employees'
let employeeFormData = new FormData();

$('.employeedatasave').click(function(){
    let employeeData = JSON.stringify(getAllEmployeeDataFromField());
    employeeFormData.append('data', new Blob([employeeData], { type: 'application/json' }));
    employeeFormData.append('profilepic', $('.employeeimage').val());
    $.ajax({
        url:employeeURI,
        method:'POST',
        data:employeeFormData,
        contentType: false,
        processData:false,
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Employee "+resp.employeeCode+" Saved Sucessfully.");
            clearAllEmployeeField();
        },
        error:function(resp){
        }
    });
});

function getAllEmployeeDataFromField(){
    return{
        employeeCode: $('.employeecode').val(),
        employeeName: $('.employeename').val(),
        gender: $('.employeegender').find('option:selected').text(),
        status: $('.employeestatus').find('option:selected').text(),
        designation: $('.employeedesignation').val(),
        accessRole: $('.employeerole').val(),
        dob: $('.employeedob').val(),
        dateOfJoin: $('.employeejoindate').val(),
        attachedBranch: $('.employeebranch').val(),
        addressLine01: $('.employeeaddressLine01').val(),
        addressLine02: $('.employeeaddressLine02').val(),
        addressLine03: $('.employeeaddressLine03').val(),
        addressLine04: $('.employeeaddressLine04').val(),
        addressLine05: $('.employeeaddressLine05').val(),
        contactNo: $('.employeecontactno').val(),
        email: $('.employeeemail').val(),
        emergencyContact: $('.emergencycontact').val(),
        emergencyContactPerson: $('.employeeinformincaseofEmergency').val()
    }
}