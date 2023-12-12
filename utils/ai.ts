// import PaLM from "palm-api";
import z from "zod";

import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis"

const iam = google.iam('v1');


// Constants for the generative AI
// const TUNED_MODEL = "tunedModels/mood-analyser-s3iup6w0srjv"
const MODEL_NAME = "models/text-bison-001";
const PALM_API_KEY = "AIzaSyDg8zPBkwddqaaeRJxZb4FMU-5aY_h5TUg";

// const projectId = "atomic-shine-401719"
// const serviceAccountEmail = "firstproject@atomic-shine-401719.iam.gserviceaccount.com"

// const permissionService = iam.projects.locations.global.tunedModels;

// Create a TextServiceClient with authentication
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(PALM_API_KEY),
});

// const auth =  new GoogleAuth().getClient();



// const managePermissions = async () => {
//   try {
//     // Grant permission to the service account
//     const permissionRequest = {
//       resource: TUNED_MODEL,
//       auth: auth, // Replace with your authentication object
//       requestBody: {
//         policy: {
//           bindings: [
//             {
//               role: 'roles/aiplatform.tuner',
//               members: [`serviceAccount:${serviceAccountEmail}`],
//             },
//           ],
//         },
//       },
//     };

//     const response = await permissionService.setIamPolicy(permissionRequest);
//     console.log('Permission granted:', response.data);
//   } catch (error) {
//     console.error('Error granting permission:', error);
//   }
// };




export const analyse = async (prompt) => {
  // await managePermissions();
  // Define the Word variable
  // Define the promptString with examples
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

  // Define stopSequences
  const stopSequences = [];

  try {
    // Call the Palm API to generate text
    const result = await client.generateText({
      model: MODEL_NAME,
      temperature: 0,
      candidateCount: 1,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
      stopSequences: stopSequences,
      safetySettings: [
        {
          category: "HARM_CATEGORY_DEROGATORY",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_TOXICITY",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_VIOLENCE",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUAL",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_MEDICAL",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
      prompt: {
        text: promptString,
      },
    });

    // Assuming 'result' is the variable holding your API response

    // Assuming 'result' is the variable holding your API response

    // Assuming 'result' is the variable holding your API response

    // Assuming 'result' is the variable holding your API response

    // Assuming 'result' is the variable holding your API response

    // console.log("results:", result);

    if (
      result &&
      result.length > 0 &&
      result[0].candidates &&
      result[0].candidates.length > 0
    ) {
      const outputString = result[0].candidates[0].output;

      // Log the raw outputString
      // console.log("Raw Output String:", outputString);

     // Log the raw outputString
// console.log("Raw Output String:", outputString);

if (outputString) {
    const lines = outputString.split('\n').map(line => line.trim());
  
    // Extract information
    const mood = lines.find(line => line.startsWith('mood')).split(' ')[1];
    const subject = lines.find(line => line.startsWith('subject')).split(' ').slice(2).join(' ');
    const sentimentScore = lines.find(line => line.startsWith('sentimentScore')).split(' ')[2];
    const rating = lines.find(line => line.startsWith('Rating')).split(' ')[1];
    const color = lines.find(line => line.startsWith('color')).split(' ')[1];
    const summary = lines.find(line => line.startsWith('summary')).split(' ').slice(1).join(' ');

    // Log the variables
    console.log("Mood:", mood);
    console.log("Subject:", subject);
    console.log("Sentiment Score:", sentimentScore);
    console.log("Rating:", rating);
    console.log("Color:", color);
    console.log("Summary:", summary);
} else {
    console.error("Invalid or undefined outputString");
}

      
      // Split the multiline string into an array of lines
      // const lines = outputString.split("\n");

      // // Initialize an object to hold the parsed output
      // let outputJson: { [key: string]: string } = {};

      // // Process each line and add key-value pairs to the outputJson object
      // lines.forEach((line) => {
      //   // Split each line into key and value using the first colon
      //   const [key, ...value] = line.split(":");

      //   // Join the remaining elements of the 'value' array and trim any extra whitespace
      //   const trimmedValue = value.join(":").trim();

      //   // Add key-value pair to the outputJson object
      //   outputJson[key.trim()] = trimmedValue;
      // });

      // Access specific properties

      // const mood = outputJson["mood"];
      // const subject = outputJson.subject;
      // const sentimentScore = outputJson.sentimentScore;
      // const rating = outputJson.Rating;
      // const color = outputJson.color;
      // const summary = outputJson.summary;

      // // Log the extracted properties
      // console.log("Mood:", mood);
      // console.log("Subject:", subject);
      // console.log("Sentiment Score:", sentimentScore);
      // console.log("Rating:", rating);
      // console.log("Color:", color);
      // console.log("Summary:", summary);
    } else {
      console.error("Invalid response structure");
    }

    // Log the result
    // console.log(JSON.stringify(result, null, 2));

    // Return the result or handle it further as needed
    return result;
  } catch (error) {
    // Handle errors if any
    console.error(error);
    // Return an error response or handle it as needed
    return { error: "An error occurred during analysis." };
  }
};

// export const analyse = async (prompt) => {
//     const PALM_API_KEY = "AIzaSyA_xodAIK0J-QBwq7tfCigl9LdkvNq4JJc";
//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${PALM_API_KEY}`;

//     // const Mood = z.object({
//     //     mood: z.string().describe("The mood of the person who wrote the journal entry."),
//     //     subject: z.string().describe("The subject of the journal entry."),
//     //     negative: z.boolean().describe("is the journal entry negative? (i.e. does it contain negative emotions?)."),
//     //     summary: z.string().describe("A summary of the journal entry."),

//     // });

//     const bot = new PaLM(PALM_API_KEY);

//     bot.ask(prompt, {
//         temperature: 0,
//         context: "the mood of the person who wrote the journal entry",
//         examples: [
//             ["Today has been quite challenging for me. As a software developer with expertise in the MERN stack, HTML, CSS, and JavaScript, including React Native, I faced persistent coding issues and unexpected bugs, leading to frustration and setbacks in my projects. To decompress from the stress, I turned to my passion for MMA, "," negative"],

//             ["Today brought immense joy as I finally acquired the pair of shoes I've been longing for. As a software developer deeply immersed in the MERN stack, HTML, CSS, and JavaScript, including React Native, this unexpected delight provided a welcomed break from my coding endeavors. The stylish and comfortable addition to my wardrobe not only fulfilled a personal desire but also served as a reminder to appreciate life's simple pleasures amid the demands of my professional journey.", "positive"],
//         ],

//     })
//         .then((response) => {
//             console.log(response);
//         })

//     // try {
//     //     const response = await fetch(apiUrl, {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({
//     //             prompt: {
//     //                 text: prompt,
//     //             },
//     //             temperature: 0,
//     //             candidateCount: 1,
//     //         }),
//     //     });

//     //     const data = await response.json();
//     //     console.log(data);
//     // } catch (error) {
//     //     console.error('Error fetching data:', error);
//     // }
// };
