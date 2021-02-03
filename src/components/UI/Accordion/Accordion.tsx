import React from 'react'
import AccordionCard from './AccordionCard'
import { IAccordion } from './models/IAccordion'

interface IAccordionListProps {
    items: IAccordion[];
}

const Accordion = (props: IAccordionListProps): JSX.Element => {
    const renderCard = (item: IAccordion, index: number): JSX.Element => {
        let subItems: JSX.Element[] | undefined = undefined
        if (item.subItems && item.subItems.length > 0) {
            subItems = item.subItems.map((subItem, subIndex) => {
                return renderCard(subItem, subIndex)
            })
        }
        return (
            <div
                className="col-12"
                key={index}
            >
                <AccordionCard
                    header={item.header}
                    id={item.id}
                    content={item.content}
                    subItems={subItems}
                />
            </div>
        )
    }
    const accordions: JSX.Element[] = props.items.map((item, index) => {
        return renderCard(item, index)
    })
    return (
        <div className="container accordion">
            <div className="row">
                {accordions}
            </div>
        </div>
    )
}



export default Accordion