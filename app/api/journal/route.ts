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

 // Revalidate the journal page after update

 revalidatePath("/api/journal")

 return NextResponse.json({data: entry})
}