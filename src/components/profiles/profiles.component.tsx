import React, { Component } from 'react'
import './profiles.scss';
import { SGrid, SGridColumn } from '../SGrid/s-grid.component';

interface IProfilesState {
    columns: Array<SGridColumn>
}

export class ProfilesComponent extends Component<{}, IProfilesState> {
    constructor(props: any) {
        super(props);

        this.state = {
            columns: [{
                header: {text:"Name"},
                cellInfos: [{text:"Asaf Benjaminov"},{text:"Asaf Benjaminov"}]
            },{
                header: {text:"Professions"},
                cellInfos: [{text:"Asaf Benjaminov"},{text:"Asaf Benjaminov"}]
            }]
        };
    }

    render() {
        return (
        <div className="profiles view">
            <div className="view-header">
                Profiles
            </div>
            <div className="view-content">
                <SGrid columns={this.state.columns}/>
            </div>
        </div>
        );
    }
}