import Editor from "@/components/Editor";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id) => {
    const user = await getUserByClerkId();
    const entry = await prisma.journalEntry.findUnique({
      where: {
        id: id,
      },
      include: {
        analysis: true,
      },
    });
    return entry;
    
}


const EntryPage = async ({params}) => {
    const entry = await getEntry(params.id);
    const { mood, summary, color, negative, rating, sentiment, sentimentScore } =  entry?.analysis || {};

    const analysisData = [
     { name: "Mood", value: mood },
      { name: "Summary", value: summary },
      { name: "Rating", value: rating },
      { name: "Sentiment", value: sentiment },
      { name: "Sentiment Score", value: sentimentScore },
      { name: "Negative", value: negative },
    ]
   
    return (
        <div className=" w-full h-full grid grid-cols-3">
          <div className="col-span-2">
          <Editor entry={entry} />
          </div>
          <div className="border-l border-black">
             <div className=" px-6 py-10" style={{backgroundColor:color}}>
              <h2  className=" text-2xl">Analysis</h2>
              </div>
              <div>
                <ul>
                  {analysisData.map((item) => (
                    <li key={item.value} className=" px-2 py-4  text-lg flex items-center justify-center border-b border-t border-black/20">{item.name}</li>
                  ))}
                </ul>
               </div>
             </div>
           
        </div>
    )
}

export default EntryPage;       