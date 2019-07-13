function print(content: string) {
    document.body.innerHTML += content;
}
const welcomeWord:string = "hello,webpack";

print(welcomeWord);

class Site { 
    name():void { 
    document.body.innerHTML += 'class test';
    } 
 } 
 var obj = new Site(); 
 obj.name();