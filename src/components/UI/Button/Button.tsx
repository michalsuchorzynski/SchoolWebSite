import * as React from 'react'

interface IGalleryProps {
    handleClick: () => void;
}

class Button extends React.PureComponent<IGalleryProps> {

    handleClick = () => {
        this.props.handleClick()
    }

    render() {
        return (
            <div
                className="button"
                onClick={this.handleClick}
            >
                <div className="button_Text">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Button