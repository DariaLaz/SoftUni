class Contact{
    #online = false;
    constructor(fName, lName, phone, email){
        this.firstName = fName;
        this.lastName = lName;
        this.phone = phone;
        this.email = email;
        this.titleDiv = document.createElement('div');
    }
    get online() {
        return this.#online;
    }
    set online(value) {
        this.#online = value;

        if(this.#online == false){
            this.titleDiv.classList.remove('online')
        } else{
            this.titleDiv.classList.add('online')
        }
    }
    render(id){
        let article = document.createElement('article');
        this.titleDiv.textContent = `${this.firstName} ${this.lastName}`

        let btn = document.createElement('button');
        btn.innerHTML = '&#8505;';
        btn.addEventListener('click', displayInfo)
        this.titleDiv.appendChild(btn);
        this.titleDiv.classList.add('title')

        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';

        let phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = `&phone; ${this.phone}`
        infoDiv.appendChild(phoneSpan);

        let emailSpan = document.createElement('span');
        emailSpan.innerHTML = `&#9993; ${this.email}`
        infoDiv.appendChild(emailSpan);

        article.appendChild(this.titleDiv);
        article.appendChild(infoDiv)
        
        document.getElementById(id).appendChild(article)

        function displayInfo(e) {
            infoDiv.style.display =  infoDiv.style.display == 'none' ? 'block' : 'none';
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
 setTimeout(() => contacts[1].online = true, 2000);
  