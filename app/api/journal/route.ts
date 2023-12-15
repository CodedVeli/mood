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

 // Assuming you have the following code to call the analyse function:
const analysis = await analyse(entry.content);

// Assuming 'analysis' is the output from the analyse function
const output = analysis;

// Save the data to the database using Prisma
try {
    const createdEntry = await prisma.analysis.create({
        data: {
            entryId: entry.id,
           ...analyse(entry.content),
        },
    });

    console.log("Entry created successfully:", createdEntry);
} catch (error) {
    console.error("Error creating entry:", error);
    // Handle the error as needed
}

    console.log(analysis)


 // Revalidate the journal page after update

 revalidatePath("/api/journal")

 return NextResponse.json({data: entry})
}

