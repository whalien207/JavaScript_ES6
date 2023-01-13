
class Person{
    constructor(name, age){
        this.name = name; //멤버변수가 된다.
        this.age = age;
    }

    getInfo = () => {
        return `이름 ${this.name}, 나이 ${this.age}`;
    }
}

export default Person;
// person을 통채로 export해서 들고 나갈 수가 있다.
//export defualt는 한번만 사용할 수 있다.