function sayhello(name, age){
    console.log(name)
    console.log(age)
    console.log(this)
}

let args= ["john", 25]
sayhello.call('Jane', "john", 25)