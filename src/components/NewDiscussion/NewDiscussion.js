import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';



class NewDiscussion extends Component {
  constructor() {
    super();
    this.state = {
      category: 'High School',
      title: 'title',
      content: 'this is the content'
    }
  }

  updateInput = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }

  submitDiscussion = (e) => {
    e.preventDefault();

    // fetch(BASE_URL + 'login', {
    //   method: 'POST',
    //   headers: new Headers({'Content-Type': 'application/json'}),
    //   body: JSON.stringify(creds)
    // })



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
      console.log(discussion);
      // call a method that was passed via props that
      // lives where the state.discussions array lives
    });
  }

  render() {
    return (
      <div>
        <form>
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
            <input className="form-control" id="titleInput" value={this.state.title} onChange={(e) => this.updateInput('title', e)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleTextarea">What's Happening?</label><br/>
            <textarea className="form-control" id="exampleTextarea" rows="7" value={this.state.content} onChange={(e) => this.updateInput('title', e)}></textarea>
          </div>
          <button className="btn btn-primary" onClick={this.submitDiscussion}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewDiscussion;