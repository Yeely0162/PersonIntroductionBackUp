var flag = 0;

function musicbutton() {
    if (flag == 0) {
        document.getElementById("myaudio").muted = true;
        document.getElementById('myicon').className = "layui-icon layui-icon-mute";
    } else {
        document.getElementById("myaudio").muted = false;
        document.getElementById('myicon').className = "layui-icon layui-icon-speaker";
    }
    flag = !flag;
}

//---------------------------------music-bar---------background-image-------------
// var i=0;
// setInterval(function () {
//     // var array=["https://pic3.zhimg.com/v2-6081d06b88a8651dee96fb9f847d3982_720w.jpg?source=172ae18b",
//     // "https://tse1-mm.cn.bing.net/th/id/R-C.0382d85bc77f87547a0d263d727ac78a?rik=DeEpYNkFDhNYwQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190815%2f2422bae53bbe495eadb8c35e4115f971.JPG&ehk=EXo1y564J33smY0E4iRbb%2b6Uf8x9szvNt480zkQXHyk%3d&risl=&pid=ImgRaw&r=0",
//     // "https://tse2-mm.cn.bing.net/th/id/OIP-C.FIBfqq0nil7oB_AQDWZJTgHaE0?pid=ImgDet&rs=1",
//     // ];
//     var array = "https://pic3.zhimg.com/v2-6081d06b88a8651dee96fb9f847d3982_720w.jpg?source=172ae18b";
//     // $("MusicCloud").css("background-image=url(array[i])");
//     document.getElementById('MusicCloud').style.backgroundImage = array;
//    i++;
//     },200
// )