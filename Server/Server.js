const express = require ('express');
const bodyParser = require ('body-parser');
const mqtt = require('mqtt');

const app = express();
const port = 8081;

const mqtt_broker_address = "mqtt://192.168.0.107";
const mqttPublishChannel = "your/command/channel";
const mqttSubscribeChannel = "your/result/channel";

app.use(bodyParser.json());

app.get('', (req,res)=>{
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

    client.on('message',async (topic, receivedMessage)=>{
        if (topic === mqttSubscribeChannel){
            client.unsubscribe(mqttSubscribeChannel);
            const key = receivedMessage.toString();
            console.log(`Received message on ${mqttSubscribeChannel}: ${key}`);
        }
    });

});

app.listen(port, ()=>{
    console.log(`Server running on: http://localhost:${port}`);
});

process.on('SIGINT', () =>{
    client.end();
    process.exit();
})