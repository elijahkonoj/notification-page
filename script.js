let num = document.querySelector('.num')
let unReadMessages = document.querySelectorAll('.unread');
let markAll = document.getElementById('mark')


num.innerText = unReadMessages.length;

document.querySelector(".unread").addEventListener("click", myFunction) 
  

function myFunction() {
   unReadMessages.forEach(function(messages, idx) {
      messages.addEventListener("click", () => {
      
         let newUnreadMessages = unReadMessages.length;
        
         if(idx >= 3)  return;
            newUnreadMessages--;
            num.innerText = newUnreadMessages;
         messages.classList.remove("unread");
         
      })
   })
   
}
myFunction();

unReadMessages.forEach((messages)=> {
markAll.addEventListener("click", ()=> {
   num.innerText = 0;
   messages.classList.remove("unread")
   
});})
