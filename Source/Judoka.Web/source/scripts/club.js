
currentUser = localStorage.getItem('currentUser');
if (!currentUser) { window.location.href = "/"; } 

var clubsStore = localStorage.getItem('clubs');
if (!clubsStore) {
    fetch("/data/clubs.json",
        {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.clubs);
            localStorage.setItem('clubs', JSON.stringify(response.clubs));

            updateData();
        });
}
else {
    updateData();
}


function updateData()
{
    var user = JSON.parse(currentUser);
    var clubsStore = localStorage.getItem('clubs');
    var clubs = JSON.parse(clubsStore);

    clubs.forEach(club => {
        if (club.name == user.club)
        {
            document.getElementById("clubname").innerHTML = club.name;
            document.getElementById("cluburl").innerHTML = club.url;
            document.getElementById("clubcontact").innerHTML = club.contact;
            document.getElementById("clubphone").innerHTML = club.phone;
            document.getElementById("gmap_canvas").src = club.googlemaps;

            gmap_canvas
        }
    });


}








