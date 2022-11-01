import React, { useState, useEffect } from "react";
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ResponsiveNav from '../../components/ResponsiveNav';
import axios from "axios";
import { Circles } from 'react-loader-spinner'



function PlayerRegList(props) {

    let [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [padding, setPadding] = useState('my-28')

    useEffect(() => {
        axios
            .get("https://capp.cerebrum.host/api/player-registration")
            .then(function (response) {
                if (response.status === 200)
                    setLoading(false);
                setUsers(response.data);
                setPadding('my-0');


            })

    }, []);

    return (
        <div>

            <Navbar />
            <ResponsiveNav />
            <div className='flex place-items-center bg-player-signup bg-cover clear-both z-50 text-6xl font-extrabold h-80 text-white'>
                <div className='pl-64'>Player Registation List</div>
            </div>
            <div className='w-10/12 mx-auto'>

                <div className={`flex justify-center ${padding}`}> {isLoading ? <Circles
                    height="80"
                    width="80"
                    color="#f84a4f"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> : ''}</div>


                {users.map((user) => (
                    <div>
                        <div className="shadow-md mt-16">
                            <div className=" h-16 bg-[#f84a4f] overflow-hidden" >

                            </div>
                            <div className="flex justify-center px-5  -mt-12">
                                <img className="h-32 w-32 bg-white p-2 rounded-full" alt="profilepicture" src={`https://capp.cerebrum.host/${user.profile_photo}`} />

                            </div>
                            <div className=" ">
                                <div className="text-center pb-8 px-14">
                                    <h2 class="text-gray-800 text-3xl font-bold uppercase">{user.first_name} {" "} {user.last_name}</h2>
                                    <p className="text-gray-400 mt-2 hover:text-blue-500 uppercase">{user.nick_name}</p>

                                </div>

                                <div class="overflow-x-auto relative  shadow-md sm:rounded-lg">
                                    <table class="w-full text-sm text-left uppercase">

                                        <tbody>
                                            <tr class="bg-white  ">

                                                <td class="py-4 px-6">
                                                    Gender
                                                </td>

                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.gender}
                                                </td>
                                                <td class="py-4 px-6">
                                                    Player Category
                                                </td>
                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.player_category}
                                                </td>

                                                <td class="py-4 px-6">
                                                    Batting Style
                                                </td>
                                                <td class="py-4 px-6">
                                                    {user.batting_style}
                                                </td>

                                            </tr>
                                            <tr class="bg-white  ">

                                                <td class="py-4 px-6">
                                                    Balling Style
                                                </td>

                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.balling_style}
                                                </td>
                                                <td class="py-4 px-6">
                                                    wicket keeping status
                                                </td>
                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.wicket_keeping_status}
                                                </td>

                                                <td class="py-4 px-6">
                                                    hight
                                                </td>
                                                <td class="py-4 px-6">
                                                    {user.hight}
                                                </td>

                                            </tr>
                                            <tr class="bg-white  ">

                                                <td class="py-4 px-6">
                                                    weight
                                                </td>

                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.weight}
                                                </td>
                                                <td class="py-4 px-6">
                                                    email
                                                </td>
                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.email}
                                                </td>

                                                <td class="py-4 px-6">
                                                    mobile
                                                </td>
                                                <td class="py-4 px-6">
                                                    {user.mobile}
                                                </td>

                                            </tr>

                                            <tr class="bg-white  ">

                                                <td class="py-4 px-6">
                                                    address
                                                </td>

                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.address}
                                                </td>
                                                <td class="py-4 px-6">
                                                    expariance details
                                                </td>
                                                <td class="py-4 px-6 border-r border-[#f84a4f]">
                                                    {user.expariance_details}
                                                </td>

                                                <td class="py-4 px-6">
                                                    Date Of Birth
                                                </td>
                                                <td class="py-4 px-6">
                                                    {user.dob}
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>


                            </div>

                        </div>

                    </div>

                ))}



            </div>


            <Footer />
        </div>
    );
}

export default PlayerRegList;