function scrollBtn(){
    window.addEventListener('scroll', function(){
        let scrollDistance = window.scrollY;
        if(document.querySelectorAll('.scroll-btn')){


        const scrollButton = document.querySelectorAll('.scroll-btn').forEach((item) =>{
            if(scrollDistance > 1000){
                item.classList.add('active')
            } else if(scrollDistance < 1000){
                item.classList.remove('active')
            }
            item.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
    
                    behavior: 'smooth',
                })  
            })
        })
    }
    })
}

export default scrollBtn