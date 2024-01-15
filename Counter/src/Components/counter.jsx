import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    count(){
       this.setState({
        count: this.state.count +1
       })
    }
    decrease(){
        this.setState(previousState =>({
            count:previousState.count-1
        }))
    }
    reset(){
        this.setState({
            count:0
        })
    }
render(){
    
    return (
    <div className="card">
    <h1>Counter App</h1>
    <h2>{this.state.count}</h2>
    <button onClick={()=> this.count()}> + </button>
    <button onClick={()=>this.decrease()}> - </button>
    <button onClick={()=>this.reset()}>Reset</button> 
    </div>)
}
}
export default Counter;