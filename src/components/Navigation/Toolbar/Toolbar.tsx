import React from 'react'
import Logo from '../../Logo/Logo'
import Wcag from '../../WCAG/Wcag'
import { INavigationItem } from '../NavigationItems/NavigationItem/models/INavigationItem'
import NavigationItems from '../NavigationItems/NavigationItems'

interface IToollBarProps {
    items: INavigationItem[];
}

const Toolbar = (props: IToollBarProps): JSX.Element => {
    return (
        <header className="toolbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <Logo
                            image="./images/Logo.png"
                        />
                        <Logo
                            image="./images/projekt_z_klasa.jpg"
                        />
                    </div>
                    <div className="col-4">
                        <NavigationItems
                            items={props.items}
                        />
                    </div>
                    <div className="col-3">
                        <Wcag></Wcag>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Toolbar