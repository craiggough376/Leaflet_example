import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import ChangeCenter from './ChangeCenter'

const MapBox = ({country}) => {

    const coordinates = [country.latlng[0], country.latlng[1]]

    return(
        <>
            <MapContainer center={coordinates} zoom={5} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ChangeCenter center={coordinates} zoom={5}/>
            </MapContainer>
        </>
    )
}

export default MapBox;