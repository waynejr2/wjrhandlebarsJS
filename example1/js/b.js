
function fun() { 
alert("hello B") 

var messageMapping = {
  basic: 'msg_box', 
  ad: 'msg_box', 
  notification: 'msg_box', 
  warning: 'critical_msg', 
  critical: 'critical_msg'
};

var yourJSON = '[{"message_type":"basic", "value":"test"},{"message_type":"warning", "value":"test"}]';

var data = JSON.parse(yourJSON),
    i = 0,
    l = data.length; 

//Update the class names
for(; i < l; i++){
  data[i].msgClass = messageMapping[data[i].message_type];  
  console.log(i);
}

//Add to the DOM
var source   = $('#template').html();
var template = Handlebars.compile(source);
console.log(template);

 $('body').append(template({messages:data})); 
};

window.onload = fun;