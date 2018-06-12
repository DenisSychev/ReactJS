import { User } from './user';

window.onload = () => {
    const user = new User('John', 'Connor', 25);
    const name = user.greeting();
    const hi = document.getElementById('greetingUser')
    hi.innerText = name;
};