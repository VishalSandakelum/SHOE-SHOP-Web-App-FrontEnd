let count = 0;

$('.mostsaleshoedetails').click(function(){
    if(count==0){
        $('.mostsaleshoedetails>div').css('display','none');
        $('.shoedetails>div').css('display','block');
        count++;
    }else if(count==1){
        $('.shoedetails>div').css('display','none');
        $('.mostsaleshoedetails>div').css('display','block');
        count=0;
    }
});

$('.homebutton').click(function(){
    changeForm(".rightsidemaincontainer");
});

$('.customerbutton').click(function(){
    changeForm(".customerformmaincontainer")
});

$('.employeebutton').click(function(){
    changeForm(".employeeformmaincontainer")
});

$('.supplierbutton').click(function(){
    changeForm(".supplierformmaincontainer")
});

$('.inventorybutton').click(function(){
    changeForm(".inventoryformmaincontainer")
});

$('.userbutton').click(function(){
    changeForm(".userformmaincontainer")
});

$('.salesbutton').click(function(){
    changeForm(".saleformmaincontainer")
});


function changeForm(form){
    $('.rightsidemaincontainer').attr('style', 'display: none');
    $('.employeeformmaincontainer').attr('style', 'display: none !important');
    $('.inventoryformmaincontainer').attr('style', 'display: none !important');
    $('.supplierformmaincontainer').attr('style', 'display: none !important');
    $('.customerformmaincontainer').attr('style', 'display: none !important');
    $('.saleformmaincontainer').attr('style', 'display: none !important');
    $('.userformmaincontainer').attr('style', 'display: none !important');

    $(form).css('display','block');
}

$('.profileicon').click(function(){
    $('.profilechangemaincontainer').attr('style', 'display: block');
});

$('.profilechangedbocclosebtn').click(function(){
    $('.profilechangemaincontainer').attr('style', 'display: none');
});

/*Profile Picture Upload Button*/
$('.profileicon').click(function(){
    console.log('icon changed');
});

const profilefileInput = $('.fileinput');
const profileimagePreview = $('.imagepreview');

profilefileInput.on('change', function() {
  const file = this.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    profileimagePreview.empty(); // Clear the previous content
    profileimagePreview.append(img);
    console.log('Image Path:', file.name); // Log image path
  } else { // Log when no image is selected
    console.log('No image selected'); // Log when no image is selected
  }
});

profileimagePreview.on('click', function() {
  console.log('clicked');
  profilefileInput.click();
});

/*------------------------------------------------------*/

function setMostSaleShoePicture(image){
    const shoeimagepreview = document.getElementsByClassName('dashboardmostsaleshoepictures')[0];
    const shoepic = 'data:image/jpg;base64,' + image;
    
    // Set the src attribute of the existing img element
    shoeimagepreview.src = shoepic;
}

function dataToMostSaleShoeTable(inventory){
    let row = `<tr>
                <th scope="row">${inventory.itemCode}</th>
                <td>${inventory.itemDescription}</td>
                <td>${inventory.size}</td>
                <td>${inventory.quantity}</td>
                <td>${inventory.unitPriceSale}</td>
            </tr>`;

  $(".mostsaleshoedetailstable").append(row);
}

function addEmployeeDetails(name, code, date, imageUrl) {
    let backgroundc;
    let fcolor;
    let newwidth;
    let Today = isDateToday(date);
    if(isDateToday(date)){
        backgroundc = 'rgba(65, 254, 65, 0.208)';
        fcolor = 'rgb(0, 166, 0)';
    }else{
        backgroundc = 'rgba(255, 255, 255, 0)';
        fcolor = 'rgb(0, 0, 0)';
        newwidth = '70px'
    }
    const employeeContainer = document.querySelector('.employeecontainer');

    let employeeHTML = `
        <div class="d-flex">
            <div>
                <div>
                    <img src="data:image/png;base64,${imageUrl}" alt="employee">
                </div>
                <div class="spaceline"></div>
            </div>
            <div class="birthdaydetails">
                <h4>${name}</h4>
                <h4>${code}</h4>
                <div class="d-flex justify-content-center daytoday align-items-center" style="background-color: ${backgroundc}; color: ${fcolor}; width: ${newwidth};">
                    <h4>${Today ? 'Today' : date}</h4>
                </div>
            </div>
        </div>
    `;

    // Append the HTML to the employee container
    employeeContainer.insertAdjacentHTML('beforeend', employeeHTML);
}

function isDateToday(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    
    return date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
}