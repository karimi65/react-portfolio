import React from 'react'
import Card from "../components/Card"

function Portfolio() {
    return (
        <div className="container">
            <h1>portfolio</h1>
            <div className="row">
                <Card image alt="project1" name="work day" repo="https://github.com/karimi65/work-day-scheduler" web="https://karimi65.github.io/work-day-scheduler/" />
                <Card image alt="project2" name="wikigames" repo="https://github.com/mokulling/wikigames" web="https://mokulling.github.io/wikigames/" about="dfhsfhfhfhfhfh" />
                <Card image alt="project3" name="burger" repo="https://github.com/karimi65/burger" web="https://enigmatic-waters-41603.herokuapp.com/" />
            </div>
        </div >
    )
}

export default Portfolio
