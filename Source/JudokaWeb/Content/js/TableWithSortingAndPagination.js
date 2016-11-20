function InitializeTableWithSortingAndPagination()
{
    GetData();

    $(".header").click(function (evt) {
        var sortfield = $(evt.target).data("sortfield");
        if ($("#SortField").val() == sortfield) {

            if ($("#SortDirection").val() == "asc") {
                $("#SortDirection").val("desc");
            }
            else {
                $("#SortDirection").val("asc");
            }
        }
        else {
            $("#SortField").val(sortfield);
            $("#SortDirection").val("asc");
        }
        evt.preventDefault();
        GetData();
    });

    $(".pager").click(function (evt) {
        var pageindex = $(evt.target).data("pageindex");
        $("#CurrentPageIndex").val(pageindex);
        evt.preventDefault();
        GetData();
    });
}

function GetData()
{
    var sortfield = $("#SortField").val();
    var sortdirection = $("#SortDirection").val();
    var currentpageindex = $("#CurrentPageIndex").val();
    var pagesize = $("#PageSize").val();
    var url = $("#ApiController").val();
    var query = "";

    if (url == "/api/Judokas")
    {
        query = SetSortFieldsForJudoka(query, sortfield, sortdirection);
        url += "?" + query + "&$skip=" + (currentpageindex * pagesize) + "&$top=" + pagesize;
        LoadDataForJudoka(url);
    }
    if (url == "/api/Clubs") {
        query = SetSortFieldsForClub(query, sortfield, sortdirection);
        url += "?" + query + "&$skip=" + (currentpageindex * pagesize) + "&$top=" + pagesize;
        LoadDataForClubs(url);
    }
    if (url == "/api/Competitions") {
        query = SetSortFieldsForCompetition(query, sortfield, sortdirection);
        url += "?" + query + "&$skip=" + (currentpageindex * pagesize) + "&$top=" + pagesize;
        LoadDataForCompetition(url);
    }
}

function SetSortFieldsForJudoka(query,sortfield, sortdirection)
{
    
    switch (sortfield) {
        case "FirstName":
            query = (sortdirection == "asc" ? "$orderby=FirstName asc" : "$orderby=FirstName desc");
            break;
        case "LastName":
            query = (sortdirection == "asc" ? "$orderby=LastName asc" : "$orderby=LastName desc");
            break;
        case "Personnumber":
            query = (sortdirection == "asc" ? "$orderby=Personnumber asc" : "$orderby=Personnumber desc");
            break;
        case "Id":
            query = (sortdirection == "asc" ? "$orderby=Id asc" : "$orderby=Id desc");
            break;
    }
    return query;
}

function SetSortFieldsForClub(query, sortfield, sortdirection) {
    switch (sortfield) {
        case "Name":
            query = (sortdirection == "asc" ? "$orderby=Name asc" : "$orderby=Name desc");
            break;
        case "Id":
            query = (sortdirection == "asc" ? "$orderby=Id asc" : "$orderby=Id desc");
            break;
    }
    return query;
}
function SetSortFieldsForCompetition(query, sortfield, sortdirection) {
    switch (sortfield) {
        case "Name":
            query = (sortdirection == "asc" ? "$orderby=Name asc" : "$orderby=Name desc");
            break;
        case "Location":
            query = (sortdirection == "asc" ? "$orderby=Location asc" : "$orderby=Location desc");
            break;
        case "EventDate":
            query = (sortdirection == "asc" ? "$orderby=EventDate asc" : "$orderby=EventDate desc");
            break;
        case "Id":
            query = (sortdirection == "asc" ? "$orderby=Id asc" : "$orderby=Id desc");
            break;
    }
    return query;
}

function LoadDataForJudoka(url)
{
    $.getJSON(url, function (data) {
        $("#TableWithSortingAndPagination").find('tr').slice(1, -1).remove();
        for (var i = 0; i < data.length; i++) {
            var html = '<tr>';
            html += '<td>' + data[i].FirstName + '</td>';
            html += '<td>' + data[i].LastName + '</td>';
            html += '<td>' + data[i].Personnumber + '</td>';
            html += '<td>' + data[i].Id + '</td>';
            html += '</tr>';
            $(".pagerRow").before(html);
        }
    });
}

function LoadDataForClubs(url) {
    $.getJSON(url, function (data) {
        $("#TableWithSortingAndPagination").find('tr').slice(1, -1).remove();
        for (var i = 0; i < data.length; i++) {
            var html = '<tr>';
            html += '<td>' + data[i].Name + '</td>';
            html += '<td>' + data[i].Id + '</td>';
            html += '</tr>';
            $(".pagerRow").before(html);
        }
    });
}

function LoadDataForCompetition(url) {
    $.getJSON(url, function (data) {
        $("#TableWithSortingAndPagination").find('tr').slice(1, -1).remove();
        for (var i = 0; i < data.length; i++) {
            var html = '<tr>';
            html += '<td>' + data[i].Name + '</td>';
            html += '<td>' + data[i].Location + '</td>';
            html += '<td>' + data[i].EventDate + '</td>';
            html += '<td>' + data[i].Id + '</td>';
            html += '</tr>';
            $(".pagerRow").before(html);
        }
    });
}