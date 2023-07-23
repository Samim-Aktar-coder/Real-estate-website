
const toggleAnswer = (e) => {
    const answers = document.querySelectorAll(".answer");
    answers.forEach(answer => {
        answer.classList.remove('show');
    });

    if (e.target.classList.contains('question')) {
        e.target.nextElementSibling.classList.add('show');
    }
};

export default toggleAnswer;