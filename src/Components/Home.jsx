import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserAsync, getUserAsync } from '../RTK/Slice/UserDetailSlice'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userData.userInfo)

    const handelUserdelete = (id) => {
        dispatch(deleteUserAsync(id))
        toast.success("User has been Deleted");
        dispatch(getUserAsync())
    }

    useEffect(() => {
        dispatch(getUserAsync())
    }, [])
    return (
        <>
            <section className="contact-search p-3">
                <div className="container">
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light">
                    </ToastContainer>
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">User Data
                                    <Link to={'/adduser'} className='btn btn-primary ms-2'>
                                        <i class="bi bi-plus-circle-fill me-2" /> Create New  User Data</Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="User-list">
                <div className="container">
                    <div className="row">

                        {
                            user ? user.map((data) => (
                                <div className="col-md-6 mt-3" key={data.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row align-items-center d-flex justify-content-around">

                                                <div className="col-md-7">
                                                    <ul className="list-group">
                                                        <li className="list-group-item list-group-item-action">
                                                            Name : <span className='fw-bold'>{data.name}</span>
                                                        </li>
                                                        <li className="list-group-item list-group-item-action">
                                                            Email : <span className='fw-bold'>{data.email}</span>
                                                        </li>
                                                        <li className="list-group-item list-group-item-action">
                                                            Education : <span className='fw-bold'>{data.education}</span>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-1 d-flex flex-column align-items-center">

                                                    <Link to={`/adduser/${data.id}`} className='btn btn-primary my-1'>
                                                        <i class="bi bi-pen-fill" />
                                                    </Link>
                                                    <button onClick={() => handelUserdelete(data.id)} className='btn btn-danger'><i class="bi bi-trash3-fill my-1"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : <p>User Data Not Availabel</p>
                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;