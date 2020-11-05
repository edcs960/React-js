// eslint-disable-next-line
/* global kakao */
import React, { Component } from "react";
import "./App.css";

var MAP;
var Points = [];
var PointGeumjong = [];
var PointBus301 = [];
var WhatBus;
var Markers = [];

class KakaoMap extends Component{
    constructor(props){
        super(props);
        this.MakeGeumjong = this.MakeGeumjong.bind(this);
        this.MakeBus301 = this.MakeBus301.bind(this);
    }

    componentDidMount(){
        kakao.maps.load (() =>{ // 카카오맵 api 가져오기
            var mapContainer = document.getElementById('map'),
                mapOptions = {
                center: new kakao.maps.LatLng(35.257225, 129.087442),
                level: 5
                };
            var map = new kakao.maps.Map(mapContainer,mapOptions);

            
            map.setDraggable(false);
            map.setZoomable(false);
            //map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
            MAP = map;
        });
    }

    setMarkers(map){ // 마커 지우거나 표시하는 용도
        for (var i = 0; i < Markers.length; i++) {
            Markers[i].setMap(map);
        } 
    }

    MakeBus301(){ // 301번 버스 정류장 마크
        this.setMarkers(null);
        WhatBus = 2;
        console.log("bus301 " + WhatBus);
        
        if(WhatBus === 2){
            PointBus301 = [
                {
                    content: '<div>금정공영차고지</div>',
                    latlng: new kakao.maps.LatLng(35.289129, 129.097220)
                },
                {
                    content: '<div>부산종학터미널(노포역)</div>',
                    latlng: new kakao.maps.LatLng(35.283681, 129.094605)
                },
                {
                    content: '<div>노포삼거리</div>',
                    latlng: new kakao.maps.LatLng(35.280041, 129.093451)
                },
                {
                    content: '<div>범어사입구</div>',
                    latlng: new kakao.maps.LatLng(35.275555, 129.089522)
                },
                {
                    content: '<div>남산동농협</div>',
                    latlng: new kakao.maps.LatLng(35.272405, 129.089021)
                },
                {
                    content: '<div>남산동새벽시장</div>',
                    latlng: new kakao.maps.LatLng(35.269287, 129.089090)
                },
                {
                    content: '<div>남산고등학교입구</div>',
                    latlng: new kakao.maps.LatLng(35.267773, 129.089107)
                },
                {
                    content: '<div>남산고등학교</div>',
                    latlng: new kakao.maps.LatLng(35.267025, 129.085547)
                },
                {
                    content: '<div>부산외대정문</div>',
                    latlng: new kakao.maps.LatLng(35.266461, 129.084652)
                },
                {
                    content: '<div>부산외국어대학교캠퍼스</div>',
                    latlng: new kakao.maps.LatLng(35.267193, 129.080166)
                },
                {
                    content: '<div>남산동럭키아파트</div>',
                    latlng: new kakao.maps.LatLng(35.265374, 129.088766)
                },
                {
                    content: '<div>남산초등학교</div>',
                    latlng: new kakao.maps.LatLng(35.262111, 129.088029)
                },
                {
                    content: '<div>선경3차아파트</div>',
                    latlng: new kakao.maps.LatLng(35.258574, 129.087743)
                },
                {
                    content: '<div>신동아아파트</div>',
                    latlng: new kakao.maps.LatLng(35.256179, 129.087749)
                },
                {
                    content: '<div>롯데캐슬정문</div>',
                    latlng: new kakao.maps.LatLng(35.253014, 129.087753)
                },
                {
                    content: '<div>롯데캐슬입구</div>',
                    latlng: new kakao.maps.LatLng(35.250643, 129.087811)
                },
                {
                    content: '<div>구서시장</div>',
                    latlng: new kakao.maps.LatLng(35.246967, 129.088882)
                },
                {
                    content: '<div>국민은행구서동지점</div>',
                    latlng: new kakao.maps.LatLng(35.244943, 129.088504)
                },
                {
                    content: '<div>금정산쌍용예가1차</div>',
                    latlng: new kakao.maps.LatLng(35.242971, 129.086776)
                },
                {
                    content: '<div>장전초등학교</div>',
                    latlng: new kakao.maps.LatLng(35.240755, 129.086454)
                },
                {
                    content: '<div>장전동어린이놀이터</div>',
                    latlng: new kakao.maps.LatLng(35.238118, 129.086477)
                },
                {
                    content: '<div>장전중앙교회</div>',
                    latlng: new kakao.maps.LatLng(35.235269, 129.086151)
                },
                {
                    content: '<div>현대아파트</div>',
                    latlng: new kakao.maps.LatLng(35.233128, 129.085581)
                },
                {
                    content: '<div>부산대학교정문</div>',
                    latlng: new kakao.maps.LatLng(35.231823, 129.085229)
                },
                {
                    content: '<div>부산대학교후문</div>',
                    latlng: new kakao.maps.LatLng(35.228642, 129.085272)
                },
                {
                    content: '<div>부산대앞부산은행</div>',
                    latlng: new kakao.maps.LatLng(35.230585, 129.086433)
                },
                {
                    content: '<div>부산대역</div>',
                    latlng: new kakao.maps.LatLng(35.231150, 129.087799)
                },
                {
                    content: '<div>부곡대우아파트</div>',
                    latlng: new kakao.maps.LatLng(35.231052, 129.090120)
                },
                {
                    content: '<div>경남한신아파트</div>',
                    latlng: new kakao.maps.LatLng(5.236118, 129.091988)
                },
                {
                    content: '<div>윤산터널입구</div>',
                    latlng: new kakao.maps.LatLng(35.239056, 129.092473)
                },
                {
                    content: '<div>금정구청/부산다톨릭대</div>',
                    latlng: new kakao.maps.LatLng(35.242266, 129.093004)
                },
                {
                    content: '<div>금정문화회관</div>',
                    latlng: new kakao.maps.LatLng(35.245732, 129.094858)
                },
                {
                    content: '<div>동래초등학교</div>',
                    latlng: new kakao.maps.LatLng(35.247634, 129.097082)
                },
                {
                    content: '<div>금단마을</div>',
                    latlng: new kakao.maps.LatLng(35.252351, 129.100079)
                },
                {
                    content: '<div>브니엘고등학교</div>',
                    latlng: new kakao.maps.LatLng(35.256752, 129.102117)
                },
                {
                    content: '<div>신현마을 입구</div>',
                    latlng: new kakao.maps.LatLng(35.258455, 129.102783)
                },
                {
                    content: '<div>부산대학교정문</div>',
                    latlng: new kakao.maps.LatLng(35.232475, 129.086886)
                },
                {
                    content: '<div>장전1치안센터</div>',
                    latlng: new kakao.maps.LatLng(35.235802, 129.087664)
                },
                {
                    content: '<div>장전역</div>',
                    latlng: new kakao.maps.LatLng(35.238548, 129.087905)
                }
            ]
            Points = PointBus301;
            for(var i = 0;i<Points.length;i++){
                var Marker = new kakao.maps.Marker({
                    map: MAP,
                    position: Points[i].latlng
                });
                Markers.push(Marker);

                var infowindow = new kakao.maps.InfoWindow({
                    content: Points[i].content
                });
/*
                var linePath = [
                    Points[i].latlng
                ]
*/
                kakao.maps.event.addListener(Marker,'mouseover',makeOverListener(MAP, Marker, infowindow));
                kakao.maps.event.addListener(Marker,'mouseout',makeOutListener(infowindow));
            };
/*
            var polyline = new kakao.maps.Polyline({
                path: linePath,
                strokeWeight: 5,
                strokeColor: '#FFAE00',
                strokeOpacity: 0.7,
                strokeStyle: 'solid'
            });

            polyline.setMap(MAP);
*/
            function makeOverListener(MAP, Marker, infowindow){
                return function(){
                    infowindow.open(MAP, Marker);
                }
            }

            function makeOutListener(infowindow){
                return function(){
                    infowindow.close();
                }
            }
            return console.log("성공하였습니다.");
        }else{
            return console.log("실패하였습니다.");
        }
    }

    MakeGeumjong() { // 금정3번 버스 정류장 마크
        this.setMarkers(null);
        WhatBus = 1;
        console.log("Geumjong " + WhatBus);
        
        if(WhatBus === 1) {
            PointGeumjong = [
                {
                    content: '<div>구서역</div>',
                    latlng: new kakao.maps.LatLng(35.246769,129.0909538)
                },
                {
                    content: '<div>이마트</div>',
                    latlng: new kakao.maps.LatLng(35.249182,129.0897348)
                },
                {
                    content: '<div>롯데캐슬입구</div>',
                    latlng: new kakao.maps.LatLng(35.250609, 129.087878)
                },
                {
                    content: '<div>롯데캐슬정문</div>',
                    latlng: new kakao.maps.LatLng(35.252585, 129.087834)
                },
                {
                    content: '<div>태광인력개발원</div>',
                    latlng: new kakao.maps.LatLng(35.253180, 129.084613)
                },
                {
                    content: '<div>우성아파트 3동</div>',
                    latlng: new kakao.maps.LatLng(35.254512, 129.084912)
                },
                {
                    content: '<div>우성아파트 10동</div>',
                    latlng: new kakao.maps.LatLng(35.255963, 129.084679)
                },
                {
                    content: '<div>우성아파트 12동</div>',
                    latlng: new kakao.maps.LatLng(35.256957, 129.084601)
                },
                {
                    content: '<div>선경3차입구</div>',
                    latlng: new kakao.maps.LatLng(35.258769, 129.084131)
                },
                {
                    content: '<div>약수터선경3차후분</div>',
                    latlng: new kakao.maps.LatLng(35.260848, 129.084441)
                },
                {
                    content: '<div>선경3차아파트312동</div>',
                    latlng: new kakao.maps.LatLng(35.262762, 129.084596)
                },
                {
                    content: '<div>남산성당/부산과학고등학교</div>',
                    latlng: new kakao.maps.LatLng(35.264164, 129.085111)
                },
                {
                    content: '<div>부산외국어대학교정문</div>',
                    latlng: new kakao.maps.LatLng(35.266218, 129.084834)
                },
                {
                    content: '<div>부산외국어대학교캡퍼스</div>',
                    latlng: new kakao.maps.LatLng(35.267186, 129.0801791)
                },
                {
                    content: '<div>남산고등학교</div>',
                    latlng: new kakao.maps.LatLng(35.267075,129.0848108)
                },
                {
                    content: '<div>탐앤탐스부산외대점</div>',
                    latlng: new kakao.maps.LatLng(35.267068,129.0874178)
                },
                {
                    content: '<div>천일아파트</div>',
                    latlng: new kakao.maps.LatLng(35.266897, 129.089845)
                },
                {
                    content: '<div>성원아파트</div>',
                    latlng: new kakao.maps.LatLng(35.266841, 129.091357)
                },
                {
                    content: '<div>남산역</div>',
                    latlng: new kakao.maps.LatLng(35.265052, 129.092238)
                },
                {
                    content: '<div>남산교회</div>',
                    latlng: new kakao.maps.LatLng(35.265036,129.0897518)
                },
                {
                    content: '<div>전원빌라</div>',
                    latlng: new kakao.maps.LatLng(35.265602,129.0883188)
                }
            ];
            Points = PointGeumjong;
            for(var i = 0;i<Points.length;i++){
                var Marker = new kakao.maps.Marker({
                    map: MAP,
                    position: Points[i].latlng
                });
                Markers.push(Marker);

                var infowindow = new kakao.maps.InfoWindow({
                    content: Points[i].content
                });
                /*
                var linePath = [
                    PointGeumjong[i].latlng
                ]
                */
                kakao.maps.event.addListener(Marker,'mouseover',makeOverListener(MAP, Marker, infowindow));
                kakao.maps.event.addListener(Marker,'mouseout',makeOutListener(infowindow));
            };
/*
            var polyline = new kakao.maps.Polyline({
                path: linePath,
                strokeWeight: 5,
                strokeColor: '#FFAE00',
                strokeOpacity: 0.7,
                strokeStyle: 'solid'
            });

            polyline.setMap(MAP);
*/
            function makeOverListener(MAP, Marker, infowindow){
                return function(){
                    infowindow.open(MAP, Marker);
                }
            }

            function makeOutListener(infowindow){
                return function(){
                    infowindow.close();
                }
            }
            return console.log("성공하였습니다.");
        }else{
                return alert("실패하였습니다.");
        }
    }

    
        
    render() {
        return (
            <div className="kakaomap">
                    <button name="Geumjeong" id="Geumjeong" value="금정3번 버스" onClick={this.MakeGeumjong}>금정 3번</button>
                    <button name="Bus301" id="Bus301" value="301번 버스" onClick={this.MakeBus301}>301번 버스</button>
                    <botton name="DelMarker" id="DelMarker" onClick=""></botton>
                <div id="map" name="map" style={{width:"800px", height:"800px"}}></div>
            </div>
        );
    }
}

export default KakaoMap;