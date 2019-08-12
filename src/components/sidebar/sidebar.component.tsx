import React, { Component } from 'react'
import './sidebar.scss'
import { Link  } from 'react-router-dom'

export class SidebarItem {
    public isSelected?: boolean = false;
    constructor(public text:string,public link: string) {

    }
}

export class SidebarState {
    public items: Array<SidebarItem> = [];
    public selectedItem!: SidebarItem;
}

export class Sidebar extends Component{
    readonly state: SidebarState;

    constructor(props:any) {
        super(props);

        this.state = {
            items: [{ text: "Home",link: "/", isSelected : false }, { text: "Profiles",link: "/profiles", isSelected : true }, { text: "Rooms",link: "/rooms" }],
            selectedItem: new SidebarItem("","")
        }
        this.state.selectedItem = this.state.items[0];

        this.itemClicked = this.itemClicked.bind(this);
    }
    
    createItems(sidebarItems: Array<SidebarItem>) {
        let items = []
        for(let i = 0; i < sidebarItems.length;i++) {
            let item = sidebarItems[i];
            items.push((<Link to={item.link} onClick={() => this.itemClicked(item)} className={"sidebar-item " + (item.isSelected ? "selected" : "")} key={i}>{item.text}</Link>));
        }
    
        return items;
    }

    itemClicked(item: SidebarItem) {
        if(this.state.selectedItem == item) {return;}

        item.isSelected = true;
        this.state.selectedItem.isSelected = false;
        this.state.selectedItem = item;

        this.setState({items: this.state.items, selectedItem: this.state.selectedItem});
    }

    render() {
        var items = this.createItems(this.state.items);

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
}