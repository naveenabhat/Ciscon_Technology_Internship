const questions=[{
    'que':" Who is making the web standards?",
    'a':"Mozilla",
    'b':"Microsoft",
    'c':"The world wide web Consortium",
    'd':"All of the above",
    'correct':'c'
},

{
    'que':" What is the HTML element used to display an image?",
    'a':"<img>",
    'b':"<picture>",
    'c':"<Image>",
    'd':"<pic>",
    'correct':'a'
},
{
    'que':" Which of the following tag is used to define options in a drop-down selection lis?",
      'a':"<select>",
      'b':"<list>",
      'c':"<dropdown>",
      'd':"<option>",
      'correct':'d'
},
{
    'que':" Which of the following HTML tag is the special formatting tag?",
    'a':"<p>",
    'b':"<b>",
    'c':"<pre>",
    'd':"none of the above",
    'correct':'c'
},
{
    'que':" what is the full form of CSS?",
    'a':"Coloued style sheets",
    'b':"Cascading Style sheet",
    'c':"Colour and style sheet",
    'd':"None of the above",
    'correct':'b'
},
{
    'que':" Which of the following methods is used to access HTML elements using Javascript? ",
    'a':"getElementbyId",
    'b':"getElementsbyClassName",
    'c':"Both A and B",
    'd':"None of the above",
    'correct':'c'
},
{
    'que':" Which of the following methods can be used to display data in some form using Javascript? ",
    'a':"document.write()",
    'b':"console.log()",
    'c':"window alert()",
    'd':"All the above",
    'correct':'d'
},
{
    'que':" What type of CSS is the following code snippet?<h1 style=color:blue>A Blue Heading</h1>",

    'a':"External",
    'b':"Internal",
    'c':"Inline",
    'd':"outline",
    'correct':'c'
},
{
    'que':" Which of the following is correct about JavaScript?",

    
    'a':"JavaScript is an Object-Based language",
    'b':"JavaScript is Assembly-language",
    'c':"JavaScript is an Object-Oriented language",
    'd':"javaScript is a High-level language",
    'correct':'a'
},
{
    'que':" Which one of the following is the correct way for calling the JavaScript code?",

    
    'a':"Preprocessor",
    'b':"Triggering Event",
    'c':"RMI",
    'd':"Function/Method",
    'correct':'d'
}

]
let index=0;
let total =questions.length;
let right=0,
    wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index==total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    //console.log(data)
    quesBox.innerText = `${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
    //optionInputs[4].nextElementSibling.innerText=data.e;

}
//ans check
const submitQuiz=()=>{
    const data=questions[index]
    const ans=getanswer()
    //console.log(ans,data.correct)
    if(ans==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

    }
const getanswer=()=>{
    let answer;
optionInputs.forEach(
    (input)=>{
        if(input.checked){
           answer=input.value; 
        
        }
    }
)
return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3> Thank you for playing the quiz</h3>
    <h2> Congratulations!!! </h2>
    <h3> ${right}/${total} are correct</h3>
    </div>`
}
loadQuestion();