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

function dataToRecentSaleDetailsTable(sale){
    let row = `<tr>
                <th scope="row">${sale.purchaseDate}</th>
                <td>${sale.orderNo}</td>
                <td>${sale.customerName}</td>
                <td>${sale.totalPrice}</td>
                <td class="status">
                    <div class="d-flex justify-content-center align-items-center">
                        <h4>PAID</h4>
                    </div>
                </td>
              </tr>`;
  
    $(".recenetsaletable").append(row);
}

function dateToNormalDate(date){
    let inputDate = date;
    let formattedDate = moment(inputDate).format('DD MMM YYYY');
    console.log(formattedDate);
    return formattedDate;
}

Chart.plugins.register({
    afterDatasetDraw: function(chartInstance) {
      var ctx = chartInstance.chart.ctx;
      var colors = ["#E0E0E0", "#E0E0E0", "#E0E0E0", "#3498DB", "#E0E0E0", "#E0E0E0", "#E0E0E0"]; // New colors to apply
  
      chartInstance.data.datasets.forEach(function(dataset, i) {
        var meta = chartInstance.getDatasetMeta(i);
        meta.data.forEach(function(bar, index) {
          var value = dataset.data[index];
          var x = bar._model.x;
          var y = bar._model.y;
          var base = bar._model.base;
          var height = Math.abs(base - y);
          var width = bar._model.width;
          var radius = 10; // Adjust this value for rounded corners
  
          // Ensure the radius is not greater than half the bar's height
          if (radius > height / 2) {
            radius = height / 2;
          }
  
          // Ensure the radius is not greater than half the bar's width
          if (radius > width / 2) {
            radius = width / 2;
          }
  
          // Save the context state
          ctx.save();
  
          // Draw the rounded rectangle
          ctx.beginPath();
          ctx.moveTo(x - width / 2 + radius, base);
          ctx.lineTo(x + width / 2 - radius, base);
          ctx.quadraticCurveTo(x + width / 2, base, x + width / 2, base - radius);
          ctx.lineTo(x + width / 2, y + radius);
          ctx.quadraticCurveTo(x + width / 2, y, x + width / 2 - radius, y);
          ctx.lineTo(x - width / 2 + radius, y);
          ctx.quadraticCurveTo(x - width / 2, y, x - width / 2, y + radius);
          ctx.lineTo(x - width / 2, base - radius);
          ctx.quadraticCurveTo(x - width / 2, base, x - width / 2 + radius, base);
          ctx.closePath();
  
          // Fill the bar with the specified color
          ctx.fillStyle = colors[index]; // Use the corresponding color from the colors array
          ctx.fill();
  
          // Restore the context state
          ctx.restore();
        });
      });
    }
  });
  
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina","USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15, 45, 50];
  var barColors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff","#ffffff","#ffffff"]; // Initial black color for all bars
  
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors, // Set initial color array to black
        data: yValues,
        barPercentage: 0.5, // Reduce the bar thickness for a sleeker look
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            display: false, // Hide the y-axis values
            padding: 10, // Adds padding to labels
            fontSize: 14, // Bigger font size for better readability
          },
          gridLines: {
            drawBorder: false, // Removes the border around the grid
            color: 'rgba(204, 204, 204, 0.1)', // Lighter grid lines
          }
        }],
        xAxes: [{
          gridLines: {
            display: false, // No grid lines
          },
          ticks: {
            display: false,
            fontColor: '#888', // Gray color for the x-axis labels
            fontSize: 14, // Bigger font size for better readability
          }
        }]
      },
      tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: '#373738', // White background for tooltips
        titleFontColor: '#ffff', // Black text for titles
        bodyFontColor: '#ffff', // Gray text for body
        borderColor: '#CCC', // Light gray border for tooltips
        borderWidth: 1,
        cornerRadius: 4, // Rounded corners for tooltips
        caretSize: 6, // Larger caret size
        xPadding: 10, // Horizontal padding within the tooltip
        yPadding: 10, // Vertical padding within the tooltip
      }
    }
  });