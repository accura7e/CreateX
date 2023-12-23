function filterLoadBtn(){
    if(document.querySelector('.filter__load-more')){
        const filterShowMore = document.querySelector('.filter__load-more');
        const filterProjectsCardslenght = document.querySelectorAll('.project-card').length;

        let filterItems = 9
        const startItems = Array.from(document.querySelectorAll('.project-card'))
        startItems.forEach(el => {
            if(!el.classList.contains('is-visible')){
                el.style.marginBottom = "0"
            }
        })

        const startItemsMargin = startItems.slice(0, 9)
        startItemsMargin.forEach(el => {
            el.style.marginBottom = "30px"
        })
        console.log(startItemsMargin)
        filterShowMore.addEventListener('click', () =>{
            filterItems += 3;
            const filterProjectsCardsArray = Array.from(document.querySelectorAll('.project-card'))
            const visibleItems = filterProjectsCardsArray.slice(0, filterItems)

            visibleItems.forEach(el => {
                el.classList.add('is-visible')

            })
            if(visibleItems.length === filterProjectsCardslenght){
                filterShowMore.style.scale = 0;
            }

        })

    }

}   

export default filterLoadBtn