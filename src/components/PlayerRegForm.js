import React from 'react';
import { useFormik } from "formik";
import axios from 'axios';

function Player_reg_form() {
    const initialValues = {
        first_name: '',
        last_name: '',
        nick_name: '',
        gender: '',
        mobile: '',
        player_category: '',
        batting_style: '',
        balling_style: '',
        email: '',
        wicket_keeping_status: '',
        hight: '',
        weight: '',
        address: '',
        expariance_details: '',
        profile_photo: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
           console.log(values);

            // Send a POST request
            const formData = new FormData();
            // formData.append('first_name',values.first_name)
            // formData.append('last_name',values.last_name)
            // formData.append('nick_name',values.nick_name)
            // formData.append('gender',values.gender)
            // formData.append('mobile',values.mobile)
            // formData.append('player_category',values.player_category)
            // formData.append('batting_style',values.batting_style)
            // formData.append('balling_style',values.balling_style)
            // formData.append('email',values.email)
            // formData.append('wicket_keeping_status',values.wicket_keeping_status)
            // formData.append('hight',values.hight)
            // formData.append('weight',values.weight)
            // formData.append('address',values.address)
            // formData.append('expariance_details',values.expariance_details)
            // formData.append('profile_photo',values.profile_photo);
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
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        
        }

    })


    return (
        <div className='container flex mt-16 mx-auto'>
            <div className=' w-10/12 mx-auto bg-[#F3F3F3] shadow-md'>
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
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date-of-birth">
                                Date Of Birth
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-date-of-birth"
                                name='mobile'
                                type="date"
                                placeholder="Date Of Birth"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />

                        </div>
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
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-skill">
                                Skill
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-skill"
                                name='email'
                                type="text"
                                placeholder="Skill"
                                autoComplete='none'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
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



                    <div className='mb-6 w-[49%] '>

                        <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="user_avatar">Upload file</label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                            name='profile_photo'
                            accept='image/*'
                            
                            id="user_avatar"
                            type="file"
                            onChange={(e) =>
                                formik.setFieldValue('profile_photo', e.currentTarget.files[0])
                              }
                            
                           
                            // onChange={(event)=>{
                            //     let reader=new FileReader();
                            //     reader.onload=()=>{
                            //         if(reader.readyState===2){
                            //             console.log(reader.result)
        
                            //             formik.setFieldValue('profile_photo',reader.result)
                            //         }
                            //     }
                            //     reader.readAsDataURL(event.target.files[0])
                            // }}
                            
                            />
                        <div className="mt-1 text-sm text-gray-500 " id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

                    </div>

                    <div className="flex justify-center mb-4">
                        <button type="submit" name='submit' className="block w-full text-white font-extrabold bg-[#e31b23] hover:bg-[#f84a4f]  rounded-lg py-3 ">Submit</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Player_reg_form