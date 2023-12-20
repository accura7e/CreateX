function filterWork(){

        const filterItems = document.querySelectorAll('.project-card')
        if(document.querySelector('.filter__items')){
            document.querySelector('.filter__items').addEventListener('click', event => {
                if(!event.target.dataset['filter']) return false;
    
                let filterWorkClass = event.target.dataset['filter']
                filterItems.forEach( element => {
                    element.classList.remove('card-hide')
                    element.style.maxWidth = 390 + 'px';
                    element.style.maxHeight = element.scrollHeight + 'px';
    
    
    
                    setTimeout(function(){ element.querySelector('.project-card__desc').style.opacity = 1},700);
                    
                    if(!element.classList.contains(filterWorkClass) && filterWorkClass!== 'all'){
                        element.classList.add('card-hide')
                        element.style.maxWidth = 0;
                    
    
                    }
                })
            })
        }



}

export default filterWork