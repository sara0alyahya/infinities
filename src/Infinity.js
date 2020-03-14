import React from "react"

class Infinity extends React.Component {
    render() {
        const activ = this.props.sara.activities.map(activvv => <li>{activvv}</li>)
        const interest = this.props.sara.interest.map(interest => <li>{interest}</li>)
        return (
            <div className="Infinity" >
                <h1>Full-Name : {this.props.sara.name}</h1>
                <h1>Age : {this.props.sara.age}</h1>
                <h1>Home Town from : {this.props.sara.hometown}</h1>
                <ul>
                    {activ}
                    <h1>interest in </h1>
                    {interest}
                </ul>

            </div>
        )
    }
}

export default Infinity