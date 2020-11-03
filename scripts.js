let name = "Tiffany Rathbun";
let age = 29;
let birthday = "January 12";
let detroitGC = true;
let lifeEvents = ["I went to Michigan Tech.", "I've bought my own house.", "I have two boys.", "I have lived in 7 different cities in Michigan."];

if(detroitGC){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}else{
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (i =0; i < lifeEvents.length; i++) {
   console.log(lifeEvents[i]);    
}

let counter = 0;
let run = true

while(run){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber !== 5){
        counter++;
        console.log(`${randomNumber} !== 5`);
    }else{
        counter++;
        console.log(`5 === 5 it took ${counter} iterations to randomly generate the number 5`);
        run = false;
        break;
    }
}