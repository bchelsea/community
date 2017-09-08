import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';


class NewDiscussion extends Component {
  constructor() {
    super();
    this.state = {
      category: 'Garage Sales',
      title: '',
      content: '',
      name: ''
    }
  }

  updateInput = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }

//trying to clear the form after submit //

  // clearInput = (field, e) => {
  //   this.setState({ 
  //     [field]: e.target.value
  //   })
  // }


  submitDiscussion = (e) => {
    e.preventDefault();
      fetch('/api/discussions', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => {
      if (res.ok) return res.json();
      console.log('Error');
    })
    .then(discussion => {
      this.props.handleNewDiscussion(discussion);
    });
  }

  render() {
    return (
      <div className='discussion-form'>
        <br/>
        <br/>
        <form className="small-form"> 
        <h4 className='discussion-header2'> Care to Share ?</h4>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Post To:</label> <br/>
            <select className="form-control" id="exampleSelect1" value={this.state.category}  onChange={(e) => this.updateInput('category', e)}>
                <option value='Garage Sales'>Garage Sales</option>
                <option value='Crime'>Crime</option>
                <option value='Moving'>Moving</option>
                <option value='Lost And Found'>Lost And Found</option>
                <option value='Community Events'>Community Events</option>
                <option value='Neighborhood Watch'>Neighborhood Watch</option>
                <option value='High School'>High School</option>
                <option value='Good Eats'>Good Eats</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="titleInput">Title:</label> <br />
            <input className="form-control" id="titleInput" placeholder="Insert Post Title" value={this.state.title} onChange={(e) => this.updateInput('title', e)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleTextarea">What's Happening?</label><br/>
            <textarea className="form-control" id="exampleTextarea" rows="7" placeholder="Tell your community what is up!" value={this.state.content} onChange={(e) => this.updateInput('content', e)}></textarea>
          </div>
          <button className="btn btn-primary" onClick={this.submitDiscussion}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewDiscussion;