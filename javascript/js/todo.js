const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //create lists array it starts empty array

function saveToDos(){ //저장
     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify string로 바꿔줌
                           //key        //value 
}

function deleteToDos(li){
    // const li = li01; 
    li.remove();
    // console.log(li)
    // toDos = toDos.filter((toDos) => li.id !== toDos.id);
    // // const newList = localStorage.removeItem(toDos);
    // const A = (a) => {b}
    function filter(toDos) {
         String(toDos.id) == toDos.id;
        console.log(toDos.id == parseInt(toDos.id));
    }
    // return toDos;
}

function deleteTodo(event){
    let li = event.target.parentElement; //button 
    li.remove();
    // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    toDos = toDos.filter(function(deleteList){
        console.log(deleteList);
        return String(deleteList.id) !== li.id; //clicked target요소와
    });
    // toDos = toDos.filter((toDo) => String(toDo.id) !== li.id);
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // console.log(newTodo.text.length)
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText= "❌"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);  //span wrap
    li.appendChild(button) 
    toDoList.appendChild(li);
}

//item을 제거하기 위해서는 filter함수는 새로운 array를 생성한다.

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // input 입력값
    toDoInput.value = "";
    const newToObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newToObj); 
    paintToDo(newToObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("This turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY); //"key"값의 value를 문자로(string)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //key값을 array 형태로
    toDos = parsedToDos; //it's updated 
    parsedToDos.forEach(paintToDo);
}

function makeSum () { 
    // console.log(arguments.length);
     var sum = 0;  for(var i=0; i<arguments.length; i++) {   
         sum += arguments[i] //i indexd의 순서
        //  더하기 할당 연산자(+=)는 오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당합니다. 두 피연산자의 타입이 더하기 할당 연산자의 동작을 결정하며, 덧셈 또는 문자열 연결이 가능합니다.
    } 
    return sum;
    }
    makeSum(4, 7, 8, 9, 10);
    makeSum(1, 2, 3, 4);
    makeSum(67, 42, 10, 7, 8, 91, 11);
