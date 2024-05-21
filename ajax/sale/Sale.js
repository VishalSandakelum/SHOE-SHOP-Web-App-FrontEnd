let salesURI = 'http://localhost:8080/app/api/v0/sales'

$('.salealldataget').click(function(){
    $.ajax({
        url:salesURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            console.log(resp);
            $('.saletable td').parent().remove();
            for(var i in resp){
                for(var x in resp[i].inventory){
                    let id = resp[i].inventory[x].id;
                    let itemCode = resp[i].inventory[x].inventory.itemCode;
                    let itemDescription = resp[i].inventory[x].itemDescription;
                    let size = resp[i].inventory[x].size;
                    let unitPriceSale = resp[i].inventory[x].unitPriceSale;
                    let quantity = resp[i].inventory[x].quantity;
                    let orderNo = resp[i].orderNo;
                    let customerName = resp[i].customerName;
                    let totalPrice = resp[i].totalPrice;
                    let purchaseDate = resp[i].purchaseDate;
                    let paymentMethod = resp[i].paymentMethod;
                    let addedPoints = resp[i].addedPoints;
                    let cashierName = resp[i].cashierName;

                    let sale = Object.assign({},Sales);
                    sale.id = id;
                    sale.itemCode = itemCode;
                    sale.itemDescription = itemDescription;
                    sale.size = size;
                    sale.unitPriceSale = unitPriceSale;
                    sale.quantity = quantity;
                    sale.orderNo = orderNo;
                    sale.customerName = customerName;
                    sale.totalPrice = totalPrice;
                    sale.purchaseDate = formatDate(purchaseDate);
                    sale.paymentMethod = paymentMethod;
                    sale.addedPoints = addedPoints;
                    sale.cashierName = cashierName;

                    AllSales.push(sale);
                    dataToSalesTable(sale);
                }
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});