
console.log('welcome to quize application');
const rs=require('readline-sync');
let score=0;
function checkanswer(question, answer){
  const useranswer = rs.question(question);
  if(useranswer == answer){
  console.log('you are correct');
  score = score+2;
  console.log('score'+score)
  }
   else{
  console.log('you are incorrect');
  score= score-1;
  console.log('your final score is'+score);
    
}
}


const questions=[
  {
    question:'  if we add 2+2  then result is : ',
    answer:'4'
  },
  {
    question:'what is the capital of india: ',
    answer:'New delhi'
  },
  {
    question:'who is favoriate actor:  ',
      answer: 'Amir Khan'
  },
  {
    question:' what is the full name of Mahatma Gandhi:   ',
      answer:'Mohandas karamchand gandhi'
  
  },

  {
    question:'What is the capital city bihar:  ',
      answer:'Patna'
  },
  {
    question:'what is the capital city of Nepal?:  ',
      answer:'Kathmandu'
  },
  {
    question:'what is the capital city of Goa?:  ',
      answer:'Panaji'
  },
  {
    question:'what is the capital city of Maharastra?: ',
      answer:'Mumbai'
  
  },
  {
    question:'What is the capital city of Rajasthan?: ',
      answer:'Jaipur'
  },
  {
    question:'What is  your first company name:  ',
      answer:'Capgemini'
  
  }

]

for(let i=0; i<questions.length; i++){
  let qu = questions[i];
  checkanswer(qu.question,qu.answer);
}
