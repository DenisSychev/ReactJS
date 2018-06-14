import '../css/style.css';

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    greeting(){
        const text = `Добрый день, ${this.firstName} ${this.lastName}`;
        return text;
    };
}

export {User};