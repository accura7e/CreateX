

function playVideo(){
    const bureauVideo = document.querySelector('.bureau__video')
    const bureauVideoPlay = document.querySelector('.bureau__video-play')
    const bureauVideoStop = document.querySelector('.bureau__video-stop')
    const bureauOverlay = document.querySelector('.bureau__video-overlay')

    bureauVideoPlay.addEventListener('click', function(){
        bureauOverlay.classList.add('hidden')
        bureauVideoPlay.classList.add('hidden-btn')
        bureauVideoStop.classList.add('bureau__video-stop-left')
        bureauVideo.play()
    })
    bureauVideoStop.addEventListener('click', function(){
        bureauOverlay.classList.remove('hidden')
        bureauVideoPlay.classList.remove('hidden-btn')
        bureauVideoStop.classList.remove('bureau__video-stop-left')
        bureauVideo.pause()
    })
   
}

export default playVideo