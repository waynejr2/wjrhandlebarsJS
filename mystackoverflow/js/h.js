
window.onload = function() {

var messageMapping = {
  basic: 'msg_box' + ' basic', 
  ad: 'msg_box' + ' ad', 
  notification: 'msg_box' + ' notification', 
  warning: 'msg_box' + ' warning', 
  critical: 'msg_box' + ' critical'
};

//Your data from the server
var yourJSON = '[{"message_type":"basic", "value":"basic test"},{"message_type":"ad", "value":"ad test"},{"message_type":"notification", "value":"notification test"},{"message_type":"warning", "value":"warning test"},{"message_type":"critical", "value":"critical test"}]';

var data = JSON.parse(yourJSON),
    i = 0,
    l = data.length; 

//Update the class names
for(; i < l; i++){
  data[i].msgClass = messageMapping[data[i].message_type];  
}

//Add to the DOM
var source   = $('#template').html();
var template = Handlebars.compile(source);

$('body').append(template({messages:data})); 

}