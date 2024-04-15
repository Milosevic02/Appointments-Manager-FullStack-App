import React from "react";

const Appointment = (props) =>{
    return(
        <div>
            
            <div className="column id">{props.item.ID}</div>
            <div className="column title">{props.item.Title}</div>
            <div className="column description">{props.item.Description}</div>
            <div className="column importance">{props.item.LevelOfImportance}</div>
            <div className="column date">{props.item.Date}</div>
            <div className="column Time">{props.item.Time}</div>
            <div className="column address">{props.item.Address}</div>
            <div>
                <div>Edit</div>
            </div>
            <div>
                <div>
                    Delete
                </div>
            </div>

        </div>
    )
}

export default Appointment