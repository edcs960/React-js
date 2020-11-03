//실패작

/*global kakao*/
import React,{Component} from "react";
import "./App.css";

class BusMap extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.async = true;
        script.src = "dapi.kakao.com/v2/maps/sdk.js?appkey=d4ebffa4ca3e278c9226de88fff64612&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(()=>{
                let container = document.getElementById("Busmap");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 3
                };

                let map = new window.kakao.maps.Map(container,options);
            });
        };

        
    }

    

    render() {
        return (
            <>
                <div id="Busmap" Classname="Busmap"></div>
            </>
        );
    }
}

export default BusMap;
