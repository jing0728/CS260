function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function onload() {
    auto_grow(document.getElementById("result"));
}
function generate() {
    subject = document.getElementById("subject").value;
    event = document.getElementById("event").value;
    event2 = document.getElementById("event2").value;
    if (subject.length == 0 || event.length == 0 || event2.length == 0)
        return;
    result =
        `　　${subject}${event}what about${subject}I believe we are all familiar with it, but${subject}${event}What is going on? Let me take you through the following.\r\n　　${subject}${event}，which is${event2}，that will maake you be socked${subject}but why${event} will be like that？But the truth is this, I was also very surprised\r\n　　This is the thing about ${subject}${event}what ideas do you have, welcome to tell me in the comments section to discuss it together!`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}

 function audios() {
        var text = document.getElementById("result").value;
        if (text.length<1){
            alert("You haven't generated")
        }else {
            var myAuto = document.getElementById('myaudio');
            var bgm = document.getElementById('bgm');
            document.getElementById('myaudio').src ="http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex="+text;
            myAuto.play();
            bgm.volume = 0.02;
            bgm.play();


        }
    }
    function del() {
        var myAuto = document.getElementById('myaudio');
        myAuto.pause();
        myAuto.load();
        var bgm = document.getElementById('bgm');
        bgm.pause();
        bgm.load();
    }
