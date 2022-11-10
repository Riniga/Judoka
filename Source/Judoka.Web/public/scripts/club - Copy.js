currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    var user = JSON.parse(currentUser);
    document.getElementById("clubname").innerHTML = user.club
}
else
{
    window.location.href = "/";
}