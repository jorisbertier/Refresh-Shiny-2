import { useContext } from "react"
import { SurveyContext } from "../../utils/context"

function Results() {

    const { answers } = useContext(SurveyContext)
    console.log(answers)

    return (
        <div>
            Page Results {answers}
        </div>
    )
}

export default Results