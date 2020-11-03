// eslint-disable-next-line
/* global kakao */
import React, {useEffect} from "react";

export default function MapFunc() {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        kakao.maps.load(() => {
            let container = document.getElementById("map"),
            options = {
            center : new kakao.maps.LatLng(37.6249, 127.1512),
            level:5,
            };

            var map = new kakao.maps.Map(container, options);

            map.setCenter(new kakao.maps.LatLng(37.6249, 127.1512))
        });
    }

    return <div id="map" style={{width:"50%", height:"50%"}}></div>;
}
    
    
