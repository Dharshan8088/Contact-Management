
import { useQuery } from 'react-query';

const fetchWorldData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  return response.json();
};

const fetchCountryData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  return response.json();
};

const fetchHistoricalData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.json();
};

export const useCovidData = () => {
  const worldData = useQuery('worldData', fetchWorldData);
  const countryData = useQuery('countryData', fetchCountryData);
  const historicalData = useQuery('historicalData', fetchHistoricalData);

  return { worldData, countryData, historicalData };
};
