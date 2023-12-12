import { analyse } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
 const user = await getUserByClerkId();
 const entry = await prisma.journalEntry.create({
    data: {
        userId: user.id,
        content: "Hello world!",
}
 })

 const analysis = await analyse(entry.content)
 await prisma.journalEntry.create({
    data: {
        entryId: entry.id,
        ...analysis,
        // sentiment: analysis.sentiment,
        // sentimentScore: analysis.sentimentScore,
        // subject: analysis.subject,
        // summary: analysis.summary,
        // mood: analysis.mood,
        // color: analysis.color,
    },

    })

 // Revalidate the journal page after update

 revalidatePath("/api/journal")

 return NextResponse.json({data: entry})
}

