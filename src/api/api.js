import axios from 'axios';

export const getTwitterGeoData = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_geo');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getTwitterLanguageData = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_language');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

