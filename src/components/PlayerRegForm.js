import React, { useState } from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'

function Player_reg_form() {

    const [hidden, setHidden] = useState("");
    const [notification, setNotification] = useState("-z-10");
    const [padding, setPadding] = useState('my-0');
    const [isLoading, setLoading] = useState(false);

    const initialValues = {
        first_name: '',
        last_name: '',
        nick_name: '',
        gender: '',
        batting_style: '',
        balling_style: '',
        player_category: '',
        wicket_keeping_status: '',
        hight: '',
        weight: '',
        mobile: '',
        email: '',
        address: '',
        expariance_details: '',
        dob: '',
        profile_photo: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            console.log(values);

            // Send a POST request
            const formData = new FormData();

            for (let value in values) {
                formData.append(value, values[value]);
            }
            console.log(formData)
            await axios({
                method: 'post',
                url: 'https://capp.cerebrum.host/api/player-registration',
                data: formData,


            })
                .then(function (response) {

                    if (response.status === 201)
                        setHidden('hidden');
                    setNotification('z-0');
                    setPadding('my-0');
                    setLoading(false);


                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    })
    const handleLoder = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setPadding('my-28');
        setLoading(true);

    }

    return (
        <div>
            <div className={`flex justify-center ${padding}`}> {isLoading ? <Circles
                height="80"
                width="80"
                color="#f84a4f"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> : ''}</div>
            <div>
                <div className=' w-10/12 relative m-auto'>

                    <div className={`w-[100%] absolute right-0 left-0 ${notification}`}>

                        <div id="alert-1" className="flex px-10 py-5  bg-[#f3f3f3]  " role="alert">
                            <svg className=' text-green-500' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div className="ml-10 text-lg font-medium text-green-500 uppercase">
                                Your registration has been successfully completed!!!
                            </div>

                        </div>

                    </div>

                    <div className='w-56 absolute right-0 -top-16 sm:top-0 '><button className='block w-full text-white font-extrabold bg-[#e31b23] hover:bg-[#f84a4f] py-5'><Link to='/PlayerRegList'>Check Player List</Link></button></div>
                </div>
                <div className='container flex mt-16 mx-auto'>

                    <div className={`${hidden} w-10/12 mx-auto bg-[#F3F3F3] shadow-md}`}>
                        <div className='bg-black h-16 text-white text-lg font-bold'> <p className='py-4 px-8'>Player Registration Form</p></div>
                        <form className="w-full p-8" onSubmit={formik.handleSubmit} encType="multipart/form-data">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        First Name
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-first-name"
                                        type="text"
                                        name='first_name'
                                        placeholder="First Name"
                                        autoComplete='none'
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        name='last_name'
                                        placeholder="Last Name"
                                        autoComplete='none'
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nick-name">
                                        Nick Name
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-nick-name"
                                        type="text"
                                        placeholder="NickName"
                                        name='nick_name'
                                        autoComplete='none'
                                        value={formik.values.nick_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />

                                </div>
                                <div className="w-full md:w-1/2 px-3 overflow-hidden">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-gender">
                                        Gender
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='gender'
                                        id="grid-gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} >
                                        <option>Select Gender</option>
                                        <option value={'MALE'}>Male</option>
                                        <option value={'FEMALE'}>Female</option>

                                    </select>


                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-batting">
                                        Batting Style
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='batting_style'
                                        id="grid-batting"
                                        value={formik.values.batting_style}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} >
                                        <option>Select Batting Style</option>
                                        <option value={'RHB'}>RHB</option>
                                        <option value={'LHB'}>LHB</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/2 px-3 overflow-hidden">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-balling">
                                        Balling Style
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='balling_style'
                                        id="grid-balling"
                                        value={formik.values.balling_style}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} >
                                        <option>Select Balling Style</option>
                                        <option value={'RHF'}>RHF</option>
                                        <option value={'RHM'}>RHM</option>
                                        <option value={'RHLS'}>RHLS</option>
                                        <option value={'RHOS'}>RHOS</option>
                                        <option value={'LHF'}>LHF</option>
                                        <option value={'LHM'}>LHM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 overflow-hidden">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
                                        Player Category
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='player_category'
                                        id="grid-category"
                                        value={formik.values.player_category}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} >
                                        <option>Select Category</option>
                                        <option value={"A"}>A Category</option>
                                        <option value={"B"}>B Category</option>
                                        <option value={"C"}>C Category</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/2 px-3 overflow-hidden">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-wicket">
                                        Wicket keeping status
                                    </label>
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='wicket_keeping_status'
                                        id="grid-wicket"
                                        value={formik.values.wicket_keeping_status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} >
                                        <option>Wicket Keeper Status</option>
                                        <option value={'YES'}>Yes</option>
                                        <option value={'NO'}>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3  md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-height">
                                        Height
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='hight'
                                        id="grid-height"
                                        type="text"
                                        placeholder="Height"
                                        autoComplete='none'
                                        value={formik.values.hight}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-weight">
                                        Weight
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='weight'
                                        id="grid-weight"
                                        type="text"
                                        placeholder="Weight"
                                        autoComplete='none'
                                        value={formik.values.weight}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-mobile">
                                        Mobile
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-mobile"
                                        name='mobile'
                                        type="text"
                                        placeholder="Mobile"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                </div>

                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        name='email'
                                        id="grid-email"
                                        type="email"
                                        placeholder="Email"
                                        autoComplete='none'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />
                                </div>

                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3  md:mb-0">
                                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900 ">Your Address</label>
                                    <textarea id="address" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                        name='address'
                                        placeholder="Write down your address Here..."
                                        value={formik.values.address}
                                        onChange={formik.handleChange}>

                                    </textarea>

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label htmlFor="experiance" className="block mb-2 text-sm font-medium text-gray-900 ">Experiance Details</label>
                                    <textarea id="experiance" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                        name='expariance_details'
                                        placeholder="Write down your experiance details..."
                                        value={formik.values.expariance_details}
                                        onChange={formik.handleChange}>
                                    </textarea>
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3  md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date-of-birth">
                                        Date Of Birth
                                    </label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-date-of-birth"
                                        name='dob'
                                        type="date"
                                        placeholder="Date Of Birth"
                                        value={formik.values.dob}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} />

                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " htmlFor="user_avatar">Upload file</label>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                                        name='profile_photo'
                                        accept='image/*'

                                        id="user_avatar"
                                        type="file"
                                        onChange={(e) =>
                                            formik.setFieldValue('profile_photo', e.currentTarget.files[0])
                                        }
                                    />
                                    <div className="mt-1 text-sm text-gray-500 " id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <button type="submit" name='submit' onClick={handleLoder} className="block w-full text-white font-extrabold bg-[#e31b23] hover:bg-[#f84a4f]  rounded-lg py-3 ">Submit</button>
                            </div>

                        </form>

                    </div>

                </div>
                <div className='h-16'></div>
            </div>
        </div>
    )
}

export default Player_reg_form