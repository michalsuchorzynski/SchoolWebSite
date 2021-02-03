import React from 'react'

class Home extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Home!!</h1>
                </div>
                <img src="/1.jpg"></img>
            </React.Fragment>
        )
    }
}

export default Home