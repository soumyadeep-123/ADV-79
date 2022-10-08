menu_list_items = ["Cheese Sandwich",  " Burger",  " Salad",  " Lemon juice",  " Margherita Pizza"];

function run()
{
  document.getElementById("menu_list_items").innerHTML = menu_list_items;
}

function add_new_menu_item()
{
  new_menu_item = 
    document.getElementById("new_menu_item").value;
  menu_list_items.push(new_menu_item);
  menu_list_items.sort();
  document.getElementById("menu_list_items").innerHTML = menu_list_items;
}