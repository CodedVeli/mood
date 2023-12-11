'use client';

import { updateEntry } from '@/utils/api';
import { useState } from 'react';       
import { useAutosave } from 'react-autosave';

const Entry  = ({entry}) => {
    const [value, setValue] = useState(entry.content);
    const [isLoading, setIsLoading] = useState(false);

    useAutosave({
        data: value,
        onSave: async (_value) => {
            setIsLoading(true);
            const updated = await updateEntry(entry.id, _value);
            setIsLoading(false);
        },
    })

    // spining circle

    // <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 flex justify-center items-center">
    //             <div className="w-16 h-16 border-4 border-gray-400 rounded-full animate-spin"></div>
    //             </div>
    return (
        <div className=" w-full h-full">
            {isLoading && <div> Saving... </div>}
            <textarea placeholder='Journal here!' className="w-full h-full p-8 text-xl outline-none" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
    )
}

export default Entry;