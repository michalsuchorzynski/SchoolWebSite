import React from 'react'
import { ITile } from './models/ITile'
import Tile from './Tile'

interface ITileListProps {
    items: ITile[];

}

const TileList = (props: ITileListProps): JSX.Element => {
    const tiles: JSX.Element[] = props.items.map((item, index) => {
        return (
            <div
                key={index}
                className="col-4"
            >
                <Tile {...item} />
            </div>
        )
    })
    return (
        <div className="container tile_list">
            <div className="row row-eq-height">
                {tiles}
            </div>
        </div>
    )
}

export default TileList