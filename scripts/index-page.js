
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


const keys = "7dc02ca5-13cc-4aa2-9c34-94ca079c0ad7"
axios
.get(`https://project-1-api.herokuapp.com/comments?api_key=${keys}`)
.then(result=>{
    const allComments = result.data;
    
    let comments = document.createElement('section');
    comments.classList.add('comments');
    
    for(let i=0;i<allComments.length;i++){
        let comment = document.createElement('div');
        comment.classList.add('comment');
        let commentContent = document.createElement('div');
        commentContent.classList.add('comment__content');
        let commentPerson = document.createElement('div');
        commentPerson.classList.add('comment__person');
     
     
       let showsImg = document.createElement('img');
       showsImg.src ='#';
       showsImg.alt = 'photo';
       showsImg.classList.add('comment__shows__img');
       comment.appendChild(showsImg);
     
       let showsName = document.createElement('span');
       showsName.innerText = allComments[i].name;
       commentPerson.appendChild(showsName);
       showsName.classList.add('comment__shows__name')
       
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
       let showsDate = document.createElement('span');
       showsDate.innerText = dateString;
       showsDate.classList.add('comment__shows__date')
     
       commentPerson.appendChild(showsDate); 
       commentContent.appendChild(commentPerson);
     
       let showsContent = document.createElement('p');
       showsContent.innerText = allComments[i].comment;
       showsContent.classList.add('comment__shows__content')
       commentContent.appendChild(showsContent);
       
       comment.appendChild(commentContent);
     
       comments.appendChild(comment);
     
       let showsDevider = document.createElement('hr');
       showsDevider.classList.add('comment__shows__devider');
       comments.appendChild(showsDevider);
    }

    let formComment = document.querySelector('.form-comment');
    formComment.appendChild(comments);
    
})
.catch(err=>{
    console.log(err)
})


//add new comment
let form = document.querySelector(".form");
form.addEventListener('submit',event=>{
    event.preventDefault();

    const removed = document.querySelector('.comments')
    removed.remove();
    
    axios
    .post(`https://project-1-api.herokuapp.com/comments?api_key=${keys}`,{
      name: event.target.commenter.value,
      comment:event.target.commentcontent.value,
    })
    .then(result=>{
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${keys}`)
    .then(result=>{
      const allComments2 = result.data
      
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
       showsImg.src = '#';
       showsImg.alt = 'img';
       showsImg.classList.add('comment__shows__img');
       comment.appendChild(showsImg);
      
       let showsName = document.createElement('span');
       showsName.innerText = singleComment.name;
       commentPerson.appendChild(showsName);
       showsName.classList.add('comment__shows__name')
       
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
       let showsDate = document.createElement('span');
       showsDate.innerText = dateString;
       showsDate.classList.add('comment__shows__date')
      
       commentPerson.appendChild(showsDate); 
       commentContent.appendChild(commentPerson);
      
       let showsContent = document.createElement('p');
       showsContent.innerText = singleComment.comment;
       showsContent.classList.add('comment__shows__content')
       commentContent.appendChild(showsContent);
       
       comment.appendChild(commentContent);
      
       comments.appendChild(comment);
      
       let showsDevider = document.createElement('hr');
       showsDevider.classList.add('comment__shows__devider');
       comments.appendChild(showsDevider); 
      }


      for(let i=allComments2.length-1;i>=0;i--){
        displayComment(allComments2[i]);
      }
    formComment = document.querySelector('.form-comment');
    formComment.appendChild(comments);
    document.querySelector(".form").reset();

    })
    .catch()

    })
    .catch(err=>{console.log(err)})  
})
    

