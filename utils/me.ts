const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "YOUR API KEY";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const Word = '';
const promptString = `Word "I successfully deployed my latest MERN stack project, receiving positive feedback from both users and colleagues.
negative positive
subject Project Deployment Success: Positive Reactions from Users and Colleagues
sentimentScore Sentiment: Extremely Positive
Rating: 9.5
color #009933 
summary Successfully deployed my latest MERN stack project, garnering positive feedback from users and colleagues.
mood Triumphant
Word Encountered a challenging bug in my React Native code today, delaying the project timeline.
negative negative
subject Overcoming Development Hurdles: Addressing a Critical Bug in React Native Code
sentimentScore Sentiment: Negative
Rating: -5.5
color #cc3300
summary Encountered a challenging bug in my React Native code, causing a project timeline delay.
mood Frustrated
Word Received funding for my startup idea, marking a significant milestone in my entrepreneurial journey.
negative positive
subject Milestone Achieved: Securing Funding for My Startup Venture
sentimentScore Sentiment: Extremely Positive
Rating: 9.8
color #9966cc 
summary Securing funding for my startup idea marks a significant milestone, propelling my entrepreneurial journey forward
mood Ecstatic
Word Struggling with a complex CSS layout for my web application, feeling a bit overwhelmed.
negative negative
subject Milestone Achieved: Securing Funding for My Startup Venture
sentimentScore Sentiment: Negative
Rating: -3.8
color #9966cc
summary Facing challenges with a complex CSS layout for my web application, the struggle induces a sense of overwhelm.
mood Overwhelmed.
Word Today 
unfolded as a challenging day, filled with unexpected obstacles and a 
lingering sense of frustration. From the moment I woke up, a series of 
mishaps seemed to follow, leaving me grappling with a range of emotions.
 Mundane tasks became sources of stress, and even the usually uplifting 
moments felt marred by a cloud of negativity. As I reflect on the day, I
 am reminded that rough patches are a part of life, and tomorrow offers a
 fresh start to overcome these hurdles and embrace a more positive 
perspective.
negative negative
subject Overcoming a Tough Day: Embracing a Positive Perspective 
sentimentScore Sentiment: Negative
Rating: -7
color #666666 
summary "A day filled with setbacks, from a frantic morning rush to spilled coffee and missed appointments, unfolded with a cloud of misfortune. Mundane tasks became Herculean challenges, and simple interactions felt strained. Reflecting on the day, the acknowledgment emerges that not every day can be a triumph, fostering hope for a brighter, more fortunate chapter in tomorrow's promise."
mood Challenging
Word Today seemed like a relentless series of setbacks, each moment stacking up to contribute to a growing sense of disappointment. From the morning's frantic rush to spilled coffee and missed appointments, the day unfolded with a cloud of misfortune. Mundane tasks became Herculean challenges, and even the simplest interactions felt strained. As I reflect on the day, I'm reminded that not every day can be a triumph, and perhaps tomorrow holds the promise of a brighter, more fortunate chapter.
negative negative
subject Overcoming a Tough Day: Embracing a Positive Perspective
sentimentScore Sentiment: Negative
Rating: -7
color #cc3333 
summary A day filled with relentless setbacks, from a frantic morning to spilled coffee and missed appointments, unfolded with a cloud of misfortune. Mundane tasks felt like Herculean challenges, and simple interactions strained. Reflecting on the day, the writer acknowledges not every day is a triumph, hoping for a brighter, more fortunate tomorrow.
mood Disheartened.
Word Today was a wonderful day spent with cherished friends, filled with laughter and shared moments of joy. From a delightful brunch to a leisurely walk in the park, the day unfolded with a sense of warmth and camaraderie. Conversations flowed effortlessly, and each shared story brought smiles to our faces. As the day comes to a close, I'm grateful for the simple pleasures of friendship and the uplifting energy that these connections bring to my life.
negative positive
subject A Day of Friendship: Laughter, Joy, and Shared Moments
sentimentScore Sentiment: Extremely Positive
Rating: 9.8
color #66cc66 
summary "A delightful day with cherished friends, filled with laughter and shared moments of joy, unfolded from a delightful brunch to a leisurely walk in the park. Effortless conversations and shared stories brought smiles, and as the day concludes, gratitude resonates for the simple pleasures of friendship and the uplifting energy these connections bring to life."
mood Joyful
Word Paris has been a dream come true, and today was a highlight as I stood beneath the majestic Eiffel Tower. The city's charm, from its quaint streets to the aroma of freshly baked croissants, has enchanted my senses. Exploring the Louvre and indulging in delicious French cuisine added layers of delight to this memorable vacation. As the day winds down, I find myself grateful for the beauty of Paris and the unforgettable experiences that have made this trip truly magical.
negative positive
subject Enchanted Day in Paris: A Dream Come True Beneath the Eiffel Tower
sentimentScore Sentiment: Extremely Positive
Rating: 9.8
color #ffcc00 
summary A day 
in Paris beneath the Eiffel Tower was a dream realized, filled with 
enchanting moments from exploring quaint streets to savoring French 
cuisine. The allure of the Louvre and the aroma of freshly baked 
croissants added layers of joy to this memorable vacation. As the day 
concludes, gratitude fills the heart for the beauty of Paris and the 
magical experiences that made this trip unforgettable.
mood Enchanted.
Word As the sun greeted the day, I embarked on my daily routine with a renewed sense of purpose. Each task, from the morning coffee ritual to a brisk morning walk, unfolded seamlessly. The rhythmic routine provided a comforting backdrop, paving the way for a productive and fulfilling day. With a sense of accomplishment, I reveled in the simple joys and positive interactions that followed, savoring the beauty of a good day that emerged from the completion of familiar routines.
negative positive
subject A Day of Routines: Comfort, Productivity, and Fulfillment
sentimentScore Sentiment: Extremely Positive
Rating: 9.8
color #66cc66 
summary A day of routines, from morning coffee to a brisk walk, unfolded seamlessly, providing a comforting backdrop for a productive and fulfilling day. With a sense of accomplishment, I reveled in the simple joys and positive interactions that followed, savoring the beauty of a good day that emerged from the completion of familiar routines.
mood Uplifted
Word Today unfolded as a disheartening series of unfortunate events, each moment contributing to a growing sense of despair. From the chaotic morning rush to unforeseen obstacles throughout the day, a dark cloud of misfortune seemed to loom over every endeavor. Mundane tasks transformed into overwhelming challenges, and even the simplest interactions carried a weight of negativity. As I reflect on the day, I'm reminded that some days are an unfortunate mix of setbacks, and the hope for a more favorable tomorrow lingers with a sense of uncertainty.
negative negative
subject Overcoming a Tough Day: Embracing a Positive Perspective
sentimentScore Sentiment: Negative
Rating: -7
color #cc3333
summary A day of unfortunate events, from a chaotic morning to unforeseen obstacles, unfolded with a dark cloud of misfortune. Mundane tasks became overwhelming challenges, and even the simplest interactions carried a weight of negativity. Reflecting on the day, the writer acknowledges that some days are a mix of setbacks, and the hope for a more favorable tomorrow lingers with uncertainty.
mood Disheartened
Word ${Word}
negative`;
const stopSequences = [];

client.generateText({
  // required, which model to use to generate the result
  model: MODEL_NAME,
  // optional, 0.0 always uses the highest-probability result
  temperature: 0,
  // optional, how many candidate results to generate
  candidateCount: 1,
  // optional, number of most probable tokens to consider for generation
  topK: 40,
  // optional, for nucleus sampling decoding strategy
  topP: 0.95,
  // optional, maximum number of output tokens to generate
  maxOutputTokens: 1024,
  // optional, sequences at which to stop model generation
  stopSequences: stopSequences,
  // optional, safety settings
  safetySettings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":"BLOCK_LOW_AND_ABOVE"},{"category":"HARM_CATEGORY_TOXICITY","threshold":"BLOCK_LOW_AND_ABOVE"},{"category":"HARM_CATEGORY_VIOLENCE","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_SEXUAL","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_MEDICAL","threshold":"BLOCK_MEDIUM_AND_ABOVE"},{"category":"HARM_CATEGORY_DANGEROUS","threshold":"BLOCK_MEDIUM_AND_ABOVE"}],
  prompt: {
    text: promptString,
  },
}).then(result => {
  console.log(JSON.stringify(result, null, 2));
});