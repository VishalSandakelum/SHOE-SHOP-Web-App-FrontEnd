const inventoryfileInput = document.getElementById('inventory-file-input');
const inventoryimagePreview = document.getElementById('inventory-image-preview');
$('.inventorycode').attr('readonly', true);

inventoryfileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    inventoryimagePreview.innerHTML = '';
    inventoryimagePreview.appendChild(img);
    console.log('Image Path:', file.name); // Log image path
  } else {
    const defaultImg = document.createElement('img');
    defaultImg.src = 'default-image.jpg';
    inventoryimagePreview.innerHTML = '';
    inventoryimagePreview.appendChild(defaultImg);
    console.log('No image selected'); // Log when no image is selected
  }
});

inventoryimagePreview.addEventListener('click', function() {
    console.log('clicked')
    inventoryfileInput.click();
});

$('.inventorycode').click(function(){
  $('.inventoryformpopupmaincontainer').attr('style', 'display: block');
});

$('.inventorypopupformclosebtn').click(function(){
  closeInventoryPopUpForm();
});

$('.inventorypopupbtn').click(function(){
  let selected = [];
  if($('.occasion').val()!='Select Occasion'){
    selected.length=0;
    switch($('.occasion').val()) {
      case '1':
          selected[0]="F";
          break;
      case '2':
          selected[0]="C";
          break;
      case '3':
          selected[0]="I";
          break;
      case '4':
          selected[0]="S";
          break;
    }
    switch($('.shoeverities').val()) {
      case '1':
          selected[1]="H";
          break;
      case '2':
          selected[1]="F";
          break;
      case '3':
          selected[1]="W";
          break;
      case '4':
          selected[1]="FF";
          break;
      case '5':
          selected[1]="SD";
          break;
      case '6':
          selected[1]="S";
          break;
      case '7':
          selected[1]="SL";
          break;
    }
    switch($('.inventorycategory').val()) {
      case '1':
          selected[2]="M";
          break;
      case '2':
          selected[2]="F";
          break;
    }

    $('.inventorycode').val('');
    for(let i in selected){
      $('.inventorycode').val(
        $('.inventorycode').val()+selected[i]
      );
    }
  }else if($('.otherverities').val()!='Select Verities'){
    selected.length=1;
    switch($('.otherverities').val()) {
      case '1':
          selected[0]="SHMP";
          break;
      case '2':
          selected[0]="POLB";
          break;
      case '3':
          selected[0]="POLBR";
          break;
      case '4':
          selected[0]="POLDBR";
          break;
      case '5':
          selected[0]="SOF";
          break;
      case '6':
          selected[0]="SOH";
          break;
    }
    $('.inventorycode').val(
      selected[0]
    );
  }
  clearInventoryPopUpFormField();
  closeInventoryPopUpForm();
});

function closeInventoryPopUpForm(){
  $('.inventoryformpopupmaincontainer').attr('style', 'display: none !important');
}

function clearInventoryPopUpFormField(){
  $('.occasion').prop('selectedIndex', 0).focus();
  $('.shoeverities').prop('selectedIndex', 0).focus();
  $('.otherverities').prop('selectedIndex', 0).focus();
  $('.inventorycategory').prop('selectedIndex', 0).focus();
}