import { FC } from "react";
import { Marker } from "@react-google-maps/api";

import { IMarker } from "../../interfaces";

interface IProps{
    markers: IMarker[]
}

const MyMarkers: FC<IProps> = ({ markers }) => {
    return (
        <div>
            {markers.map((position, ind) => <Marker key={position.lat} position={position} title={'' + (ind + 1)} draggable={true} />)}
        </div>
    )
};

export { MyMarkers };