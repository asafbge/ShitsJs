import React from 'react'
import './sidebar.scss'

export class SidebarItem {
    public isSelected?: boolean = false;
    constructor(public text:string,public link: string) {

    }
}

export class SidebarState {
    public items: Array<SidebarItem> = [];
}

function createItems(sidebarItems: Array<SidebarItem>) {
    let items = []
    for(let i = 0; i < sidebarItems.length;i++) {
        let item = sidebarItems[i];
        items.push((<div className={"sidebar-item " + (item.isSelected ? "selected" : "")} key={i}>{item.text}</div>))
    }

    return items;
}

export function RenderSidebar(state: SidebarState) {
    var items = createItems(state.items);

    return (
            <div className="sidebar">
                <div className="sidebar-header">
                    Sidebar !
                </div>
                <div className="sidebar-body">
                    {items}
                </div>
            </div>
            );
}