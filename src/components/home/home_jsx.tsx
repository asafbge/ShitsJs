import React from 'react'
import './home.scss'
import { Sidebar } from '../sidebar/sidebar.component';

export function RenderHome(state: any) {
    return (
            <div className="home">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="content">
                    content
                </div>
            </div>
    );
}