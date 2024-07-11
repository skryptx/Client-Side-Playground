class UserProfile {
    #username;
    #email;
    #birthdate;

    constructor(username, email, date) {
        this.username = username;
        this.email = email;
        this.birthdate = date;
    }

    get username() {
        return this.#username;
    }

    set username(name) {
        if(name.length === 0 || typeof name !== 'string') {
            throw new Error("Invalid username.");
        }

        this.#username = name;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        if(email.indexOf('@') < 0) {
            throw new Error("Invalid email.");
        }

        this.#email = email;
    }

    get birthdate() {
        return this.#birthdate;
    }

    set birthdate(date) {
        const regexDate = /\d{4}-\d{2}-\d{2}/;
        if(!regexDate.test(date)) {
            throw new Error("Invalid birthdate.");
        }

        this.#birthdate = date;
    }
}

console.log(new UserProfile('sinni', 's@s.com', '1010-10-10').birthdate);