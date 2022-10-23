
//create a comments section
//loop through the array
     //create a comment section
    //create a name+date+comment section
    //create a name+date section
     //access the img, and add it to comment section
     //access name, put it into name+date section
     //access date, put it into name+date section
     //put name+date section into name+date+comment section
     //access comment, put it into name+date+comment section
     //put name+date+comment section into comment section
    // put comment section into comments section
//put comments section into main section

let allComments =[
    {img:{src:'../Assets/Images/band.jpg',alt:'Comment'},name:'Connor Walton',date:'02/17/2021',content:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'},
    {img:{src:'../Assets/Images/hero-bio.jpg',alt:'Comment'},name:'Emilie Beach',date:'01/09/2021',content:'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'},
    {img:{src:'../Assets/Images/hero-shows.jpg',alt:'Comment'},name:'Miles Acosta',date:'12/20/2020',content:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];


let comments = document.createElement('section');
comments.classList.add('comments');
function displayComment(singleComment){
   
    let comment = document.createElement('div');
    comment.classList.add('comment');
    let commentContent = document.createElement('div');
    commentContent.classList.add('comment__content');
    let commentPerson = document.createElement('div');
    commentPerson.classList.add('comment__person');
 
 
   let showsImg = document.createElement('img');
   showsImg.src = singleComment.img.src;
   showsImg.alt = singleComment.img.alt;
   showsImg.classList.add('shows__img');
   comment.appendChild(showsImg);
 
   let showsName = document.createElement('span');
   showsName.innerText = singleComment.name;
   commentPerson.appendChild(showsName);
   showsName.classList.add('shows__name')
 
   let showsDate = document.createElement('span');
   showsDate.innerText = singleComment.date;
   showsDate.classList.add('shows__date')
 
   commentPerson.appendChild(showsDate); 
   commentContent.appendChild(commentPerson);
 
   let showsContent = document.createElement('p');
   showsContent.innerText = singleComment.content;
   showsContent.classList.add('shows__content')
   commentContent.appendChild(showsContent);
   
   comment.appendChild(commentContent);
 
   comments.appendChild(comment);
 
   let showsDevider = document.createElement('hr');
   showsDevider.classList.add('shows__devider');
   comments.appendChild(showsDevider); 
}
for(let i=0;i<allComments.length;i++){
  displayComment(allComments[i]);

}
formComment = document.querySelector('.form-comment');
formComment.appendChild(comments);

let form = document.querySelector(".form");
form.addEventListener('submit',event=>{
    event.preventDefault();

    const removed = document.querySelector('.comments')
    removed.remove();
    
    let currentDate = new Date();
    let currentDayOfMonth = currentDate.getDate();
    let currentMonth = currentDate.getMonth()+1;
    let currentYear = currentDate.getFullYear();
    let dateString;
    if(currentMonth>=10){
       dateString = `${currentMonth}/${currentDayOfMonth}/${currentYear}`
    }else{
        dateString = `0${currentMonth}/${currentDayOfMonth}/${currentYear}`
    }
    const newComment= {img:{src:'../Assets/Images/Mohan-muruge.jpg',alt:'img'}, name:event.target.commenter.value, date:dateString, content:event.target.commentcontent.value}
    allComments.push(newComment);

    comments = document.createElement('section');
    comments.classList.add('comments');
    for(let i=0;i<allComments.length;i++){
        displayComment(allComments[i]);
      
      }
    formComment = document.querySelector('.form-comment');
    formComment.appendChild(comments);

    document.querySelector(".form").reset();
})


