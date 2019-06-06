import React from 'react'

import { FormControl } from 'react-bootstrap'

import './customComponents.css'
// .font-size-14 is in ArrowDropDown.css



export class CustomToggle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <a href="" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}



export class CustomMenu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = { value: '' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value.toLowerCase().trim() });
    }

    render() {
        const {
            children,
            style,
            className,
            'aria-labelledby': labeledBy,
        } = this.props;

        const { value } = this.state;

        return (
            <div style={style} className={className} aria-labelledby={labeledBy}>
                <FormControl
                    autoFocus
                    className="mx-3 font-size-14 custom-menu"
                    placeholder="Type to filter..."
                    onChange={this.handleChange}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        child => {
                            return !value || child.props.children[1].toLowerCase().startsWith(value)
                        })}
                </ul>
            </div>
        );
    }
}


export const RedditCard = (props) => {
    return (
        <div className={`reddit-card ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    )
}