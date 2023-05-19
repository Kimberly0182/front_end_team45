import axios from 'axios';

// Get all data for the map
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

// Language for Bar Chart
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

// Ancestry for Bar Chart
export const getTwitterAncestryData = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_ancestry');
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

// Get emoji count in twitter
export const getTwitterEmoji = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_emoji_count');
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

// Get emoji count with postive sentiments in twitter
export const getTwitterPositive = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_sentiment_emoji_count?sentiment=Positive');
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

// Get emoji count with negative sentiments in twitter
export const getTwitterNegative = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_sentiment_emoji_count?sentiment=Negative');
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

// Get emoji count with neutral sentiments in twitter
export const getTwitterNeutral = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_sentiment_emoji_count?sentiment=Neutral');
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

// Get emoji count in mastodon
export const getMastodonEmoji = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/mastodon_emoji_count');
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

// Get emoji count with postive sentiments in mastodon
export const getMastodonPositive = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/mastodon_sentiment_emoji_count?sentiment=Positive');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

// Get emoji count with negative sentiments in mastodon
export const getMastodonNegative = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/mastodon_sentiment_emoji_count?sentiment=Negative');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

// Get emoji count with neutral sentiments in mastodon
export const getMastodonNeutral = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/mastodon_sentiment_emoji_count?sentiment=Neutral');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

// Get sentiment count in twitter
export const getTwitterSentiment = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/twitter_sentiment_count');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Get sentiment count in mastodon
export const getMastodonSentiment = async () => {
  try {
    const response = await axios.get('http://server.muqoe.xyz:5566/mastodon_sentiment_count');
    if (response.data.status === 'success') {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}