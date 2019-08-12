import React, { Component } from "react";
import './s-grid.scss';

export class CellInfo {
    public text!:string;
}

export class SGridColumn {
    public header!: CellInfo;
    public cellInfos: Array<CellInfo> = [];
}

interface ISGridProps {
    columns : Array<SGridColumn>;
}

interface ISGridState {
    columns : Array<SGridColumn>;
}

export class SGrid extends Component<ISGridProps,ISGridState> {
    constructor(props: ISGridProps) {
        super(props);

        this.state = {
            columns: props.columns
        }
    }

    createColumns() {
        var columns = [];

        for (let index = 0; index < this.state.columns.length; index++) {
            let colData = this.state.columns[index];
            
            let cells = [];

            for (let index = 0; index < colData.cellInfos.length; index++) {
                const cellInfo = colData.cellInfos[index];
                
                cells.push((
                    <div className="s-grid-cell">{cellInfo.text}</div>
                ))
            }

            let col = (
                <div className="s-grid-col">
                    <div className="s-grid-col-header s-grid-cell">{colData.header.text}</div>
                    {cells}
                </div>
            )

            columns.push(col);
        }

        return columns;
    }

    render() {
        let columns = this.createColumns();

        return (
            <div className="s-grid">
                {columns}
            </div>
        )
    }
}