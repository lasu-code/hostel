// let form = document.getElementById('generated')
// const input = document.createElement('input')
// var att = document.createAttribute("type");
// att.value = "button";                     
// input.setAttributeNode(att);



let picked = () => {
    document.getElementById('form1').removeAttribute('hidden')
}
let handleInactive = (e)=> {
    e.preventDefault()
    document.getElementById('b1f1').disabled = true
}

function selectHostel(blockID, studentName, flatID, roomID, department) {
    // block, flat, room, names, department, 
    
    alert("Are you sure");
    $("#blockID").val(blockID);
    $("#studentName").val(studentName);
    $("#flatID").val(flatID);
    $("#roomID").val(roomID);
    $("#department").val(department);
    document.getElementById("create_hostel_request").submit();

    // create_hostel_request

}


function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'pk_test_12dd56d50ba1b807087e239adaf89f1b5d0af241', //put your public key here
        email: 'testmasterp@gmail.com', //put your customer's email here
        amount: 1500000, //amount the customer is supposed to pay
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        firstname: 'Test',
        lastname: 'User',
        metadata: {
            custom_fields: [
                {
                    display_name: "LASU Hostel",
                    variable_name: "lasu_hostel",
                    value: "+2347053799622" //customer's mobile number
                }
            ]
        },
        callback: function (response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            console.log(response);
            alert('success. transaction ref is ' + response.reference);
           
        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
}