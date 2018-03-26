import React from "react";
import { render } from "react-dom";

class Input extends React.Component {
    render() {
        return(
            <React.Fragment>
                <input type="text" placeholder={this.props.placeholder} />
            </React.Fragment>
        );
    }
}

class LabeledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'labeled input placeholder'
        };
    }

    render() {
        return(
            <React.Fragment>
                <label>{this.props.label}</label>
                {this.props.children(this.state)}
            </React.Fragment>
        );
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
                <LabeledInput label="Label">
                    {input => (
                        <Input placeholder={input.placeholder} />
                    )}
                </LabeledInput>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));