let AllSales = [];
let Sales = {      
    id: '',      
    itemCode: '',
    itemDescription: '',
    size: '',
    unitPriceSale: '',
    quantity: '',
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
  
  function dataToSalesTable(sale){
    let row = `<tr>
                <th scope="row">${sale.itemCode}</th>
                <td>${sale.orderNo}</td>
                <td>${sale.customerName}</td>
                <td>${sale.itemDescription}</td>
                <td>${sale.size}</td>
                <td>${sale.unitPriceSale}</td>
                <td>${sale.quantity}</td>
                <td>${sale.totalPrice}</td>
                <td>${sale.purchaseDate}</td>
                <td>${sale.paymentMethod}</td>
                <td>${sale.addedPoints}</td>
                <td>${sale.cashierName}</td>
              </tr>`;
  
    $(".saletable").append(row);
  }

  $('.inventoryaddpopupformclosebtn').click(function(){
    $('.inventoryaddpopupform').attr('style', 'display: none !important');
  });

  $('.saleitmadd').click(function(){
    $('.inventoryaddpopupform').attr('style', 'display: block');
    $('.saledetailstablecontainer').attr('style', 'display: none');
    $('.saleitemquetablecontainer').attr('style', 'display: block');
  });

  $('.saleinventoryaddfieldclear').click(function(){
    $('.saleitemcode').val('');
    $('.saleitemqty').val('');
    $('.saleunitprice').val('');
    $('.saleitemdescription').val('');
    $('.saleitemsize').val('');
  });