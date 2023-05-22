<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-content">
          <BarEmoji />
        </div>
      </div>
      
      <div class="chart-card">
        <div class="chart-content">
          <EmojiCloud />
        </div>
      </div>
    </div>

    <div class="chart-row">
      <div class="chart-card">
        <div>
          <h1>For this project, we have summarised the most commonly used emojis 
            for both twitter and Mastodon. We have discovered that for Twitter tweets, 
            the most commonly used emojis are the ones which have a positive sentiment, 
            that the top five are ‘rolling_on_the_floor_laughing’,  ‘face_with_tears_of_joy’, 
            'red_heart ',  'folded_hands ', 'smiling_face_with_heart-eyes ' which all have a 
            positive sentiment. Alternatively for Mastodon the top 5 most used emojis are 
            'Ukraine', ‘green_square’, ‘red_heart’, ‘yellow_square’,  
            ‘face_with_tears_of_joy’, and ‘white_square’. Overall, it seems like while for 
            twitter, the posts with emojis generally have a positive sentiment, the post for 
            Mastodon seems to be highly concerned about the Ukraine war, and also by 
            inspecting at the toot texts for the toots that used the different ‘square’ 
            emojis, it has been shown that their users really enjoy playing Wordle with 
            the different ‘square’ emojis.</h1>
            
          <h1>While for both Twitter and Mastodon, many emojis occur in all 
            types of sentiment posts. Some emojis have been shown to have a 
            strong correlation with the sentiment. By looking at the most commonly 
            used emojis for Twitter tweets, while the two emoji 
            ‘rolling_on_the_floor_laughing’ and ‘face_with_tears_of_joy’ 
            often appears in posts of all sentiments, it can be seen that 
            within the top 5 most commonly used emojis for positive sentiment
             tweets, emojis such as 'red_heart ', 'folded_hands ', 
             'smiling_face_with_heart-eyes ', 'smiling_face_with_hearts'
              all demonstrate a positive emotion, having a representation 
              of some forms of happy, like or support. While for the most 
              commonly used emojis in negative sentiment tweets, there are 
              emojis such as 'face_with_rolling_eyes', 'loudly_crying_face ', 
              'enraged_face ', which all have a representation of negative 
              emotion such as sadness or anger.</h1> 

          <h1>Similarly, for Maston toots, emojis such as 'red_heart', 
            'smiling_face_with_smiling_eyes', 'smiling_face_with_hearts', 
            ‘ smiling_face_with_heart-eyes', 'sparkles' are most commonly 
            used for positive sentiment toots, having representations of 
            like or happy, while for the negative sentiment toots, the 
            most commonly used emojis are 'Ukraine', 'warning', 'high_voltage',  
            'loudly_crying_face', 'face_with_rolling_eyes', which all have a 
            meaning similar to danger, sadness, frustration, or a thing like 
            the Ukraine flag which can be linked to the current Ukraine war.</h1>
          
          <h1>Hence, emojis within sentences can be shown to have a linguistic 
            function in conversations and can help determine the sentiment of sentences.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BarEmoji from './graph/BarEmoji.vue';
  import EmojiCloud from './graph/EmojiCloud.vue';

  export default {
    name: "Top10Emoji",
    components: {
        BarEmoji,
        EmojiCloud,
    },
  };
</script>

<style scoped>
.dashboard-container {
  font-family: 'Alegreya', serif;
  background-color: #F8F9FA;
  margin-left: 160px;
  padding: 2rem;
}

.chart-row {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.chart-card {
  background-color: white;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 0 1rem;
  padding: 2rem;
  flex: 1 0 46%;
  margin-bottom: 10px;
}

.chart-content {
  justify-content: center;
  align-items: center;
  display: flex;
  height: auto;
}

@media (max-width: 800px) {
  .chart-card {
    flex: 1 0 100%;
  }
}
</style>