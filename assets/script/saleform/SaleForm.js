let AllSales = [];
let Sales = {
    inventory: [
      {
        inventory: {
          itemCode: ''
        }
      }
    ],
    orderNo: '',
    customerName: '',
    totalPrice: '',
    purchaseDate: '',
    paymentMethod: '',
    addedPoints: '',
    cashierName: ''
}

function clearAllSalesField(){
    $('.saleitemcode').val('');
    $('.saleitemdescription').val('');
    $('.saleitemqty').val('');
    $('.salepayementmethod').prop('selectedIndex', 0).focus();
    $('.saleorderno').val('');
    $('.saleitemsize').val('');
    $('.saletotalprice').val('');
    $('.salepoints').val('');
    $('.salecustomername').val('');
    $('.saleunitprice').val('');
    $('.salepurchasedate').val('');
    $('.salecashiername').val('');
  }
  
  function dataToSalesTable(inventory){
    let row = `<tr>
                  <th scope="row">${inventory.itemCode}</th>
                  <td>${inventory.itemDescription}</td>
                  <td>${inventory.category}</td>
                  <td>${inventory.size}</td>
                  <td>${inventory.quantity}</td>
                  <td>${inventory.supplierCode}</td>
                  <td>${inventory.supplierName}</td>
                  <td>${inventory.unitPriceSale}</td>
                  <td>${inventory.unitPriceBuy}</td>
                  <td>${inventory.expectedProfit}</td>
                  <td>${inventory.profitMargin}</td>
                  <td>
                    <div class="d-flex justify-content-center Istatus" style="background-color: ${backgroundc}; color: ${fcolor};">
                      <h4>${inventory.status}</h4>
                    </div>
                  </td>
              </tr>`;
  
    $(".inventorytable").append(row);
  }

  $('.inventoryaddpopupformclosebtn').click(function(){
    $('.inventoryaddpopupform').attr('style', 'display: none !important');
  });