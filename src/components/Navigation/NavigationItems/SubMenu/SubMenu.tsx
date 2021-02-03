import React from 'react'
import { INavigationItem } from '../NavigationItem/models/INavigationItem'
import NavigationItem from '../NavigationItem/NavigationItem'

interface INavigationItemsProps {
    items: INavigationItem[];
}

const SubMenu = (props: INavigationItemsProps): JSX.Element => {
    const items: JSX.Element[] = props.items.map((item, index) => {
        return (
            <NavigationItem
                key={index}
                {...item}
            />
        )
    })
    return (
            <ul className="subMenu">
                {items}
            </ul>
    )
}

export default SubMenu