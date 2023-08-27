$(document).ready(function () {    
  
    var email = $('#email').val();
    //functions that will make the appropriate calling
    var baseURL = "https://localhost:44368/";

    var accessToken = localStorage.getItem("access_token");

    $('#test').submit(
        function (event) {
            event.preventDefault();

            // making the ajax call
            $.ajax({
                url: baseURL + '',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + accessToken
                },
                success: function (response) {
                    console.log(response);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    );
});