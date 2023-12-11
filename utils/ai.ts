// import PaLM from "palm-api";
import z from "zod";

import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis"

// Constants for the generative AI
const TUNED_MODEL = "tunedModels/mood-analyser-s3iup6w0srjv"
// const MODEL_NAME = "models/text-bison-001";
const PALM_API_KEY = "AIzaSyDg8zPBkwddqaaeRJxZb4FMU-5aY_h5TUg";

const permissionService = google.ai.generativelanguage("v1beta3").permissions;

// Create a TextServiceClient with authentication
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(PALM_API_KEY),
});


const managePermissions = async () => {
  try {
    // Specify the model name
    const modelName = 'tunedModels/mood-analyser-s3iup6w0srjv';

    // List existing permissions on the tuned model
    const existingPermissions = await permissionService.list({
      parent: modelName,
    });

    console.log("Existing Permissions:", existingPermissions.data);

    // Share the model with another user (e.g., service account)
    const newPermission = {
      granteeType: 'USER',
      role: 'READER',
      emailAddress: 'ericgithaiga007@gmail.com',
    };

    const newPermissionResponse = await permissionService.create({
      resource: newPermission,
      parent: modelName,
    });

    console.log("New Permission Response:", newPermissionResponse.data);
  } catch (error) {
    console.error("Permission Management Error:", error);
  }
};



export const analyse = async (prompt) => {
  await managePermissions();
  // Define the Word variable
  // Define the promptString with examples
  const input = prompt;
  const promptString = `input: ${input}
  output:`;

  // Define stopSequences
  const stopSequences = [];

  try {
    // Call the Palm API to generate text
    const result = await client.generateText({
      model: TUNED_MODEL,
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

    console.log("results:", result);

    // if (
    //   result &&
    //   result.length > 0 &&
    //   result[0].candidates &&
    //   result[0].candidates.length > 0
    // ) {
    //   const outputString = result[0].candidates[0].output;

    //   // Log the raw outputString
    //   console.log("Raw Output String:", outputString);

    //   // Split the multiline string into an array of lines
    //   const lines = outputString.split("\n");

    //   // Initialize an object to hold the parsed output
    //   let outputJson: { [key: string]: string } = {};

    //   // Process each line and add key-value pairs to the outputJson object
    //   lines.forEach((line) => {
    //     // Split each line into key and value using the first colon
    //     const [key, ...value] = line.split(":");

    //     // Join the remaining elements of the 'value' array and trim any extra whitespace
    //     const trimmedValue = value.join(":").trim();

    //     // Add key-value pair to the outputJson object
    //     outputJson[key.trim()] = trimmedValue;
    //   });

    //   // Access specific properties

    //   const mood = outputJson["mood"];
    //   const subject = outputJson.subject;
    //   const sentimentScore = outputJson.sentimentScore;
    //   const rating = outputJson.Rating;
    //   const color = outputJson.color;
    //   const summary = outputJson.summary;

    //   // Log the extracted properties
    //   console.log("Mood:", mood);
    //   console.log("Subject:", subject);
    //   console.log("Sentiment Score:", sentimentScore);
    //   console.log("Rating:", rating);
    //   console.log("Color:", color);
    //   console.log("Summary:", summary);
    // } else {
    //   console.error("Invalid response structure");
    // }

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
