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

app.get('/data', (req,res)=>{
    //const fileWriteStream = fs.createWriteStream('./Aplicacion/assets/EmoStyle.jpg');

    const client = mqtt.connect(mqtt_broker_address);
    const message = 'On';

    client.subscribe(mqttSubscribeChannel, async (err) =>{
        if (err){
            console.error('Error al suscribir al canal: ', err);
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
            return res.status(200).send('No JALA NADA');
        }
    });

});

app.listen(port, ()=>{
    console.log(`Server running on: http://localhost:${port}/data`);
});

process.on('SIGINT', () =>{
    client.end();
    process.exit();
})