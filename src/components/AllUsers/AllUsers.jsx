import { Helmet } from "react-helmet";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { data: allUser = [], isPending, refetch } = useQuery({
        queryKey: ['users', axiosSecure],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [currentUser, setCurrentUser] = useState();
    const handleUpdate = (user) => {
        setCurrentUser(user);
    }

    const handleUpdateRole = async (e) => {
        e.preventDefault();
        const currentRole = e.target.role.value;

        const data = { photo: currentUser.photo, email: currentUser.email, name: currentUser.name, role: currentRole };

        const res = await axiosSecure.patch(`/users/user/${currentUser?._id}`, data);
        if (res.data.modifiedCount > 0) {
            refetch();
            toast.success('Role updated', { autoClose: 1000 });
            document.getElementById("my_modal_3").close();
            navigate('/allUsers');
        }
    }

    if (isPending) {
        return <Loading></Loading>
    }

    const sortedUsers = allUser?.sort((a, b) => {
        if (a.role === 'Admin' && b.role !== 'Admin') return -1;
        if (a.role !== 'Admin' && b.role === 'Admin') return 1;
        if (a.role === 'Moderator' && b.role !== 'Moderator') return -1;
        if (a.role !== 'Moderator' && b.role === 'Moderator') return 1;
        if (a.role === 'Guest' && b.role !== 'Guest') return 1;
        if (a.role !== 'Guest' && b.role === 'Guest') return -1;
        return 0;
    });

    return (
        <div>
            <Helmet>
                <title>All Users</title>
            </Helmet>
            <h3 className="text-2xl font-bold text-center text-orange-500 mt-5">All Users</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Edit Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedUsers.map((user, idx) => (
                                    <tr key={user?._id}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user?.photo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user?.name}</div>
                                                    <div className="text-sm opacity-50">{user?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                user?.role === 'Guest' ?
                                                    <p><span className='font-medium'>Role :</span> <span className='text-red-500'>{user?.role}</span></p> :
                                                    user?.role === 'Admin' ?
                                                        <p><span className='font-medium'>Role :</span> <span className='text-green-500'>{user?.role}</span></p> :
                                                        <p><span className='font-medium'>Role :</span> <span className='text-sky-500'>{user?.role}</span></p>
                                            }
                                        </td>
                                        <td>

                                            <div onClick={() => handleUpdate(user)}>
                                                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="w-fit md:px-3 px-2 py-1 text-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-400 hover:to-orange-400 text-white font-normal text-[10px]">Edit</button></div>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleUpdateRole}>
                        <select name="role" id="" className="border px-4 py-1 rounded-md mb-3">
                            <option disabled selected>{currentUser?.role}</option>
                            <option value='Admin'>Admin</option>
                            <option value='Moderator'>Moderator</option>
                            <option value='Guest'>Guest</option>
                        </select>
                        <div>
                            <input type="submit" value="Done" className="w-fit md:px-2 px-1 py-1 text-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-400 hover:to-orange-400 text-white font-normal text-[10px]" />
                        </div>
                    </form>
                </div>
            </dialog>
            <ToastContainer autoClose={1000}></ToastContainer>
        </div>
    );
};

export default AllUsers;
