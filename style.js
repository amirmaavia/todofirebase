function Addfuction(e){
    e.preventDefault();
    console.log("added new todo")
    const todo = document.querySelector('input').value  
    console.log(todo)

    //add
    var database = firebase.database();


UseRef = database.ref().child("users")
function writeuserdata(userId, todo, ){
UseRef.child(userId).set({
    user: todo,
   
})
}

setTimeout(function(){
    console.log("going to user ")
    writeuserdata(Date.now(),todo)
},1500)



//get

    var task_array = [];
    UseRef.on('value', function(snapshot){
        // console.log("get todos", snapshot.val())
        snapshot.forEach(function(childsnapshot){
            var childValue = childsnapshot.val()
            task_array.push(Object.values(childValue));
        for(var i = 0; i< task_array.length; i++){
           console.log(task_array[i]) 
           
        }
        })
})

const form = document.querySelector(".form")

form.addEventListener("submit", Addfuction)
}





