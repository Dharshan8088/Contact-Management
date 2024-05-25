import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateContact } from '../store/contactSlice';
import { useParams, useNavigate } from 'react-router-dom';

type ContactItem = {
    id: number;
    fname: string;
    lname: string;
    active: boolean;
    avatar: string;
  };
  

const EditContactForm = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [active, setActive] = useState(false);
    const [avatar,setAvatar] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    // Get state and dispatch from redux
    const contactsArray = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    // Get id from URL parameters
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            const contactId = parseInt(id, 10);
            setEditId(contactId);
            const contactToEdit = contactsArray.find(c => c.id === contactId);
            if (contactToEdit) {
                setFname(contactToEdit.fname);
                setLname(contactToEdit.lname);
                setActive(contactToEdit.active);
                setAvatar(contactToEdit.avatar);
            }
        }
    }, [id, contactsArray]);

    // Save the edited contact
    const editSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (editId !== null) {
            const updatedContact: ContactItem = { id: editId, fname, lname, active, avatar };
            dispatch(updateContact(updatedContact));
            resetForm();
            navigate('/');
        }
    };

    // Reset the form
    const resetForm = () => {
        setEditId(null);
        setFname('');
        setLname('');
        setActive(false);
    };

    return (

        // FORM CONTAINER
        <div className='flex flex-col items-center'>

            {/* FORM INNER CONTAINER */}
            <div className='w-fit mt-5  bg-gray-200 mx-3 py-10 px-4  md:px-14 rounded-md shadow-lg'>

                {/* FORM TITLE  */}
            <h1 className='text-center font-bold text-xl mb-2'>Edit Contact</h1>
                
                {/* EDIT CONTACT FORM */}
                <form>
                    <label htmlFor="fname">First Name:
                        <input
                            className="placeholder:text-sm placeholder:text-slate-400 ml-2 py-1.5 px-3 border-2 border-teal-200 text-sm rounded-md mb-3"
                            placeholder='John'
                            type="text"
                            id="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="lname">Last Name:
                        <input
                            className="placeholder:text-sm placeholder:text-slate-400 ml-2 py-1.5 px-3 border-2 border-teal-200 text-sm rounded-md mb-3"
                            placeholder='Doe'
                            type="text"
                            id="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>Active Status:
                        <div>
                            <input
                                className='ml-3 '
                                type="radio"
                                id="active-true"
                                checked={active === true}
                                onChange={() => setActive(true)}
                            />
                            <label className='ml-2 text-green-600 font-medium' htmlFor="active-true">Active</label>
                            <input
                                className='ml-3'
                                type="radio"
                                id="active-false"
                                checked={active === false}
                                onChange={() => setActive(false)}
                            />
                            <label className="ml-2 text-red-500 font-medium" htmlFor="active-false">Inactive</label>
                        </div>
                    </label>
                    <br />
                    <div className='mt-4'>
                        <button
                            className='border-2 border-teal-400 bg-teal-400 text-white font-medium px-4 rounded-lg'
                            type="submit"
                            onClick={editSubmitHandler}
                        >
                            Save Contact
                        </button>
                        <button
                            className='border-2 border-taken bg-taken text-white font-medium px-4 mx-2 rounded-lg'
                            onClick={resetForm}
                            disabled={!(fname || lname)}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditContactForm;
