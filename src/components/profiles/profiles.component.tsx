import React, { Component } from 'react'
import { RenderProfiles } from './profiles_jsx';

export class ProfilesComponent extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render() {
        return RenderProfiles(this.state);
    }
}