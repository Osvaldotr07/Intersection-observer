const $video = document.querySelector('#videito')
const options = {
    //root: document.querySelector('body')
    rootMargin: '0px 0px 0px 0px',
    threshold: .5
}
function callback(entries, observer){
    console.log('Call funcionando')
    if(entries[0].isIntersecting) {
        $video.play()
    }
    else {
        $video.pause()
    }
}
const observer = new IntersectionObserver(callback, options)

observer.observe($video)