import * as React from 'react'

interface IGalleryProps {
    handleClick: () => void;
}

class Button extends React.PureComponent<IGalleryProps> {

    handleClick = () => {
        this.props.handleClick()
    }
    handleKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            this.props.handleClick()
        }
    }

    render() {
        return (
            <div
                className="button"
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                tabIndex={4}
            >
                <div className="button_Text">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Button