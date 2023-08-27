// testing the connection


$(document).ready(function () {
    console.log("Cleadsdfr");
    var fn = $('#FirstName').val();
    var ln = $('#LastName').val();
    var pNum = $('#PhoneNumber').val();
    var em = $('#email').val();;
    var pass = $('#inputPassword').val();
    var cpass = $('#confirmPassword').val();

    let person = {
        firstName: fn,
        lastName: ln,
        phoneNumber: pNum,
        email:em,
        password:pass,
        confirmPassword: cpass        
    };

    //functions that will make the appropriate calling
    var baseURL = "https://localhost:44368/";


    $('#register').submit(
        function (event) {
            event.preventDefault();

            // making the ajax call
            $.ajax({
                url: baseURL + "api/Account/Register",
                method: 'POST',
                data: { user: person },
                success: function (response) {
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        }
    );
});