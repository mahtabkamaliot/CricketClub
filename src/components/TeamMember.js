import React from 'react';

function Team_member(props) {
    return (
        <div>
            <div class="">
                <div className=''>
                    <div className='bg-[#E31B23]  '>
                        <p className='py-2 px-6 font-bold text-white uppercase'>ForWard</p>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 shadow-md ">
                        <thead class="text-xs text-gray-700 uppercase bg-black ">
                            <tr>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    #
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Player
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Height
                                </th>
                                <th scope="col" class="py-3 px-6 text-white font-bold">

                                    Weight
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                <td class="p-4 w-32">

                                    11
                                </td>
                                <td class="p-4 w-32">

                                    Player
                                </td>
                                <td class="p-4 w-32">

                                    -
                                </td>
                                <td class="p-4 w-32">

                                    -
                                </td>
                            </tr>
                            <tr class="bg-white border-b  hover:bg-gray-50 ">
                                <td class="p-4 w-32">

                                    27
                                </td>
                                <td class="p-4 w-32">

                                    Player
                                </td>
                                <td class="p-4 w-32">

                                    -
                                </td>
                                <td class="p-4 w-32">

                                    -
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>

                <div className='my-8'>
                <div className='bg-[#E31B23] '>
                    <p className='py-2 px-6 font-bold text-white uppercase'>Goalkeeper </p>
                </div>
                <table class="w-full text-sm text-left text-gray-500 shadow-md">
                    <thead class="text-xs text-gray-700 uppercase bg-black ">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-white font-bold">

                                #
                            </th>
                            <th scope="col" class="py-3 px-6 text-white font-bold">

                                Player
                            </th>
                            <th scope="col" class="py-3 px-6 text-white font-bold">

                                Height
                            </th>
                            <th scope="col" class="py-3 px-6 text-white font-bold">

                                Weight
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b  hover:bg-gray-50 ">
                            <td class="p-4 w-32">

                                11
                            </td>
                            <td class="p-4 w-32">

                                Player
                            </td>
                            <td class="p-4 w-32">

                                -
                            </td>
                            <td class="p-4 w-32">

                                -
                            </td>
                        </tr>
                      


                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default Team_member;