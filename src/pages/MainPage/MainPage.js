import React, {Component} from 'react';
import Topics from '../../components/Topics/Topics.js';
import Map from '../../components/Map/Map';
import Twitter from '../../components/Twitter/Twitter';
import './MainPage.css'
import Discussions from '../../components/Discussions/Discussions'


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    handleFilterChange = (filter) => {
        this.setState({filter});
    }
    
    render() {
        return (
            <div>
                <div className="MainPage">
                <Topics handleFilterChange={this.handleFilterChange}/>
            
                <Discussions
                    discussions={this.state.filter ?
                        this.props.discussions.filter(d => d.category === this.state.filter)
                        : this.props.discussions}
                    handleNewDiscussion={this.props.handleNewDiscussion}
                />
                
                </div>
                <Twitter />

                <Map />
                
            </div>
        );
    }

}


export default MainPage;


