import * as React from 'react'
import { INavigationItem } from '../components/Navigation/NavigationItems/NavigationItem/models/INavigationItem'
import Toolbar from '../components/Navigation/Toolbar/Toolbar'

const menuItems: INavigationItem[] = [
    {
        id: 'About',
        text: 'O szkole',
        path: '/',
        subItems: [
            {
                id: 'About',
                text: 'W pigułce',
                path: '/'
            },
            {
                id: 'History',
                text: 'Historia szkoły',
                path: '/history'
            },
            {
                id: 'Teachers',
                text: 'Nauczyciele',
                path: '/teachers'
            },
            {
                id: 'Documents',
                text: 'Dokumenty',
                path: '/documents'
            },
            {
                id: 'Sport',
                text: 'Orlik',
                path: '/sport'
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
        path: '/students',
        subItems: [
            {
                id: 'Students',
                text: 'Informacje',
                path: '/students'
            },
            {
                id: 'Library',
                text: 'Biblioteka',
                path: '/library'
            },
            {
                id: 'Volunteering',
                text: 'Wolontariat',
                path: '/volunteering'
            },
            {
                id: 'GlobalEducation',
                text: 'Edukacja globalna',
                path: '/globalEducation'
            },
            {
                id: 'Council',
                text: 'Szamorząd szkolny',
                path: '/council'
            },
        ]
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
                <main
                    style={{
                        backgroundImage: 'url("./images/main.png")'
                    }}>
                        {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout