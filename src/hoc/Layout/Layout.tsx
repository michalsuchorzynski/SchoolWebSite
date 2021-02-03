import * as React from 'react'
import { INavigationItem } from '../../components/Navigation/NavigationItems/NavigationItem/models/INavigationItem'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const menuItems: INavigationItem[] = [
    {
        id: 'About',
        text: 'O szkole',
        path: '/about',
        subItems: [
            {
                id: 'About',
                text: 'W pigułce',
                path: '/about'
            },  
            {
                id: 'History',
                text: 'Historia szkoły',
                path: '/history'
            },  
           
        ]
    },
    {
        id: 'SchoolLive',
        text: 'Życie szkoły',
        path: '/schoolLive'
    },
    {
        id: 'Students',
        text: 'Dla Uczniów',
        path: '/students'
    },
    {
        id: 'Parents',
        text: 'Dla rodziców',
        path: '/parents'
    },
    {
        id: 'Contact',
        text: 'Kontakt',
        path: '/contact'
    },
]

class Layout extends React.PureComponent {
    render() {
        return (
            <>
                <Toolbar
                    items={menuItems}
                />
                <main className="">
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout