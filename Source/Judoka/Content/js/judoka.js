
$(document).ready(function () {

    var editeblespans = document.getElementsByClassName("EditebleSpan");

    for (var i = 0; i < editeblespans.length; i++) {
        editeblespans[i].addEventListener('input', function () {
            document.getElementById("EditJudokaSaveButton").style.visibility = "visible";
        }, false);
    }
});



$("#EditJudokaSaveButton").click(function () {
    var result = false;
    var Judoka = { "Id": $("#JudokaId").text(), "FirstName": $("#JudokafirstName").text(), "LastName": $("#JudokaLastName").text() };
    
    $.ajax({
        type: "POST",
        url: 'http://localhost:8350/api/Judoka/UpdateJudoka',
        data: JSON.stringify(Judoka),
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        processData: true,
        success: function (data, status, xhr) {
            alert("Whoho: " + status);
            result = true;
        },
        error: function (xhr) {
            alert("Dao! " + xhr.responseText);
        }
    });

        this.style.visibility = "hidden";
});