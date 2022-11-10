


// self executing function here
(function () {

    var table = document.getElementById('calendarTable');

    fetch("/data/events.json",
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            response.events.forEach(event => {

                let row = table.insertRow(-1);

                let date = row.insertCell(0);
                let name = row.insertCell(1);
                let type = row.insertCell(2);
                let club= row.insertCell(3);
                let city = row.insertCell(4);

                date.innerText = event.date;

                var link = document.createElement('a');
                link.setAttribute('href', 'event.html?requestedEvent=' + event.id);
                link.setAttribute('html', event.name);
                link.appendChild(document.createTextNode(event.name));
                name.appendChild(link);

                type.innerText = event.type;
                club.innerText = event.club;
                city.innerText = event.city;


                //console.log(event);
            });
            
        });


    

})();

