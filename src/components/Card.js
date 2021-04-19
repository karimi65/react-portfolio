import React, { useEffect } from 'react'

const Card = (props) => {
    return (
        <div className="col-12">
            <div className="card" >
                <img src={props.image} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.about}</p>
                    <a href={props.repo} className="btn btn-primary">Repository</a>
                    <a href={props.web} className="btn btn-primary">live Web</a>
                </div>
            </div>
        </div>
    )
}

export default Card
