import { useCallback, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { defaultOptions, center, containerStyle, key } from '../../constants';
import { IMarker } from "../../interfaces";
import { MyMarkers } from "../MyMarkers";
import { Button } from "../Button";
import style from './MyGoogleMap.module.css';

//const API_KEY = process.env.REACT_APP_API_KEY;

const MyGoogleMap = () => {
    
    const [markers, setMarkers] = useState<IMarker[]>(center);
    const mapRef = useRef<google.maps.Map | undefined>(undefined);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key
    });

    const onLoad = useCallback(function callback(map:google.maps.Map | undefined) {
        mapRef.current = map
    }, []);
    
    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        mapRef.current = undefined;
    }, []);
    
    const onClick = (e: google.maps.MapMouseEvent) => {
        const lat = e.latLng!.lat();
        const lng = e.latLng!.lng();
        setMarkers([...markers, { lat, lng }])
    };

    return (
        <div className={style.MyGoogleMap}>
            <Button setMarkers={setMarkers} />
            {isLoaded &&
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center[0]}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={defaultOptions}
                    onClick={onClick}
                >
                    <MyMarkers markers={ markers } />
                </GoogleMap>
            }
        </div>
    )
};

export { MyGoogleMap };