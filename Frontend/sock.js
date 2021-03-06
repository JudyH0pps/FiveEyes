let stompClient = null;

const SERVER_URL = 'http://t4coach42.p.ssafy.io:8080/';

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    const socket = new SockJS(SERVER_URL + 'websocket');
    stompClient = Stomp.over(socket);
    // SockJS와 stomp client를 통해 연결을 시도.
    stompClient.connect({}, (frame) => {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/chat', function (chat) {
            console.log('chat');
            showGreeting(JSON.parse(chat.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    // /app/hello로 JSON 파라미터를 메세지 body로 전송.
    stompClient.send("/app/chat", {}, JSON.stringify({ 'name': $("#name").val() }));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

// $(function () {
//     $("form").on('submit', function (e) {
//         e.preventDefault();
//     });
//     $("#connect").click(function () { connect(); });
//     $("#disconnect").click(function () { disconnect(); });
//     $("#send").click(function () { sendName(); });
// });


connect();

fetch('http://t4coach42.p.ssafy.io:8080/test/2', { method: 'POST' })
    .then(res => res.json())
    .then(res => console.log(res));