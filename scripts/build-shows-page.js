

//create a shows_list section
//create a shows_maintitile section
//create a shows_maincontent section (which includes everything other than title)
//create a tablet title ul and three titles li (inside of li)
//create a card content + divider section
//create a card content section
//create all card elements li + button (and add them into card conetnt)

//access maintitle, add it to shows_list
//access tablet title,add it to maincontent
//loop through the array
     //access every element inside card, and add it to card content section
     //add card content section into card content+devider section
     //access devider, and add it to card content+devider section
     //add card content+devider section into maincontent 
//add maintitle and maincontent into showlist
//add showlist into main

let shows = [
    {date:'Mon Sept 06 2021',venue:'Ronald Lane',location:'San Francisco, CA'},
    {date:'Tue Sept 21 2021',venue:'Pier 3 East',location:'San Francisco, CA'},
    {date:'Fri Oct 15 2021',venue:'View Lounge',location:'San Francisco, CA'},
    {date:'Sat Nov 06 2021',venue:'Hyatt Agency',location:'San Francisco, CA'},
    {date:'Fri Nov 26 2021',venue:'Moscow Center',location:'San Francisco, CA'},
    {date:'Wed Dec 15 2021',venue:'Press Club',location:'San Francisco, CA'}
];

function createTabletTitle(){
    let titleListMobile = document.createElement('ul');
    titleListMobile.classList.add('shows__title--tablet');

    let showsDateTitle2 = document.createElement('li');
    let showsVenueTitle2 = document.createElement('li');
    let showsLocationTitle2 = document.createElement('li');
    showsDateTitle2.innerText = 'DATE';
    showsVenueTitle2.innerText = 'VENUE';
    showsLocationTitle2.innerText = 'LOCATION';

    showsDateTitle2.classList.add('shows__tablettitle1');
    showsVenueTitle2.classList.add('shows__tablettitle2');
    showsLocationTitle2.classList.add('shows__tablettitle3');

    titleListMobile.appendChild(showsDateTitle2);
    titleListMobile.appendChild(showsVenueTitle2);
    titleListMobile.appendChild(showsLocationTitle2);

    showsMainContent.appendChild(titleListMobile);
    }

  


let main = document.querySelector('.main');
let showList = document.createElement('div');
showList.classList.add('shows__list');


let showsMainTitle = document.createElement('h1');
showsMainTitle.classList.add('shows__maintitle');
showsMainTitle.innerText = 'Shows';
showList.appendChild(showsMainTitle);


let showsMainContent = document.createElement('div');
showsMainContent.classList.add('shows__maincontent');

createTabletTitle();


for(let i = 0; i<shows.length;i++){
    //create shows_card and append to showlist
    let showCard = document.createElement('ul');
    showCard.classList.add('shows__card');

    showsMainContent.appendChild(showCard);

    //create three title elements
    let showsDateTitle = document.createElement('li');
    let showsVenueTitle = document.createElement('li');
    let showsLocationTitle = document.createElement('li');

    showsDateTitle.innerText = 'DATE';
    showsVenueTitle.innerText = 'VENUE';
    showsLocationTitle.innerText = 'LOCATION';

    showsDateTitle.classList.add('shows__title');
    showsVenueTitle.classList.add('shows__title');
    showsLocationTitle.classList.add('shows__title');
    
    //create show card-devider add card and devider
    let showsCardDevider = document.createElement('div');
    showsCardDevider.classList.add('shows__carddevider');

    //add each part's title and content
    showCard.appendChild(showsDateTitle);
    let showsDate = document.createElement('li');
    showsDate.innerText = shows[i].date;
    showsDate.classList.add('shows__date');
    showCard.appendChild(showsDate);
    
    showCard.appendChild(showsVenueTitle);
    let showsVenue = document.createElement('li');
    showsVenue.innerText = shows[i].venue;
    showsVenue.classList.add('shows__venue');
    showCard.appendChild(showsVenue);

  
    showCard.appendChild(showsLocationTitle);
    let showsLocation = document.createElement('li');
    showsLocation.innerText = shows[i].location;
    showsLocation.classList.add('shows__location');
    showCard.appendChild(showsLocation);
    
    let showsButton = document.createElement('button');
    showsButton.innerText = 'BUY TICKETS';
    showsButton.classList.add('shows__button');
    showCard.appendChild(showsButton);
    showsCardDevider.append(showCard);

    let showsDevider = document.createElement('hr');
    showsDevider.classList.add('shows__devider');
    showsCardDevider.appendChild(showsDevider); 

    showsMainContent.appendChild(showsCardDevider);

}


showList.appendChild(showsMainContent);
main.appendChild(showList); 