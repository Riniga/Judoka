function toogleVisibleForm(form)
{
    hideAll();
    document.getElementById(form).style.display = "block"; 
}


function hideAll()
{
    document.getElementById('link_login').style.display = "none";
    document.getElementById('link_user').style.display = "none";
}

function refresh()
{
    currentUser = localStorage.getItem('currentUser');
    if (currentUser)
    {
        toogleVisibleForm('link_user');
        var user = JSON.parse(currentUser);
        document.getElementById('user_firstname').innerHTML = user.firstname;
        document.getElementById('loggedin_welcome').innerHTML = "Välkommen " + user.firstname + " " + user.lastname;
        document.getElementById('loggedin_club').innerHTML = user.club;

    }
    else
    {
        toogleVisibleForm('link_login');
    }
}


refresh();