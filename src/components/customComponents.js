import React from 'react'

import { FormControl } from 'react-bootstrap'

import * as Styled from './customComponentsStyle'
import './customComponents.css'



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
            <Styled.Container style={style} className={className} aria-labelledby={labeledBy}>
                <Styled.Form
                    autoFocus
                    placeholder="Type to filter..."
                    onChange={this.handleChange}
                    value={value}
                />
                <Styled.Ulist>
                    {React.Children.toArray(children).filter(
                        child => {
                            console.log(child)
                            if (!child.props.eventKey) return true
                            return !value || child.props.eventKey.toLowerCase().startsWith(value)
                        })}
                </Styled.Ulist>
            </Styled.Container>
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