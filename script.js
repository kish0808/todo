$(document).ready(function () {
  TodoList = [];//d array task 
  $('#addItem').on('click', addItem);

   // add item
  function addItem() {
    var newTodoTask = $('#newTodo').val();
   if (newTodoTask == "" || newTodoTask== undefined ){
    alert("please Enter something ");
    return false;
   }

   if($('#addItem').html()=="ADD"){
      //push in array
    TodoList.push(newTodoTask);
    $('#newTodo').val("");        
    listTask();
    
  }
  else if ($('#addItem').html()=="SAVE")
{ 
 var saveTodoId=$('#newTodo').attr('indexid'); 
 TodoList[saveTodoId] = $('#newTodo').val();
 $('#newTodo').val(""); 
  listTask(); 

}
  }
  //print todos task
  function listTask() {
    $('#todos').html("");    
    for (i = 0; i < TodoList.length;i++) {         
      $('#todos').append('<div>'+ TodoList[i]+ '<span class="glyphicon glyphicon-trash deleteItem" delete-id='+i+' ></span>'+ '<span class="glyphicon glyphicon-edit editItem" data-id='+i+'></span> '+ '<span class="glyphicon glyphicon-ok selectItem" select-id='+i+' ></span> </div>');   
    }  
    $('.glyphicon-edit').on('click', editItem);//on click edit 
    $('.glyphicon-trash').on('click', deleteItem);//on click delete icon
    $('.glyphicon-ok').on('click',selectItem)//on  click check icon
  }

  //Edit toodotask
function editItem(){

        todoItemId=$(this).attr('data-id');
        $("#newTodo").val(TodoList[todoItemId]); 
        $('#newTodo').attr('indexid',todoItemId);
        $('#addItem').html("SAVE");

}

//delet todo task
function deleteItem(){
  var newdeleteId= $(this).attr('delete-id'); //get the index value 
 TodoList.splice(newdeleteId,1 );
 // TodoList.splice();
 $('#todos').html(""); //clear
 listTask();//print

}

//check todotask
function selectItem(){
//  var  newSelectItemId  = $(this).attr('select-id');
$(this).parent('div').toggleClass("done");
}

});
