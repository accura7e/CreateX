
function offerAccordeon (){
    if(document.querySelector('.offer__row-subtitle')){
        const offerTitles = document.querySelectorAll('.offer__row-subtitle')
        const offerTexts = document.querySelectorAll('.offer__row-text')
    
        offerTitles.forEach(item => item.addEventListener('click', () => {
            const offerText = document.querySelector('#' + item.dataset.offerTab)

            if(offerText.classList.contains('active')){
                offerText.classList.remove('active');
                item.classList.remove('active');
                offerText.style.maxHeight = 0;
            } else{
                offerTexts.forEach(element => {
                    element.classList.remove('active');
                    element.style.maxHeight = 0;
                });

                offerTitles.forEach(title => title.classList.remove('active'));

                item.classList.add('active');
                offerText.classList.add('active');
                offerText.style.maxHeight = offerText.scrollHeight + 'px';

            }
        }))
    }

}
                    // const tab = title.closest('.offer__row-tab')
                    // const thisText = tab.querySelector('.offer__row-text')
                    
                    // title.classList.toggle('active')
    
                    // thisText.classList.toggle('offer__row-text--active')
                    // if(thisText.style.maxHeight){
                    //     thisText.style.maxHeight = null;
                    // } else{
                    //     thisText.style.maxHeight = thisText.scrollHeight + "px"
                    // }
                
export default offerAccordeon