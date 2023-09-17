let myToDo = [];


// renderList();

function renderList(){
  let htmlAllEle = '';
  for(let i=0;i<myToDo.length;i++){
      let htmlEle = `
          <div>${myToDo[i].taskName}</div> 
          <div>${myToDo[i].dueDate}</div> 
          <button onclick="
          myToDo.splice(${i},1)
          renderList()">Delete</button> 
        `;
      htmlAllEle += htmlEle;
  }
  document.querySelector('.js-todo-render').innerHTML = htmlAllEle;
}

function handleClick(){
      // console.log(myToDo);
      let nameInput= document.querySelector('.js-name');
      let dateInput = document.querySelector('.js-date');
      // console.log(val);
      // console.log(22);
      let taskName = nameInput.value;
      let dueDate = dateInput.value; 
      // console.log('jhi')
      myToDo.push({taskName,dueDate});
      console.log(myToDo);
      nameInput.value = '';
      dateInput.value = '';

      renderList();

}

