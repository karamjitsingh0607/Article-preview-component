let articleShareButton=document.getElementById('article-button-section');

function myMedia(media){
    if(media.matches){
        articleShareButton.classList.remove('active');
        articleShareButton.classList.toggle('active-media');
    }else{
        articleShareButton.classList.remove('active-media');
        articleShareButton.classList.toggle('active');
    }
}
articleShareButton.addEventListener('click',()=>{
    let matching=window.matchMedia('(max-width: 650px)')
    document.getElementById('share-info').classList.toggle('active');
    myMedia(matching);
    articleShareButton.querySelector('.icon-share path').classList.toggle('active');
});



