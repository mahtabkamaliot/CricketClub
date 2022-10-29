import React from 'react'

function Fixtures_results() {
    return (
        <div>
            <div className=''>
                <div className='bg-fixtures-bg bg-cover  mx-auto'>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <p className=' text-5xl text-white pt-20'>Fixtures & Results</p>
                        <div className='h-[4px] bg-[#E31B23] w-20'> </div>


                        <div className='w-10/12 grid grid-cols-3 gap-14 mt-16 mb-28'>
                            <div className=' col-span-2'>
                                <div className=''>
                                    <div className='bg-hero-bottom bg-cover'>
                                        <div className='flex justify-center items-center space-x-5 py-8'>
                                            <span className='text-white text-4xl '>Real Soccer</span>
                                            <span>
                                                <img className='h-20' src='/images/Flag/flag-15.png' alt='flag1' />
                                            </span>
                                            <div>
                                                <p className='text-7xl text-[#E31B23]'>VS</p>
                                            </div>
                                            <div>
                                                <img className='h-20' src='/images/Flag/flag-13.png' alt='flag1' />
                                            </div>
                                            <div className='text-white text-4xl'>Vanelcia</div>
                                        </div>

                                        <div className='flex justify-center items-center space-x-11'>
                                            <div className='text-white'>August 13, 2020</div>
                                            <div className='text-white'>Santiago Bernabéu Stadium</div>
                                        </div>
                                        <table class="w-full text-sm text-left mt-5  text-gray-500 ">
                                       
                                        <tbody>
                                            <tr class="bg-white border-b   hover:bg-gray-50 ">
                                                <td class="p-4 w-32">

                                                    body
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b   hover:bg-gray-50 ">
                                                <td class="p-4 w-32">

                                                    body
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>


                                        

                                    </div>
                                </div>
                            </div>
                            <div>


                                <div class="overflow-x-auto relative shadow-md ">
                                    <table class="w-full text-sm text-left text-gray-500 ">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                            <tr>
                                                <th scope="col" class="py-3 px-6">

                                                    Latest Results
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                                <td class="p-4 w-32">

                                                    body
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                                <td class="p-4 w-32">

                                                    body
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>


                    </div>



                </div>
            </div>

        </div>
    )
}

export default Fixtures_results