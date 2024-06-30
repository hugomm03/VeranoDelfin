const express = require ('express');
const bodyParser = require ('body-parser');
const mqtt = require('mqtt');
//const fs = require('fs');

const app = express();
const port = 8000;

const mqtt_broker_address = "mqtt://192.168.100.205";
const mqttPublishChannel = "your/command/channel";
const mqttSubscribeChannel = "your/result/channel";

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

let receivedData = {};

app.post('/data', function (req,res){
    receivedData = req.body.name;
    console.log("body =>", receivedData); //output {from: "MEX", to: "LIM"}
    res.send("Data Recibida");
});



app.get('/data', function (req,res){
    //const fileWriteStream = fs.createWriteStream('./Aplicacion/assets/EmoStyle.jpg');
    //var {body} = req;
    const client = mqtt.connect(mqtt_broker_address);

    //console.log(Json.stringify(receivedData));
    var message = JSON.stringify(receivedData);
    console.log(message);

    client.subscribe(mqttSubscribeChannel, async (err) =>{
        if (err){
            console.error('Error al suscribir al canal: ', err);
            client.end(); // Close the client connection
            return res.status(500).send('Error suscribiendo al canal:');
        } else{
            await client.publish(mqttPublishChannel, message, ()=>{
                console.log(`Mensaje publicado a ${mqttPublishChannel}:${message}`);
            });
        }

    });

    client.on('message', async (topic, receivedMessage)=>{
        if (topic === mqttSubscribeChannel){
            client.unsubscribe(mqttSubscribeChannel);
            const key = receivedMessage.toString();
            console.log(`Received message on ${mqttSubscribeChannel}: ${key}`);
            client.end(); // Close the client connection
            return res.status(200).send('No JALA NADA');
        }
    });
    
    client.on('error', (err) => {
        console.error('MQTT connection error:', err);
        client.end(); // Close the client connection
        res.status(500).send('MQTT connection error');
    });

});

app.listen(port, ()=>{
    console.log(`Server running on: http://localhost:${port}/data`);
});

process.on('SIGINT', () =>{
    //client.end();
    process.exit();
})