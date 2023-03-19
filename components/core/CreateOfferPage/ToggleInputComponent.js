import React, { useState } from 'react'

const ToggleInputComponent = () => {
    const [value, setValue] = useState('Limited')
    return (
        <div className="bg-white my-2 flex border border-slate-200 rounded text-center">
            <div onClick={() => setValue('Limited')} className={`w-[50%] ${value === 'Limited' ? 'bg-slate-300 rounded-l' : '' }  p-2  px-3 cursor-pointer`}>
                Limited
            </div>
            <div onClick={() => setValue('Unlimited')} className={`w-[50%] ${value === 'Unlimited' ? 'bg-slate-300 rounded-r' : '' } p-2 px-3 cursor-pointer`}>
                Unlimited
            </div>
        </div>
    )
}

export default ToggleInputComponent