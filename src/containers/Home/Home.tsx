import React from 'react'
import Button from '../../components/UI/Button/Button'
import MainPanel from '../../hoc/MainPanel'

class Home extends React.PureComponent {


    public render(): JSX.Element {
        return (
            <MainPanel center={true}>
                <div
                    className="container"
                >
                    <div
                        className="row"
                    >
                        <div
                            className="col-12"
                        >
                            <h2 className="mainTitle">Szkoła Podstawowa im. Bohaterów Września 1939 r.</h2>
                            <h4 className="subTitle"> w Świętosławiu.</h4>
                        </div>
                    </div>
                    <div
                        className="row"
                    >
                        <div
                            className="col-4 offset-4"
                        >
                            <Button
                                handleClick={() => { window.open('https://uonetplus.vulcan.net.pl/gminaciechocin/?logout=true', '_blank') }}
                            >Logowanie do e-Dziennika</Button>
                        </div>
                    </div>
                </div>
            </MainPanel>
        )
    }
}

export default Home