import React from 'react'
import Button from '../../components/UI/Button/Button'

class Home extends React.PureComponent {

    private handleButtonClick = () => {

    }
    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div
                    className="container"
                >
                    <div
                        className="row"
                    >
                        <div
                            className="col-12"
                        >
                            <h2 className="mainTitle">Szkoła Podstawowa w Świętosławiu</h2>
                            <h4 className="subTitle">im. Bohaterów Września 1939 r.</h4>
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
                            <Button
                                handleClick={() => { window.open(`${window.location.origin}/public/pdf/ewaluacja.pdf`, '_blank') }}
                            >Raport z ewaluacji</Button>
                            <Button
                                handleClick={() => { window.open(`${window.location.origin}/public/pdf/300.pdf`, '_blank') }}
                            >Dobry start 300 dla ucznia</Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home