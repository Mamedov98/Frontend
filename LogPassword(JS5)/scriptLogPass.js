class FormManager{
    constructor() {
        this.loginForm = document.getElementById('loginForm');
        this.registrationForm = document.getElementById('registrationForm');
        this.message = document.getElementById('message');


        this.loginForm.addEventListener('submit',this.handleLogin.bind(this));
        this.registrationForm.addEventListener('submit',this.handleRegistration.bind(this));
    }
handleLogin(event){
        event.preventDefault();


        const  username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
this.login(username,password);

}

handleRegistration(event){

    event.preventDefault();


    const  username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    this.register(username,password);
    }



    register(username, password) {
        const userData = {
            username: username,
            password: password
        };

        // Получение существующих данных из localStorage
        const existingData = localStorage.getItem('registrationData');
        let registrationData = existingData ? JSON.parse(existingData) : {};

        const  savedUserData = JSON.parse(localStorage.getItem('registrationData'));

        if (savedUserData && savedUserData[username]) {
            this.showMessage('Пользователь с таким логином уже существует');
            return;
        }

        // Добавление нового пользователя
        registrationData[username] = userData;

        // Сохранение данных в localStorage
        localStorage.setItem('registrationData', JSON.stringify(registrationData));

        this.showMessage('Регистрация успешна');
        this.clearRegistrationForm();
    }
    login(username,password){
        const  savedUserData = JSON.parse(localStorage.getItem('registrationData'));

        if ( savedUserData && savedUserData[username] && password === savedUserData[username].password){
            this.showMessage('Вход успешно завершен');

        }
        else{
            this.showMessage('Неправильный логин или пароль');
        }


    }

    showMessage(message){
        this.message.textContent = message;

    }

    clearRegistrationForm(){
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
    }
}



const  formManager = new FormManager();

