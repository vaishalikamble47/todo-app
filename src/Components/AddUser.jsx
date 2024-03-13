import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { createUserAsync, updateUserAsync } from '../RTK/Slice/UserDetailSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
const AddUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [education, setEducation] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let params = useParams()

  const handelUserSubmit = async (e) => {
    const data = { name, education, email }
    e.preventDefault()
    if (!name || !email || !education) {
      alert("All Field Required")
    } else {
      if (params.id) {
        dispatch(updateUserAsync({id:params.id, data}))
        toast.success("User has been updated");
        setTimeout(() => {
          navigate('/')
        }, 2000)
        
      } else {
        dispatch(createUserAsync(data))
        toast.success("User has been created");
        setTimeout(() => {
          navigate('/')
        }, 1000)

      }
    }
  }
  const singleUserData = async () => {
    let userData = await axios.get("http://localhost:5000/UserDatalist/" + params.id)
    console.log(userData.data)
    setName(userData?.data?.name)
    setEmail(userData?.data?.email)
    setEducation(userData?.data?.education)
  }

  useEffect(() => {
    if (params.id) {
      singleUserData()
    }
  }, [params.id])
  return (
    <React.Fragment>
      <div className="add-user p-3">
        <div className="container">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light">
        </ToastContainer>
          <div className="row ">
            <div className="col">
              <p className='h4 text-success fw-bold'>{params.id ?"Update User":"Create User"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">

              <form onSubmit={handelUserSubmit} >
                <div className="mb-2">
                  <input type="text" placeholder='Name' className='form-control'
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-2">
                  <input type="email" placeholder='Email' className='form-control'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-2">
                  <input type="education" placeholder='Education' className='form-control'
                    value={education} onChange={(e) => setEducation(e.target.value)} />
                </div>


                <div className="mb-2">
                  <input type="submit" placeholder='Title' className='btn btn-success' value={params.id ? "Update User":"Create User"} />

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddUser;