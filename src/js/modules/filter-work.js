function filterWork(){

        const filterItems = document.querySelectorAll('.project-card')

        document.querySelector('.filter__items').addEventListener('click', event => {
            if(!event.target.dataset['filter']) return false;

            let filterWorkClass = event.target.dataset['filter']
            filterItems.forEach( element => {
                element.classList.remove('card-hide')
                element.style.maxWidth = 390 + 'px';
                element.style.maxHeight = element.scrollHeight + 'px';

                if(!element.classList.contains(filterWorkClass) && filterWorkClass!== 'all'){
                    element.classList.add('card-hide')
                    element.style.maxHeight = 0;
                    element.style.maxWidth = 0;
                }
            })
        })


}

export default filterWork