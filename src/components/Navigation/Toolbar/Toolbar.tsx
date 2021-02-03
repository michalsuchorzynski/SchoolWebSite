import React from 'react'
import Logo from '../../Logo/Logo'
import { INavigationItem } from '../NavigationItems/NavigationItem/models/INavigationItem'
import NavigationItems from '../NavigationItems/NavigationItems'

interface IToollBarProps {
    items: INavigationItem[];
}

const Toolbar = (props: IToollBarProps): JSX.Element => {
    return (
        <header className="toolbar">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Logo />
                    </div>
                    <div className="col-8">
                        <NavigationItems
                            items={props.items}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Toolbar