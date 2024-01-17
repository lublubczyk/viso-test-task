import { FC } from 'react';

import { center } from '../../constants';
import style from './Button.module.css';
import { IMarker } from '../../interfaces';

interface IProps{
    setMarkers: (markers:IMarker[]) => void
}
const Button:FC<IProps> = ({setMarkers}) => {
    return (
        <button className={style.Button} onClick={()=> setMarkers(center)} >Delete Markers</button>
    )
};

export { Button };