import paho.mqtt.publish as publish

mqtt_broker_address = "192.168.0.107"
mqtt_channel = "your/command/channel"

message = "On"

publish.single(mqtt_channel,message,hostname=mqtt_broker_address)