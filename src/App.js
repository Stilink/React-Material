import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from "./components/TodoList";
import { Login } from "./components/Login";
import { TodoApp } from "./components/TodoApp";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment, { updateLocale } from "moment";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {


    constructor(props) {
        localStorage.setItem('admin', 'admin');
        super(props);
        this.state = { isLoggedIn: localStorage.getItem('isLoggedIn') };
        this.LogIn = this.LogIn.bind(this);
    }


    render() {
        const LoginView = () => {
            if (this.state.isLoggedIn) {
                return <div></div>;
            } else {
                return <Login isLoggedInChange={this.LogIn}/>;
            }

        };
        const TodoAppView = () => {
            if (!this.state.isLoggedIn) {
                return <Login isLoggedInChange={this.LogIn}/>;
            } else {
                return <TodoApp />;
            }
        };
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView} />
                        <Route path="/todo" component={TodoAppView} />
                    </div>
                </div>
            </Router>
        );
    }

    LogIn(value){
        localStorage.setItem('isLoggedIn', value)
    }
}

export default App;
