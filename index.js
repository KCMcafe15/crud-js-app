var selectedRow = null;
function onFormSubmit() {
    event.preventDefault();
    
}

//Retrieve the data
function readformData() {
    var formData = { };
        formData['productCode'] = document.getElementById("productCode").value;
        formData['product'] = document.getElementById("product").value;
        formData['qty'] = document.getElementById("qty").value;
        formData['productPrice'] = document.getElementById("productPrice").value;
        return formData;
}

//Insert the data

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.productCode;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.productPrice;  
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button>Edit</button> <button>Delete</button>';  
}