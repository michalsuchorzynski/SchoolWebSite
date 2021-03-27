import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenu from '../SubMenu/SubMenu'
import { INavigationItem } from './models/INavigationItem'

interface INavigationItemProps extends INavigationItem {
}

const NavigationItem = (props: INavigationItemProps): JSX.Element => {
    const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false)

    let subMenu: JSX.Element | undefined = undefined
    if (subMenuVisible && props.subItems) {
        subMenu = (
            <SubMenu
                items={props.subItems}
            />
        )
    }
    const handleKeyDown = (event: any) => {
        if (event.keyCode === 32) {
            setSubMenuVisible(!subMenuVisible)
        }
    }
    return (
        <li
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
        >
            <Link
                to={props.path}
                tabIndex={3}
            >{props.text}</Link>
            {subMenu}
        </li>
    )
}

export default NavigationItem