import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TreadMenu } from "./style"

export default function Trendings(){
    const [treads, setTreads] = useState([])
    
    useEffect(() => {
    axios.get(process.env.API_URL + "/treadings")
    .then(res => setTreads(...treads, res.data))
    .catch(err => console.log(err.response.data))
    }
    , [])

    return(
        <TreadMenu data-test="trending">
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
        <h2 onClick={navigate("/hashtag/" + props.tread)} data-test="hashtag"># {props.tread}</h2>
    )
}