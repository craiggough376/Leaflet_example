import { useMap } from 'react-leaflet'

const ChangeCenter = ({center, zoom}) => {
    const map = useMap();
    map.flyTo(center, zoom);
    return null;
}

export default ChangeCenter;