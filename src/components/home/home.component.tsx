import React, { Component } from 'react'
import {RenderHome} from './home_jsx';

export class Home extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render() {
        return RenderHome(this.state);
    }
}