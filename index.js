// This is example data you can use while working on your code.
const responses = [
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Metaphase',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  }
];

// Prompt 1 : countCorrectQuestions
function countCorrectQuestions (responses){
  let correctAnswers = 0;
for (let i = 0; i < responses.length; i++){
if (responses[i].isCorrect != false){
  correctAnswers += 1;
}
}
return correctAnswers;
}
// Prompt 2 : filterQuestionsByType
function filterQuestionsByType (responses,isEssayQuestion){
  let matchingResponses = [];
for (let i = 0; i < responses.length; i++){
  if (responses[i].isEssayQuestion == isEssayQuestion){
    matchingResponses.push(responses[i]);
  }
}
return matchingResponses;
}
// Prompt 3 : checkForPlagiarism
function checkForPlagiarism (responses, plagiarism){
  let check = '';
  for (let i = 0; i < responses.length; i++){
    if (responses[i].isEssayQuestion != false){
     check = responses[i].response;
     console.log(check); 
  }
  }
console.log(check.includes(plagiarism));
return check.includes(plagiarism);

}
//This is to run the tests. You can ignore it but don't delete it! 
require('./index.test.js'); (void 0);
