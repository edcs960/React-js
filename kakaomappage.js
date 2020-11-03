// eslint-disable-next-line
import React, { Component } from "react";
import MapFunc from "./mapFunc"

import "./App.css";

class KakaoMap extends Component{
        render() {
        return (
            <div className="kakaomap">
                <MapFunc />
            </div>
        );
    }
}

export default KakaoMap;
