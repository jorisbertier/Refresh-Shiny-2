import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {

    let { questionNumber } = useParams()
    questionNumber = parseInt(questionNumber, 10)

    let nextQuestionNumber =  questionNumber + 1
    let prevQuestionNumber =  questionNumber - 1

    return (
        <div>
            {questionNumber <= 1 ?
            <div>
                <h1>Questionnaire 🧮</h1>
                <h2>Question {questionNumber} </h2>
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            </div>
            :
            <div>
                <h1>Questionnaire 🧮</h1>
                <h2>Question {questionNumber} </h2>
                {questionNumber >=10 ?
                    <Link to="/results">Résultat</Link>
                    :
                    <div>
                        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                    </div>
                }
            </div>
            } 
        </div>
    )
}

export default Survey