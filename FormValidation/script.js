const actualCost = document.getElementById('ActualCost');
const discount = document.getElementById('discount');

//validation 

actualCost.addEventListener('change', () => {
    if (actualCost.value <= 0 || actualCost.value === "")
        alert("Actual Cost cant be negative or 0")
})

discount.addEventListener('change', () => {
    if (discount.value <= 0 || discount.value === "")
        alert("Actual Cost cant be negative or 0")
})
function validate() {
    const regex = /^[7-9]\d{9}$/
    if (regex.test(document.getElementById('mobileNumber').value)) {
        const discountedPrice = parseInt(actualCost.value) - (parseInt(actualCost.value) * (parseInt(discount.value) / 100));
        localStorage.setItem('Name', document.getElementById('name').value)
        localStorage.setItem('mobileNumber', document.getElementById('mobileNumber').value)
        localStorage.setItem('description', document.getElementById('description').value)
        localStorage.setItem('actualCost', document.getElementById('ActualCost').value)
        localStorage.setItem('discount', document.getElementById('discount').value)
        localStorage.setItem('inStock', document.getElementById('instock').value)
        localStorage.setItem('dod', document.getElementById('dod').value)
        localStorage.setItem('final Cost', discountedPrice)

        const str = `Name ${localStorage.getItem("Name")},
            Mobile Number ${localStorage.getItem("mobileNumber")}
            description ${localStorage.getItem("description")}
            Date of Delivery ${localStorage.getItem("dod")}
            Actual Cost ${localStorage.getItem('actualCost')}
            Discount ${localStorage.getItem('discount')}
            In-stock ? ${localStorage.getItem('inStock')}
            Final Cost ${localStorage.getItem('final Cost')}`
        alert(str)
    }
    else {
        alert('add valid phone number')
    }
}


