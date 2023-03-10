import { useNavigate } from "react-router-dom"
import { TreadMenu } from "./style"

export default function Trendings(){
    let treads = []

    return(
        <TreadMenu>
            <div className="tittle">
                trending
            </div>

            <hr />
            
            <div className="content">
                {treads.map(t => <Treads tread={t.name}/>)}
            </div>
        </TreadMenu>
    )
}

function Treads(props){
    const navigate = useNavigate()
    return(
        <h2 onClick={navigate("/hashtag/" + props.tread)}># {props.tread}</h2>
    )
}