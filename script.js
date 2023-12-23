function label_create(ele_name, attr_name1, attr_vlaue_2, content) {
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name1, attr_vlaue_2);
    ele.innerHTML = content;
    return ele;
}

function break_create() {
    var br = document.createElement("br");
    return br;
}

function input_create(ele_name, attr_name_1, attr_value_1, id_val_1) {
    var input = document.createElement(ele_name);
    input.setAttribute(attr_name_1, attr_value_1);
    input.id = id_val_1;
    return input;

}
var firstname = label_create("label", "for", "firstname", "Firstname")
var middlename = label_create("label", "for", "middlename", "Middlename")
var lastname = label_create("label", "for", "lastname", "Lastname");
var email = label_create("label", "for", "email", "Email");
var password = label_create("label", "for", "password", "Password");
var ph = label_create("label", "for", "number", "Phone Number");
var input1 = input_create("input", "type", "firstname", "firstname");
var input2 = input_create("input", "type", "middlename", "middlename");
var input3 = input_create("input", "type", "lastname", "lastname");
var input4 = input_create("input", "type", "email", "email");
var input5 = input_create("input", "type", "password", "password");
var input6 = input_create("input", "type", "number", "number");
var break1 = break_create();
var break2 = break_create();
var break3 = break_create();
var break4 = break_create();
var break5 = break_create();
var break6 = break_create();
var break7 = break_create();
var break8 = break_create();
var break9 = break_create();
var break10 = break_create();
var break11 = break_create();
var break12 = break_create();
document.body.append(firstname, break1, input1, break2, middlename, break3, input2, break4, lastname, break5, input3, break6, email, break7, input4, break8, password, break9, input5,break10,ph,break11,input6,break12);


