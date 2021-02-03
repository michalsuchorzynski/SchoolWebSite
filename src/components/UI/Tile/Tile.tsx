import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ITile } from './models/ITile'

interface ITileProps extends ITile {
}

const Tile = (props: ITileProps): JSX.Element => {
    return (
        <div className="tile">
            <div className="tile_icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className="tile_header">
                <span>
                    {props.header}
                </span>
            </div>
            {
                props.subHeader ?
                    <div className="tile_subHeader">
                        <span>
                            {props.subHeader}
                        </span>
                    </div>
                    : null
            }
            <div className="tile_text">
                <span>
                    {props.text}
                </span>
            </div>
        </div>
    )
}

export default Tile