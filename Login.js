

$(document).ready(function () {    
  
    var email = $('#email').val();;
    var inputPassword= $('#inputPassword').val();

    //functions that will make the appropriate calling
    var baseURL = "https://localhost:44368/";


    $('#login').submit(
        function (event) {
            event.preventDefault();

            // making the ajax call
            $.ajax({
                url: baseURL + 'Token',
                method: 'POST',
                contentType: 'application/x-www-form-urlencoded', 
            data: {
                grant_type: 'password',
                username: email,
                password: inputPassword
            },
                success: function (response) {
                    var accessToken = response.access_token;                   
                    console.log(accessToken);
                    // storing the access token in the local storage
                    localStorage.setItem("access_token", accessToken);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    );
});