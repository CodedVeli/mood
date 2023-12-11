'use client';

import { createNewEntry } from '@/utils/api'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {

    const router = useRouter()

    const handleOnClick = async () => {
        const { data } = await createNewEntry()
        router.push(`/journal/${data.id}`)
      }

    return (
        <div className=" p-10 bg-zinc-500/10 h-full">
           <div
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow"
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
        </div>
    );

}

export default NewEntryCard;