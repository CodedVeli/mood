import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { analyse } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";


const getEntries = async () => {
    const user = await getUserByClerkId();
    const entries = await prisma.journalEntry.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
     
    });

    // await analyse('Today has been quite challenging for me. As a software developer with expertise in the MERN stack, HTML, CSS, and JavaScript, including React Native, I faced persistent coding issues and unexpected bugs, leading to frustration and setbacks in my projects. To decompress from the stress, I turned to my passion for MMA, seeking comfort in its intensity, and added a dose of comedy to lighten the mood. Reflecting on the day, I pondered the inevitable highs and lows in both software development and life, reaffirming my determination to overcome challenges and pursue my entrepreneurial aspirations of building a startup. ')

    return entries;

    
}


const JournalPage = async () => {
    const entries = await getEntries();
    console.log(entries);
    return (
        <div className=" p-10 bg-zinc-500/10 h-full ">
            <h2 className=" text-3xl mb-8">Journal</h2>
            <div className=" grid grid-cols-3">
        <NewEntryCard />
        {entries.map((entry => (
          <Link href={`/journal/${entry.id}`}  key={entry.id} >
          <EntryCard entry={entry}/>
          </Link>
        )
        ))}
    </div>;
        </div>
    )
    }
    export default JournalPage;