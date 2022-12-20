import "./Justification.scss"

import { useReducer } from "react";

//importing images
import Example from "../../assets/portfolio.png"

const initialState = {display : 0};

const reducer = (state, action) => {
    switch(action.type){
        case 1:
            return {display : 1}
        
        case 2 :
            return {display : 2}

        case 3:
            return {display : 3}
        
        case 4 :
            return {display : 2}

        case 5:
            return {display : 5}
        
        case 6 :
            return {display : 6}

        default:
            return {display : 0}
    }
}

function Justification(){

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <section className="justification-main-section">
            <div className="justification-title">
                <h1>Work Justification</h1>
            </div>
            {(() => {
                switch(state.display){
                    case(0):
                        return(
                            <div className="justification-body">
                                <div onClick={()=>dispatch({type: 1})}>
                                    <p>Hackathon</p>
                                </div>
                                <div onClick={()=>dispatch({type: 2})}>
                                    <p>CTEPHEC - 2022</p>
                                </div>
                                <div onClick={()=>dispatch({type: 3})}>
                                    <p>Job étudiant</p>
                                </div>
                                <div onClick={()=>dispatch({type: 4})}>
                                    <p>Formation Openclassroom</p>
                                </div>
                                <div onClick={()=>dispatch({type: 5})}>
                                    <p>Formation Openclassroom</p>
                                </div>
                                <div onClick={()=>dispatch({type: 6})}>
                                    <p>CTEPHEC - 2023</p>
                                </div>
                            </div>
                        )
                    case(1):
                        return(
                            <Popup dispatch={dispatch} image={Example} />
                        )
                    case(2):
                        return(
                            <Popup dispatch={dispatch} image={Example} />
                    )
                    case(3):
                        return(
                            <Popup dispatch={dispatch} image={Example} />
                    )
                    case(4):
                        return(
                            <Popup dispatch={dispatch} image={Example} />
                    )
                    case(5):
                        return(
                            <Popup dispatch={dispatch} image={Example} />
                    )
                    case(6):
                        return(
                            <Popup dispatch={dispatch} image={Example} />
                    )

                    default:
                        return(
                            <div></div>
                        )
                }
            })()}
        </section>
    )
}

function Popup(props){

    return(
        <div className="popup-main">
            <div>
                <img src={props.image} alt="zebi"></img>
            </div>
            <div>
                <button onClick={()=>props.dispatch({type : 0})}>Close</button>
            </div>
        </div>
    )
}

export default Justification;