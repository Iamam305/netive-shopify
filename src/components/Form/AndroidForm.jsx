import React from 'react'

const AndroidForm = () => {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row-reverse  items-center justify-center mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 ">

<img src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"} alt="" className="absolute md:static md:z-0 -z-30 md:w-3/5" />

<form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1">

    <h2 className="text-yellow-400 text-3xl font-bold mb-8">OS and Certificate</h2>


    <span className='my-3 mb-6 flex flex-col'>
        <h2 className='text-gray-50 mb-4 font-bold'>Select Operating System</h2>


    </span>


    {android ? (<>
        <h2 className='text-gray-50 mb-4 font-bold text-lg'>ANDROID </h2>

        <span className='flex flex-col my-4'>
            <label htmlFor="fullName" className='text-gray-50 mb-2 font-bold'>Full Name</label>

            <input id="fullName" name="fullName"   {...register("fullName")} placeholder="Your full name" className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.fullName?.message}</p>

        </span>




        <span className='flex flex-col my-4'>
            <label htmlFor="fullName" className='text-gray-50 mb-2 font-bold'>Your Organization</label>

            <input id="organizationName" name="organizationName"  {...register("organizationName")} placeholder="Organization Name" className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.organizationName?.message}</p>

        </span>


        <span className='flex flex-col my-4'>
            <label htmlFor="keyAlias" className='text-gray-50 mb-2 font-bold'>Key Alias</label>

            <input id="keyAlias" name="keyAlias"  {...register("keyAlias")} placeholder="Alias" className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.keyAlias?.message}</p>

        </span>

        <span className='flex flex-col my-4'>
            <label htmlFor="keystorePass" className='text-gray-50 mb-2 font-bold'>Create Keystore Password</label>

            <input id="keystorePass" name="keystorePass"  {...register("keystorePass")} placeholder="your password" className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.keystorePass?.message}</p>

        </span>

    </>) : ""}

   


    <span className='flex justify-evenly'>

        <button className="px-12 py-3 bg-black text-white rounded-md" onClick={() => dispatch(decrementFormStep())}>BACK</button>
        <button className="px-12 py-3 bg-black text-white rounded-md" type='submit'>NEXT</button>
    </span>
</form>
</div>
    </>
  )
}

export default AndroidForm