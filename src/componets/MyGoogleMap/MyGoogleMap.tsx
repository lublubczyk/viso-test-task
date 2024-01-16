import { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { apiKey } from "../../constants";
import style from './MyGoogleMap.module.css';
import "";

const containerStyle = {
    width: '100%',
    height: '100%'
};
const center = {
    lat: 49.81652427119113,
    lng: 23.99564785074821
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false
};

const firebaseConfig = {

}
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

const MyGoogleMap = () => {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    });

    const mapRef = useRef< google.maps.Map | undefined>(undefined);
    
    const onLoad = useCallback(function callback(map: google.maps.Map) {
        mapRef.current = map
    }, []);
    
    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        mapRef.current = undefined;
    }, []);
    
    //const onClick = (location) => {
    //    console.log(location)
    //}

    return (
        <div className={style.MyGoogleMap}>
            
            {isLoaded &&
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={defaultOptions}
                    onClick={(e: google.maps.MapMouseEvent) => {
                        const lat = e.latLng!.lat();
                        const lng = e.latLng!.lng();
                        console.log()
                    }}
                >
                    <Marker position={center}/>
                </GoogleMap>
            }
        </div>
    )
};

export { MyGoogleMap };