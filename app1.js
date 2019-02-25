
$(document).ready(function() {
var pubnub = PUBNUB.init({
        publish_key:'pub-c-73a4ab96-8bed-4014-9b5f-7148d5680759',
        subscribe_key : 'sub-c-ab27aba0-3106-11e9-a223-2ae0221900a7'
    });
pubnub.subscribe({
        channel : "chatroom", // Subscribing to PubNub's channel
        message : function(message){
          console.log(message);
          notifyMe(message.text);
        }
    })
});

function notifyMe(message) {
if (message == undefined) {
message = "Hi there! You clicked a button.";
console.log("you click the notification button");
};

if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
else if (Notification.permission === "granted") {
    var notification = new Notification(message);
  }
else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }
}
