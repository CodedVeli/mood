import { analyse } from "@/utils/ai"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"

export const PATCH = async (request: Request, { params }) => {
    const { content } = await request.json()

    const user = await getUserByClerkId()
    const updateEntry = await prisma.journalEntry.update({
        where: {
            id: params.id, 
            userId: user.id,
        },
        data: {
            content,
        },
    })
 const analyze =  await analyse(updateEntry.content)
 const updated =   await prisma.analysis.upsert({
        where: {
            entryId: updateEntry.id,
        },
        create: {
            entryId: updateEntry.id,
            ...analyze,           
        },
        update: analyze,
    })
    console.log('update on the output:',updated)

    return NextResponse.json({ data: updateEntry })
}
