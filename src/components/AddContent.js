import React, { Component } from 'react'

class AddContent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         content: '',
        //  data to be added on last input click
         arr:[],
// array to store all values entered
      }
    }
    // on every content change, update data in 'content'
    ContentChange=(e)=>{
        this.setState({
            content: e.target.value
        })
         
    }
    // when form is submitted , add inputted data in array of values
    SubmitForm=(e)=>{e.preventDefault();
        this.state.arr.push(this.state.content);
        this.setState({
          content: ''
      })
    }
  render() {
    return (
     <form onSubmit={this.SubmitForm}>
         <div>
            <input type='text' value={this.state.content} onChange={this.ContentChange}/>
        </div>
        <br/>
        <button type='submit' className='btn btn-danger'>Add</button>
        <div>
        <ul> 
          {/* if 5th element is entered, its background color = blue */}
          {this.state.arr.map((val,idx)=>(
            <li key={idx} style={{ background: (idx+1) % 5 === 0 ? 'blue' :'white' }}>{val}</li>
          ))}
        </ul>
        </div>
        
     </form>
    )
  }
}

export default AddContent
