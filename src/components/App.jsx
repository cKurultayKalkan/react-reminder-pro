import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder, deleteReminder} from '../actions'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        if (this.state.text !== "")
            this.props.addReminder(this.state.text, this.state.dueDate)
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const {reminders} = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map((reminder) => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">{reminder.text}</div>
                                <div className="list-item delete-button"
                                     onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="I have to..."
                               onChange={event => this.setState({text: event.target.value})}
                        />
                        <input
                            className="form-control"
                            onChange={event => this.setState({dueDate: event.target.value})}
                            type="datetime-local"/>
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >Add Reminder
                    </button>
                </div>
                {this.renderReminders()}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder, deleteReminder}, dispatch)
}

function mapStateToProps(state) {
    console.log('mapStateToProps state', state);
    return {
        reminders: state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
