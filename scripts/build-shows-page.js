


let shows = [
    {date:'Mon Sept 06 2021',venue:'Ronald Lane',location:'San Francisco, CA'},
    {date:'Tue Sept 21 2021',venue:'Pier 3 East',location:'San Francisco, CA'},
    {date:'Fri Oct 15 2021',venue:'View Lounge',location:'San Francisco, CA'},
    {date:'Sat Nov 06 2021',venue:'Hyatt Agency',location:'San Francisco, CA'},
    {date:'Fri Nov 26 2021',venue:'Moscow Center',location:'San Francisco, CA'},
    {date:'Wed Dec 15 2021',venue:'Press Club',location:'San Francisco, CA'}
];
let showList = document.createElement('ul');
showList.classList.add('shows_list');
let main = document.querySelector('.main');
main.appendChild(showList);



for(let i = 0; i<shows.length;i++){
    let showsDateTitle = document.createElement('li');
    let showsVenueTitle = document.createElement('li');
    let showsLocationTitle = document.createElement('li');

    showsDateTitle.innerText = 'DATE';
    showsVenueTitle.innerText = 'VENUE';
    showsLocationTitle.innerText = 'LOCATION';

    showsDateTitle.classList.add('shows__title');
    showsVenueTitle.classList.add('shows__title');
    showsLocationTitle.classList.add('shows__title');

    showList.appendChild(showsDateTitle);

    let showsDate = document.createElement('li');
    showsDate.innerText = shows[i].date;
    showsDate.classList.add('shows__date');
    showList.appendChild(showsDate);

    showList.appendChild(showsVenueTitle);

    let showsVenue = document.createElement('li');
    showsVenue.innerText = shows[i].venue;
    showsVenue.classList.add('shows__venue');
    showList.appendChild(showsVenue);

    showList.appendChild(showsLocationTitle);

    let showsLocation = document.createElement('li');
    showsLocation.innerText = shows[i].location;
    showsLocation.classList.add('shows__location');
    showList.appendChild(showsLocation);
}
