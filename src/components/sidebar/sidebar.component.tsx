import React, { Component } from 'react'
import { RenderSidebar, SidebarState, SidebarItem } from './sidebar_jsx';

export class Sidebar extends React.PureComponent<any, SidebarState> {
    readonly state: SidebarState = { items: [{ text: "Profiles",link: "/profiles", isSelected : true }, { text: "Rooms",link: "/rooms" }] }

    render() {
        return RenderSidebar(this.state);
    }
}