
var clubsStore = localStorage.getItem('events');
if (!clubsStore) {
    fetch("/data/events.json",
        {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.clubs);
            localStorage.setItem('events', JSON.stringify(response.events));
            updateData();
        });
}
else {
    updateData();
}


function updateData() {
    var eventsStore = localStorage.getItem('events');
    var events = JSON.parse(eventsStore);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const requestedEvent = urlParams.get('requestedEvent')
    

    events.forEach(event => {

        if (event.id == requestedEvent) {
            console.log(event);
            document.getElementById("eventname").innerHTML = event.name;
            document.getElementById("externalurl").innerHTML = event.link;
            document.getElementById("city").innerHTML = event.city;
            document.getElementById("starttime").innerHTML = event.date;
            document.getElementById("endtime").innerHTML = event.date;
            document.getElementById("type").src = event.type;
        }
    });


}


			
			








