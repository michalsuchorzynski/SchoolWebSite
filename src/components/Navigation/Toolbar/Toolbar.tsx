import React from 'react'
import Logo from '../../Logo/Logo'
import { INavigationItem } from '../NavigationItems/NavigationItem/models/INavigationItem'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo1 from '../../../assets/images/Logo.png';
import Logo2 from '../../../assets/images/projekt_z_klasa.jpg';

interface IToollBarProps {
    items: INavigationItem[];
}

const Toolbar = (props: IToollBarProps): JSX.Element => {
    return (
        <header className="toolbar">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Logo
                            image={Logo1}
                        />
                         <Logo
                            image={Logo2}
                        />
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