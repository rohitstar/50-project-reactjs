import React, { useEffect, useState } from 'react'
import './quiz-app.css'

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
]

const QuizApp = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  //   const [currentQuestion, setCurrentQuestion] = useState()
  //   let currentQuiz = 0
  //   const [score, setScore] = useState(0)

  const currentQuizData = quizData[currentQuiz]

  return (
    <div className="App-quiz">
      <div className="quiz-container" id="quiz">
        {currentQuizData.length > 0 &&
          currentQuizData.map((data, index) => (
            <div key={index} className="quiz-header">
              <h2 className="quiz-h2" id="question">
                {data.question}
              </h2>

              <ul>
                <li>
                  <input type="radio" name="answer" id="a" className="answer" />
                  &nbsp;
                  <label htmlFor="a" id="a_text">
                    {data.a}
                  </label>
                </li>

                <li>
                  <input type="radio" name="answer" id="b" className="answer" />
                  &nbsp;
                  <label htmlFor="b" id="b_text">
                    {data.b}
                  </label>
                </li>

                <li>
                  <input type="radio" name="answer" id="c" className="answer" />
                  &nbsp;
                  <label htmlFor="c" id="c_text">
                    {data.c}
                  </label>
                </li>

                <li>
                  <input type="radio" name="answer" id="d" className="answer" />
                  &nbsp;
                  <label htmlFor="d" id="d_text">
                    {data.d}
                  </label>
                </li>
              </ul>
            </div>
          ))}

        <div className="quiz-header">
          <h2 className="quiz-h2" id="question">
            {currentQuizData.question}
          </h2>

          <ul>
            <li>
              <input type="radio" name="answer" id="a" className="answer" />
              &nbsp;
              <label htmlFor="a" id="a_text">
                {currentQuizData.a}
              </label>
            </li>

            <li>
              <input type="radio" name="answer" id="b" className="answer" />
              &nbsp;
              <label htmlFor="b" id="b_text">
                {currentQuizData.b}
              </label>
            </li>

            <li>
              <input type="radio" name="answer" id="c" className="answer" />
              &nbsp;
              <label htmlFor="c" id="c_text">
                {currentQuizData.c}
              </label>
            </li>

            <li>
              <input type="radio" name="answer" id="d" className="answer" />
              &nbsp;
              <label htmlFor="d" id="d_text">
                {currentQuizData.d}
              </label>
            </li>
          </ul>
        </div>

        <button
          //   onClick={handleAnswerButtonClick}
          className="quiz-submit"
          id="submit"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default QuizApp
