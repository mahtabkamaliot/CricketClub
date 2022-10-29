import React from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ResponsiveNav from '../../components/ResponsiveNav';


function Schedule(props) {
    return (
        <div>
            <Navbar />
            <ResponsiveNav/>
            <div className='flex place-items-center bg-player-signup bg-cover clear-both z-50 text-6xl font-extrabold h-80 text-white'>
                <div className='pl-64'>Schedule</div>
            </div>

            <div className='w-10/12 mx-auto'>

            <div className='mt-12 overflow-x-auto'>
                    
                    <table class="w-full text-sm text-left text-gray-500  ">
                        <thead class="text-xs text-gray-700 uppercase bg-black  ">
                            <tr>
                                <th scope="col" class="py-6 px-6 text-white font-bold">

                                    Date
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Event
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Time
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    League
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Season
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Venue
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Article
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-[#e6e6e6] border-b border-white  hover:bg-gray-50 ">
                                <td class="py-8 px-4 w-32">

                                    September 5 ,2022
                                </td>
                                <td class="p-4 w-32">

                                Man.Utd vs Liverpool
                                </td>
                                <td class="p-4 w-32">

                                8:00 pm
                                </td>
                                <td class="p-4 w-32">

                                UEFA
                                </td>
                                <td class="p-4 w-32">

                                2022
                                </td>
                                <td class="p-4 w-32">

                                Old Trafford
                                </td>
                                <td class="p-4 w-32 text-red-700">

                                Preview
                                </td>
                            </tr>
                            <tr class="bg-[#e6e6e6] border-b border-white  hover:bg-gray-50 ">
                                <td class="py-8 px-4 w-32">

                                    September 5 ,2022
                                </td>
                                <td class="p-4 w-32">

                                Man.Utd vs Liverpool
                                </td>
                                <td class="p-4 w-32">

                                8:00 pm
                                </td>
                                <td class="p-4 w-32">

                                UEFA
                                </td>
                                <td class="p-4 w-32">

                                2022
                                </td>
                                <td class="p-4 w-32">

                                Old Trafford
                                </td>
                                <td class="p-4 w-32 text-red-700">

                                Preview
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                
            </div>

            <Footer />
        </div>
    );
}

export default Schedule;