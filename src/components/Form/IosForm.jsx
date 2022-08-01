import React from 'react'

const IosForm = () => {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row-reverse  items-center justify-center mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 ">

<img src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"} alt="" className="absolute md:static md:z-0 -z-30 md:w-3/5" />

<form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1">

    <h2 className="text-yellow-400 text-3xl font-bold mb-8">OS and Certificate</h2>





   

    {ios ? (<>

        <h2 className='text-gray-50 mb-4 font-bold text-lg'>IOS </h2>

        <span className='flex flex-col my-4'>
            <label htmlFor="signingCertificate" className='text-gray-50 mb-2 font-bold'> Select Signing Certificate</label>

            <input type={"file"} accept=".p12" id="signingCertificate" name="signingCertificate"  {...register("signingCertificate")} className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.signingCertificate?.message}</p>

        </span>
        <span className='flex flex-col my-4'>
            <label htmlFor="provisioningProfile" className='text-gray-50 mb-2 font-bold'>  Select Provisioning Profile</label>

            <input type={"file"} accept=".mobileprovision" id="provisioningProfile" name="provisioningProfile"  {...register("provisioningProfile")} className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.provisioningProfile?.message}</p>

        </span>

        <span className='flex flex-col my-4'>
            <label htmlFor="iosPassword" className='text-gray-50 mb-2 font-bold'>Password</label>

            <input id="iosPassword" name="iosPassword" placeholder='password'  {...register("iosPassword")} className='p-3 border-2 rounded-lg' />
            <p className='text-xs text-red-600'>{errors.iosPassword?.message}</p>

        </span>

    </>) : ''}


    <span className='flex justify-evenly'>

        <button className="px-12 py-3 bg-black text-white rounded-md" onClick={() => dispatch(decrementFormStep())}>BACK</button>
        <button className="px-12 py-3 bg-black text-white rounded-md" type='submit'>NEXT</button>
    </span>
</form>
</div>
    
    </>
  )
}

export default IosForm