import React from 'react';
import { Route, Link } from 'react-router-dom';

class Team extends React.Component{
    render() {
        return (
            <div className="team">
                <Route path={`${this.props.match.path}/1`}>
                    <h1>I am Boy1</h1>
                </Route>
                <Route path={`${this.props.match.path}/2`}>
                    <h1>I am Boy2</h1>
                </Route>
                <Route path={`${this.props.match.path}/3`}>
                    <h1>I am Boy3</h1>
                </Route>
                <Route path={`${this.props.match.path}/4`}>
                    <h1>I am Girl1</h1>
                </Route>
                <Route path={`${this.props.match.path}/5`}>
                    <h1>I am Girl2</h1>
                </Route>
                <Route path={`${this.props.match.path}/6`}>
                    <h1>I am Girl3</h1>
                </Route>
                <Route path={`${this.props.match.path}/7`}>
                    <h1>I am Girl4</h1>
                </Route>
            </div>
        );
    }
}

export default Team;
