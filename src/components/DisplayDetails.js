import React, { Component } from 'react'

class DisplayDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isVisible : false,
         count:0
      }
    }
    // To toggle para on button click
    isShown=()=>{
        this.setState({
            isVisible : !this.state.isVisible
        })
        // to count no. of times button is clicked
        this.incrementCount();
    }
    incrementCount=()=>{// to count no. of times button is clicked
        this.setState({
            count:this.state.count+1
        },()=> console.log(this.state.count))
       
    }
  render() {
    // paragraph to be displayed
    let para = <p>Birds are very special animals that have particular characteristics which are common amongst all of them. For instance, all of them have feathers, wings and two legs. Similarly, all birds lay eggs and are warm-blooded. They are very essential for our environment and exist in different breeds. Thus, an essay on birds will take us through their importance.</p>
    // toggle condition
    return this.state.isVisible ? 
    <div> <br/><button onClick={this.isShown} className='btn btn-info'>Display Details</button> <br/><p>{para}</p> <br/> <br/><p>No. of 'Display Details' button Count :: {this.state.count}</p></div> :
     <div><br/><button onClick={this.isShown} className='btn btn-info'>Display Details</button> <br/> <br/> <p>No. of 'Display Details' button Count :: {this.state.count}</p></div>
  }
}

export default DisplayDetails
