let tableData = [];
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
    clearSaleInventoryAddField();
  });

  function clearSaleInventoryAddField(){
    $('.saleitemcode').val('');
    $('.saleitemqty').val('');
    $('.saleunitprice').val('');
    $('.saleitemdescription').val('');
    $('.saleitemsize').val('');
  }

  function clearAllSaleField(){
    $('.saleorderno').val(''),
    $('.salecustomername').val(''),
    $('.saletotalprice').val(''),
    $('.salepurchasedate').val(''),
    $('.salepayementmethod').prop('selectedIndex', 0).focus(),
    $('.salepoints').val(''),
    $('.salecashiername').val('')
  }
  
  $('.saleinventoryaddsave').click(function(){
    let addItem = {
        itemCode:$('.saleitemcode').val(),
        itemDescription:$('.saleitemdescription').val(),
        unitPriceSale:$('.saleunitprice').val(),
        quantity:$('.saleitemqty').val(),
        size:$('.saleitemsize').val()
    }
    clearSaleInventoryAddField();
    dataToSalesItemQueTable(addItem)
  });

  function dataToSalesItemQueTable(item){
    let row = `<tr>
                <th scope="row">${item.itemCode}</th>
                <td>${item.itemDescription}</td>
                <td>${item.unitPriceSale}</td>
                <td>${item.quantity}</td>
                <td>${item.size}</td>
                <td>
                    <button class="saleitemrowremove">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
              </tr>`;
  
    $(".saleitemtable").append(row);
    //itemQueDataToAddItemPopUpForm();
  }

  function itemQueDataToAddItemPopUpForm(){
    $(".saleitemtable tr").attr('style','cursor: pointer');
    $(".saleitemtable tr").click(function(){
        $('.inventoryaddpopupform').attr('style', 'display: block');
        $('.saleitemcode').val($(this).children().eq(0).text()),
        $('.saleitemdescription').val($(this).children().eq(1).text()),
        $('.saleunitprice').val($(this).children().eq(2).text()),
        $('.saleitemqty').val($(this).children().eq(3).text()),
        $('.saleitemsize').val($(this).children().eq(4).text())
    });
  }

  $(document).on('click', '.saleitemrowremove', function(){
    $(this).closest('tr').remove();
});

function getChooseAllItem() {
    tableData.length=0;
    $('.saleitemtable tbody tr').each(function() {
        let rowData = {
            inventory: {
                itemCode: $(this).find('th').text()
            },
            itemDescription: $(this).find('td:nth-child(2)').text(),
            unitPriceSale: parseFloat($(this).find('td:nth-child(3)').text()),
            quantity: parseInt($(this).find('td:nth-child(4)').text()),
            size: parseInt($(this).find('td:nth-child(5)').text()),
            sales: {
                orderNo: $('.saleorderno').val()
            }
        };

        tableData.push(rowData);
    });
};