
const formComment = document.querySelector('.form-comment');

const keys = "d985fb86-234e-4e66-aae8-765102915871"
axios
.get(`https://project-1-api.herokuapp.com/comments?api_key=${keys}`)
.then(result=>{
    const allComments = result.data;
    allComments.forEach(comment=>{
      showComments(comment)
    })
})
.catch(err=>{
    console.log(err)
})


//add new comment
const form = document.querySelector(".form");
form.addEventListener('submit',event=>{
    event.preventDefault();

    const removed = document.querySelectorAll('.comment')
    for(let i=0;i<removed.length;i++){
      removed[i].parentNode.removeChild(removed[i])
    }
    
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
      const allComments3 = allComments2.sort((a,b)=>b.timestamp-a.timestamp)
      allComments3.forEach(ele=>{
        showComments(ele)
      })
      document.querySelector(".form").reset();

    })
    .catch()

    })
    .catch(err=>{console.log(err)})  
})
    

function showComments(ele) {

  const comment = document.createElement('div');
  comment.classList.add('comment');
  const commentContent = document.createElement('div');
  commentContent.classList.add('comment__content');
  const commentPerson = document.createElement('div');
  commentPerson.classList.add('comment__person');


  const showsImg = document.createElement('img');
  showsImg.src ='../assets/Images/Mohan-muruge.jpg';
  showsImg.alt = 'photo';
  showsImg.classList.add('comment__shows__img');
  comment.appendChild(showsImg);

  const showsName = document.createElement('span');
  showsName.innerText = ele.name;
  commentPerson.appendChild(showsName);
  showsName.classList.add('comment__shows__name')
  
  const currentDate = new Date(ele.timestamp);
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth()+1;
  const currentYear = currentDate.getFullYear();
  let dateString;
 if(currentMonth>=10){
  dateString = `${currentMonth}/${currentDayOfMonth}/${currentYear}`
 }else{
   dateString = `0${currentMonth}/${currentDayOfMonth}/${currentYear}`
 }
  const showsDate = document.createElement('span');
  showsDate.innerText = dateString;
  showsDate.classList.add('comment__shows__date')

  commentPerson.appendChild(showsDate); 
  commentContent.appendChild(commentPerson);

  const showsContent = document.createElement('p');
  showsContent.innerText = ele.comment;
  showsContent.classList.add('comment__shows__content')
  commentContent.appendChild(showsContent);
  
  comment.appendChild(commentContent);

  formComment.appendChild(comment);
}

