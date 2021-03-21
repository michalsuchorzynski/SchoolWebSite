import * as React from 'react'

interface IMainPanelProps {
    center?: boolean;
}
class MainPanel extends React.PureComponent<IMainPanelProps> {
    public render(): JSX.Element {
        return (
            <div
                className={`mainPanel ${this.props.center ? 'mainPanel--center' : ''}`}
            >
                <div
                    className={`container-fluid mainPanel_Content ${this.props.center ? 'mainPanel_Content--center' : ''}`}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MainPanel