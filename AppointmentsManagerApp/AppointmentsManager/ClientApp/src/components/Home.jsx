import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import New from "./New";

const Home = () =>{
    return(
        <div>
            <New/>
            <Edit/>
            <Delete/>
        </div>
    )
}

export default Home