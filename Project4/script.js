const backgroundImgs = ['assets/background1.jpg','assets/background2.jpg','assets/background3.jpg']
var i=0;
function changeBackgroundImage(){
    document.querySelector('body').style.backgroundImage = `url(${backgroundImgs[i]})`;
    i++;
    if (i >= backgroundImgs.length){
        i=0;
    };
}


setInterval(changeBackgroundImage, 3000);