import LoginForm from './loginForm';
import React from 'react';

class Welcome extends React.Component { // TODO probably find better name than welcome
    render() {
        return (
            <React.Fragment>
                <h1>Losing Friends!</h1>
                <LoginForm />
                <h3>A community about weightloss and body recomposition</h3>
                <h2>Share your</h2>
                <h5>Training</h5>
                <h5>Diet</h5>
                <h5>Workout tips</h5>
                <h5>Progress</h5>
                <h5>Celebrate your achievements</h5>
            </React.Fragment>
        )
    }
}

export default Welcome;