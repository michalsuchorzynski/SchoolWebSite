import React, { useState } from 'react'
import { INavigationItem } from './NavigationItem/models/INavigationItem'
import NavigationItem from './NavigationItem/NavigationItem'
import SubMenu from './SubMenu/SubMenu'

interface INavigationItemsProps {
    items: INavigationItem[];
}
interface INavigationItemsState {
    subMenuVisible: boolean;
}

const NavigationItems = (props: INavigationItemsProps): JSX.Element => {
    const items: JSX.Element[] = props.items.map((item, index) => {
        return (
            <React.Fragment
                key={index}
            >
                <NavigationItem
                    {...item}
                />
            </React.Fragment>
        )
    })

    return (
        <nav className="navigationsItems">
            <ul className="navigationsItems_menu">
                {items}
            </ul>
        </nav>
    )
}

export default NavigationItems