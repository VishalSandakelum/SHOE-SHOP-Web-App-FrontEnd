const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    imagePreview.innerHTML = '';
    imagePreview.appendChild(img);
    console.log('Image Path:', file.name); // Log image path
  } else {
    const defaultImg = document.createElement('img');
    defaultImg.src = 'default-image.jpg';
    imagePreview.innerHTML = '';
    imagePreview.appendChild(defaultImg);
    console.log('No image selected'); // Log when no image is selected
  }
});

imagePreview.addEventListener('click', function() {
    console.log('clicked')
  fileInput.click();
});

function clearAllEmployeeField(){
  $('.employeecode').val('');
  $('.employeename').val('');
  $('.employeegender').prop('selectedIndex', 0).focus();
  $('.employeestatus').prop('selectedIndex', 0).focus();
  $('.employeedesignation').val('');
  $('.employeerole').val('');
  $('.employeedob').val('');
  $('.employeejoindate').val('');
  $('.employeebranch').val('');
  $('.employeeaddressLine01').val('');
  $('.employeeaddressLine02').val('');
  $('.employeeaddressLine03').val('');
  $('.employeeaddressLine04').val('');
  $('.employeeaddressLine05').val('');
  $('.employeecontactno').val('');
  $('.employeeemail').val('');
  $('.emergencycontact').val('');
  $('.employeeinformincaseofEmergency').val('');
}