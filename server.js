var mqtt    = require('mqtt');
var client  = mqtt.connect(`mqtt://${process.env.MQTT_BROKER_HOST}:${process.env.MQTT_BROKER_PORT}`,{clientId:"mqtt_siemens_demo"});
console.log("connected flag  " + client.connected);


client.on("connect",function(){	
console.log("connected  "+ client.connected);
});

//handle errors
client.on("error",function(error){
console.log("Can't connect" + error);
process.exit(1)
});


var topic="testtopic";
console.log("subscribing to topics");
client.subscribe(topic,{qos:1});

//handle incoming messages
client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});