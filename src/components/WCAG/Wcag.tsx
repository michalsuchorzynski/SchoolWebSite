import React from 'react'

interface IWcagProps {
}

const Wcag = (props: IWcagProps): JSX.Element => {

    const normalClick = () => {
        document.body.classList.remove("fontSizeBigger");
        document.body.classList.remove("fontSizeBiggest");
        document.body.classList.remove("highContrast");
    }

    const handleNormalKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            normalClick();
        }
    }

    const biggerClick = () => {
        if (document.body.className?.indexOf("fontSizeBigger") === -1) {
            document.body.classList.add("fontSizeBigger");
        }
        document.body.classList.remove("fontSizeBiggest");
        document.body.classList.remove("highContrast");
    }

    const handleBiggerKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            biggerClick()
        }
    }
    const biggestClick = () => {
        if (document.body.className?.indexOf("fontSizeBiggest") === -1) {
            document.body.classList.add("fontSizeBiggest");
        }
        document.body.classList.remove("fontSizeBigger");
        document.body.classList.remove("highContrast");
    }

    const handleBiggestKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            biggestClick()
        }
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

    const handleHighContrastKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            highContrastClick()
        }
    }

    return (
        <div className="wcag">
            <div className="wcag_Item wcag_Item--normal" onClick={normalClick} onKeyDown={handleNormalKeyDown} tabIndex={1}>
                <span>A</span>
            </div>
            <div className="wcag_Item wcag_Item--bigger" onClick={biggerClick} onKeyDown={handleBiggerKeyDown} tabIndex={1}>
                <span>A</span>
            </div>
            <div className="wcag_Item wcag_Item--biggest" onClick={biggestClick} onKeyDown={handleBiggestKeyDown} tabIndex={1}>
                <span>A</span>
            </div>
            <div className="wcag_Item" onClick={highContrastClick} onKeyDown={handleHighContrastKeyDown} tabIndex={1}>
                <span>Wysoki kontrast</span>
            </div>
        </div>
    )
}

export default Wcag