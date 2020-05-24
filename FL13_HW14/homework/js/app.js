let homeworkResults1 = [];
class Student {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    getName() {
        return this._name;
    }

    getEmail() {
        return this._email;
    }
    getHomeworkResults() {
        return homeworkResults1;
    }

    addHomeworkResults(topic, success) {
        homeworkResults1.push({
            Topic: topic,
            Success: success
        })
    }
}

function printStudentsList() {
    return homeworkResults1;
}

const John = new Student('John', 'john@gmail.com');
const Jane = new Student('Jane', 'jane@gmail.com');
const Jack = new Student('Jack', 'jack@gmail.com');