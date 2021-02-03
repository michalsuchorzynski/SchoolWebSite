import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ITile {
    id: string;
    icon: IconProp
    header: string;
    subHeader: string;
    text: string;
}