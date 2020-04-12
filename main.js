function mudarVideo(){
var currentDate = new Date();
if (currentDate.getHours() >= 21|| currentDate.getHours() < 5){
    videosList =  ["sleep1.MP4", "sleep2.mp4"];
    defaultVideo.title = "sleepy!";
}else{
videosList =  ["1.MP4", "2.MP4", "3.MP4", "4.mp4"]
}

var s = $("#animojiVideo")
var selectedVideo = videosList[Math.floor(Math.random() * videosList.length)]

var videoPraMudar = $("#defaultVideo")[0];
videoPraMudar.pause();
$("#animojiVideo").attr('src', selectedVideo);
videoPraMudar.load();
videoPraMudar.play();
}
//Tentando consumir uma API!
fetch('https://api.github.com/users/aleseidel/repos')
.then(response => {
    return response.json()
})
.then(data => {
    data.forEach(element => {
        $(".repos").append( '<a class="repoLinks" href="' + element.html_url + '" title="' + (element.description == null ? '""' : element.description) + '">' + element.name + '</a><br>' );
    });
})
.catch(err => {
    console.log("vixe")
})

