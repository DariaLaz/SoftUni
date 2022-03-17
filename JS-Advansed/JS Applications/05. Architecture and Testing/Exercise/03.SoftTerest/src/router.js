export function initialize(links){
    let main = document.querySelector('main');
    let nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate)
    const context = {
        showSection,
        goTo,
        updateNav
    };

    return context;

    function showSection(section){
        main.replaceChildren(section);
    }
    function onNavigate(event){
        let target = event.target;
        if(target.tagName == 'IMG'){
            target = target.parentElement;
        }
    
        if(target.tagName == 'A'){
            event.preventDefault();
            let url = new URL(target.href);
            goTo(url.pathname)
        }
    }
    function goTo(name, ...params){
        let handler = links[name];
        if(typeof handler == 'function'){
            handler(context, ...params);
        }
    }
    function updateNav(){
        const user = localStorage.getItem('user');
        if(user){
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'block')
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none')
        } else{
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'none')
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block')
        }
    }
}

