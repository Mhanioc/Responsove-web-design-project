const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(a){
    removeTab();
    this.classList.add('tab-border');
    removeShow();
    const tabcontent = document.querySelector(`#${this.id}-content`);
    tabcontent.classList.add('show')
    
}

function removeTab(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click',selectItem));





