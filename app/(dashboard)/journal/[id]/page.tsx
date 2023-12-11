import Editor from "@/components/Editor";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id) => {
    const user = await getUserByClerkId();
    const entry = await prisma.journalEntry.findUnique({
      where: {
        id: id,
      },
    });
    return entry;
    
}


const EntryPage = async ({params}) => {
    const entry = await getEntry(params.id);
    const analysisData = [
      { name: 'Summary', value: 'summary'},
      { name: 'Sentiment', value: 'sentiment'},
      { name: 'Emotion', value: 'emotion'},
      { name: 'Keywords', value: 'keywords'},
      { name: 'Entities', value: 'entities'},
      { name: 'Concepts', value: 'concepts'},
      { name: 'Categories', value: 'categories'},
      { name: 'Relations', value: 'relations'},
      { name: 'Semantic Roles', value: 'semanticRoles'},
      { name: 'Syntax', value: 'syntax'},
      { name: 'Metadata', value: 'metadata'},
      { name: 'Usage', value: 'usage'},
    ]
   
    return (
        <div className=" w-full h-full grid grid-cols-3">
          <div className="col-span-2">
          <Editor entry={entry} />
          </div>
          <div className="border-l border-black">
             <div className="bg-blue-300 px-6 py-10">
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