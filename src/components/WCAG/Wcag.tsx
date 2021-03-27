import React from 'react'

interface IWcagProps {
}

const Wcag = (props: IWcagProps): JSX.Element => {

    const normalClick = () => {
        document.body.classList.remove("fontSizeBigger");
        document.body.classList.remove("fontSizeBiggest");
        document.body.classList.remove("highContrast");
    }
    const biggerClick = () => {
        if (document.body.className?.indexOf("fontSizeBigger") === -1) {
            document.body.classList.add("fontSizeBigger");
        }
        document.body.classList.remove("fontSizeBiggest");
        document.body.classList.remove("highContrast");
    }
    const biggestClick = () => {
        if (document.body.className?.indexOf("fontSizeBiggest") === -1) {
            document.body.classList.add("fontSizeBiggest");
        }
        document.body.classList.remove("fontSizeBigger");
        document.body.classList.remove("highContrast");
    }
    const highContrastClick = () => {
        document.body.classList.remove("fontSizeBigger");
        document.body.classList.remove("fontSizeBiggest");
        if (document.body.className?.indexOf("highContrast") === -1) {
            document.body.classList.add("highContrast");
        } else {
            document.body.classList.remove("highContrast");
        }

    }
    return (
        <div className="wcag">
            <div className="wcag_Item wcag_Item--normal" onClick={normalClick} tabIndex={1}>
                <span>A</span>
            </div>
            <div className="wcag_Item wcag_Item--bigger" onClick={biggerClick} tabIndex={1}>
                <span>A</span>
            </div>
            <div className="wcag_Item wcag_Item--biggest" onClick={biggestClick} tabIndex={1}>
                <span>A</span>
            </div>
            <div className="wcag_Item" onClick={highContrastClick} tabIndex={1}>
                <span>Wysoki kontrast</span>
            </div>
        </div>
    )
}

export default Wcag