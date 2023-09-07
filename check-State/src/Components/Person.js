import React from "react"

class Person extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }

    componentDidMount(){
        setInterval(()=> this.setState({count : this.state.count + 1}), 1000);
    }
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <h2>Person component</h2>
                <h3>{this.props.person.fullName}</h3>
                <h4>{this.props.person.bio}</h4>
                <img style={{width : '30%'}} src={this.props.person.imgSrc} alt="Not Found"/>
                <h5>{this.props.person.profession}</h5>
            </div>
        )
    }
}

export default Person