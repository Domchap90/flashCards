import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectQuizzes } from './quizzesSlice'; 

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes); 
  console.log('quizzes = ', quizzes)
  const { quizId } = useParams();
  console.log('quizId = ',quizId)
  const quiz = quizzes[quizId];
  console.log('quiz is ', quiz);

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
