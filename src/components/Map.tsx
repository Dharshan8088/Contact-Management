
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCovidData } from '../hooks/useCovidData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  const { countryData } = useCovidData();

  if (countryData.isLoading) return <div>Loading...</div>;
  if (countryData.isError) return <div>Error loading data</div>;

  return (
    <div className="h-64 w-full bg-gray-100 p-4 rounded-md shadow-md">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countryData.data.map((country: any) => (
          <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
