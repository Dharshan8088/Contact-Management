
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { deleteContact } from '../store/contactSlice';
import { Link } from 'react-router-dom';

const ContactList1= () => {
    
    const contactsArray = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = (id: number) => {
        dispatch(deleteContact(id));
    };
    // console.log(contact)
    return (

        // CONTACT LIST INNER CONTAINER
        <div className=' bg-green-300 border-1 rounded-md  h-full w-full'>
            
            {/* CONTACT LIST */}
           
           {/* <xxs */}
            <ul className="grid grid-rows-auto md:grid-rows-2 md:grid-cols-2 grid-flow-row place-items-center gap-3 py-3  w-full h-auto " >
                
                {contactsArray.length > 0 ? (contactsArray.map(contact => ( 
                    
                    //  EACH LIST AS CARD
                    // <li className=' m-2 p-3 w-fit h-fit bg-white rounded-xl shadow-md' key={contact.id}>
                    <li className=' m-2 p-3 w-fit h-fit bg-white rounded-xl shadow-md' key={contact.id}>
                        
                        {/* AVATAR */}
                        <img src={contact.avatar} alt="avatar" className=' w-20 h-20 ml-6 mb-1' />
                        
                        {/* CONTACT DETAILS */}
                        <p>Name: {contact.fname} {contact.lname}</p>
                        <p className='mb-2'>Status: {contact.active ? 'Active' : 'Inactive'}</p>
                        
                        {/* EDIT AND DELETE BTN */}
                        <div className='flex'>
                            <button className='py-1 px-3 border-2 border-teal-400 rounded-full text-sm font-medium text-teal-400 hover:bg-teal-400  hover:text-white'>
                                <Link to={`/edit/${contact.id}`}>Edit</Link>
                            </button>
                            <button className='ml-3 py-1 px-3 border-2 border-taken rounded-full text-sm font-medium text-taken hover:bg-taken  hover:text-white' onClick={() => handleDelete(contact.id)}>Delete</button>
                        </div>
                    </li>

                ))) : (
                    <p className='text-base text-blue-600 w-fit'>No Contacts added.<br /> Add Contact using create contact button.</p>
                )}
            </ul>
        </div>
    );
};

export default ContactList1;
