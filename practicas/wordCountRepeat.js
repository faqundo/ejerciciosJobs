let text = "hola que tal, bienvenidos a los juegos de hambre. Si están preparados comencemos con esta batalla final, y como es final es ultra violenta";

function normalize(word){
   //return word.toLowerCase().replace(',','').replace('.','').replace('!','').replace('?',''); //probamos con expreciones regulares
   return word.toLowerCase().replace(/[.!,]/g , '');
}

function wordCountRepeat (text){
    let dict = {};
    let separatedWord = text.split(" "); //array donde cada posición es una palabra.
    for (let word of separatedWord){
        if (normalize(word) in dict){
            ++dict[normalize(word)];
        }else{
            dict[normalize(word)]=1;
        }
    }
    console.log(dict);
}

wordCountRepeat(text);