let test = [
  {
    typeQuestion: "SC", //тип вопроса, один ответ верный
    // формулировка вопроса
    questionText: "What does ABS stand for in relation to car safety?",
    // список ответов
    answers: [
      "Automatic Brake System",
      "Anti-lock Braking System",
      "Active Brake System",
      "Auxiliary Brake System",
    ],
    // для каждого ответа указываем, верный он (true) или неверный (false)
    correct: [false, true, false, false],
  },
  {
    typeQuestion: "SC",
    questionText:
      "Which type of engine is known for its fuel efficiency and lower emissions?",
    answers: [
      "Diesel Engine",
      "Electric Engine",
      "Gasoline Engine",
      "Hybrid Engine",
    ],
    correct: [false, false, false, true],
  },
  {
    typeQuestion: "SC",
    questionText: "Which of the following is a common type of car body style?",
    answers: ["Coupe", "Sedan", "SUV", "All of the above"],
    correct: [false, false, false, true],
  },
  {
    typeQuestion: "SC",
    questionText: "What is the main purpose of a catalytic converter in a car?",
    answers: [
      "Increase horsepower",
      "Reduce emissions",
      "Improve fuel efficiency",
      "Enhance sound",
    ],
    correct: [false, true, false, false],
  },
  {
    typeQuestion: "MC",
    questionText: "What features can enhance a car's safety?",
    answers: ["Anti-lock brakes", "Airbags", "Traction control", "Sunroof"],
    correct: [true, true, true, false],
  },
  {
    typeQuestion: "MC",
    questionText: "What are common types of fuel used in cars?",
    answers: ["Gasoline", "Diesel", "Electric", "Hydrogen"],
    correct: [true, true, false, false],
  },
  {
    typeQuestion: "MC",
    questionText:
      "Which of the following brands is known for producing luxury vehicles?",
    answers: ["Toyota", "BMW", "Ford", "Honda"],
    correct: [true, true, false, false],
  },
  {
    typeQuestion: "SN",
    questionText:
      "What is the approximate average lifespan of a modern car in years?",
    answers: [""],
    correct: ["12"],
  },
  {
    typeQuestion: "SN",
    questionText: "How many wheels are on a typical car?",
    answers: [""],
    correct: ["4"],
  },
  {
    typeQuestion: "SN",
    questionText: "In what year was the Ford Model T first produced?",
    answers: [""],
    correct: ["1908"],
  },
];

function createTest(testData) {
  /* находим элемент, в котором будем формировать тест */
  let element = document.getElementById("test");

  /* обрабатываем все вопросы из массива testData */
  for (let i = 0; i < testData.length; i++) {
    /* создаем элемент li для отображения очередного вопроса */
    let itemTest = document.createElement("li");
    /* относим его к классу question */
    itemTest.classList.add("question");
    /* заносим текст вопроса */
    itemTest.innerHTML = testData[i].questionText;

    /* формируем элемент для отображения ответов */
    let itemsAnswers = document.createElement("ul");

    /* обрабатываем все ответы текущего вопроса */
    for (let j = 0; j < testData[i].answers.length; j++) {
      /* создаем элемент для отображения ответа */
      let answer = document.createElement("li");

      /* заносим в него элемент radio для выбора одного ответа*/
      if (testData[i].typeQuestion === "SC") {
        answer.innerHTML = `<label><input type="radio"
          name="answer${i}">${testData[i].answers[j]}</label>`;
      } else if (testData[i].typeQuestion === "MC") {
        answer.innerHTML = `<label><input type="checkbox"
          name="answer${i}">${testData[i].answers[j]}</label>`;
      } else if (testData[i].typeQuestion === "SN") {
        answer.innerHTML = `Ответ: <label><input type="text"
          name="answer${i}">${testData[i].answers[j]}</label>`;
      }
      /* добавляем очередной ответ в элемент для отображения ответов */
      itemsAnswers.appendChild(answer);
    }
    /* добавляем ответы к очередному вопросу */
    itemTest.appendChild(itemsAnswers);

    /* добавляем сформированный вопрос с ответами к тесту */
    element.appendChild(itemTest);
  }
}

function checkTest(testData) {
  let questions = document.getElementsByClassName("question");

  let correctQuestion = 0;

  for (let i = 0; i < questions.length; i++) {
    let answers = questions[i].getElementsByTagName("input");

    let amountCorrect = 0;

    for (let j = 0; j < answers.length; j++) {
      if (
        testData[i].typeQuestion == "SC" ||
        testData[i].typeQuestion == "MC" ||
        testData[i].typeQuestion == "SN"
      ) {
        if (answers[j].checked == testData[i].correct[j]) {
          amountCorrect++;
        } else if (answers[j].value == testData[i].correct[j]) {
        } else {
          questions[i].classList.add("error");
        }
      }
    }
    if (amountCorrect == answers.length) {
      correctQuestion++;
    }
  }
  document.getElementById(
    "result"
  ).innerHTML = `Верных ответов - ${correctQuestion}, что составляет
   ${Math.round((correctQuestion / questions.length) * 100)}%.`;
}

function clearTest(testData) {
  /* очищаем элементы с вопросами и результатом*/
  document.getElementById("test").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  createTest(testData);
}

document.addEventListener("DOMContentLoaded", function () {
  createTest(test);
});
