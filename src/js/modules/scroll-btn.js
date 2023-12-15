function scrollBtn(){
    window.addEventListener('scroll', function(){
        let scrollDistance = window.scrollY;
        scrollBtn = document.querySelector('.scroll-btn')
        if(scrollDistance > 1000){
            scrollBtn.classList.add('active')
        } else if(scrollDistance < 1000){
            scrollBtn.classList.remove('active')
        }
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
            })  
        })
    })
}

export default scrollBtn