
const keys = "7dc02ca5-13cc-4aa2-9c34-94ca079c0ad7"
axios
.get(`https://project-1-api.herokuapp.com/showdates?api_key=${keys}`)
.then(result=>{
const main = document.querySelector('.shows__main');
const showList = document.createElement('div');
showList.classList.add('shows__list');


const showsMainTitle = document.createElement('h1');
showsMainTitle.classList.add('shows__maintitle');
showsMainTitle.innerText = 'Shows';
showList.appendChild(showsMainTitle);


const showsMainContent = document.createElement('div');
showsMainContent.classList.add('shows__maincontent');

function createTabletTitle(){
    const titleListMobile = document.createElement('ul');
    titleListMobile.classList.add('shows__title--tablet');

    const showsDateTitle2 = document.createElement('li');
    const showsVenueTitle2 = document.createElement('li');
    const showsLocationTitle2 = document.createElement('li');
    showsDateTitle2.innerText = 'DATE';
    showsVenueTitle2.innerText = 'VENUE';
    showsLocationTitle2.innerText = 'LOCATION';

    showsDateTitle2.classList.add('shows__title--tablet1');
    showsVenueTitle2.classList.add('shows__title--tablet2');
    showsLocationTitle2.classList.add('shows__title--tablet3');

    titleListMobile.appendChild(showsDateTitle2);
    titleListMobile.appendChild(showsVenueTitle2);
    titleListMobile.appendChild(showsLocationTitle2);

    showsMainContent.appendChild(titleListMobile);
    }
createTabletTitle();

const shows = result.data
console.log(shows)
    shows.forEach(eve=>{
        //create shows_card and append to showlist
        const showCard = document.createElement('ul');
        showCard.classList.add('shows__card');
        showsMainContent.appendChild(showCard);
    
        //create three title elements
        const showsDateTitle = document.createElement('li');
        const showsVenueTitle = document.createElement('li');
        const showsLocationTitle = document.createElement('li');
    
        showsDateTitle.innerText = 'DATE';
        showsVenueTitle.innerText = 'VENUE';
        showsLocationTitle.innerText = 'LOCATION';
    
        showsDateTitle.classList.add('shows__title');
        showsVenueTitle.classList.add('shows__title');
        showsLocationTitle.classList.add('shows__title');
        
        //create show card-devider add card and devider
        const showsCardDevider = document.createElement('div');
        showsCardDevider.classList.add('shows__carddevider');
    
        //add each part's title and content
        const currentDate = new Date(eve.date);
        showCard.appendChild(showsDateTitle);
        const showsDate = document.createElement('li');
        showsDate.innerText = currentDate.toDateString();
        showsDate.classList.add('shows__date');
        showCard.appendChild(showsDate);
        
        showCard.appendChild(showsVenueTitle);
        const showsVenue = document.createElement('li');
        showsVenue.innerText = eve.place;
        showsVenue.classList.add('shows__venue');
        showCard.appendChild(showsVenue);
    
      
        showCard.appendChild(showsLocationTitle);
        const showsLocation = document.createElement('li');
        showsLocation.innerText = eve.location;
        showsLocation.classList.add('shows__location');
        showCard.appendChild(showsLocation);
        
        const showsButton = document.createElement('button');
        showsButton.innerText = 'BUY TICKETS';
        showsButton.classList.add('shows__button');
        showCard.appendChild(showsButton);
        showsCardDevider.append(showCard);
    
        showsMainContent.appendChild(showsCardDevider);
      
    }) 
    showList.appendChild(showsMainContent);
    main.appendChild(showList); 

    
    const clickElement = document.querySelectorAll(".shows__card");
    for(let i =0;i<shows.length;i++){
    clickElement[i].addEventListener('mouseover',eve=>{
        clickElement[i].classList.add('shows__card--hover');
    })
    clickElement[i].addEventListener('mouseout',eve=>{
        clickElement[i].classList.remove('shows__card--hover');
    })
    clickElement[i].addEventListener('click',event=>{
      for(let j=0;j<shows.length;j++){
        if(clickElement[j].classList.contains('shows__card--click') &&(i!=j)){
            clickElement[j].classList.remove('shows__card--click');
        }
      }
    clickElement[i].classList.remove('shows__card--hover');
    clickElement[i].classList.add('shows__card--click');
    })
    
}

})
.catch(err=>{
    console.log(err)
})


