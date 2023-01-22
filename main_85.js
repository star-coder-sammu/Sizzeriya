menu_list_array =
 [ "Veg Margherita Pizza",
   "Chiken Tandoori Pizza", 
   "Veg Supreame pizza",
   "paneer Tikka Pizza",
   "Delux Veggie Pizza " ,
   "Veg Extravaganza"   ]; 

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as 
	var item = document.getElementById("add_item").value;
    //Use the  function to push the item into menu_list_array
    menu_list_array.push(item);
}

