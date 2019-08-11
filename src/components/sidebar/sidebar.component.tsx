import React, { Component } from 'react'
import { RenderSidebar } from './sidebar_jsx';

export class Sidebar extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render() {
        return RenderSidebar(this.state);
    }
}