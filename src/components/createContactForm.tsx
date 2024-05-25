import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addContact } from '../store/contactSlice';
import { useNavigate } from 'react-router-dom';

// IMPORTING AVATARS 
import pic1 from '../assests/avatar_batman_comics_hero_icon.svg';
import pic2 from '../assests/avatar_boy_kid_person_icon.svg';
import pic3 from '../assests/avatar_child_girl_kid_icon.svg';
import pic4 from '../assests/avatar_elderly_grandma_nanny_icon.svg';
import pic5 from '../assests/avatar_female_girl_woman_icon.svg';
import pic6 from '../assests/avatar_geisha_japanese_woman_icon.svg';
import pic7 from '../assests/avatar_hindi_indian_woman_icon.svg';
import pic8 from '../assests/avatar_joker_squad_suicide_woman_icon.svg';
import pic9 from '../assests/avatar_lazybones_sloth_sluggard_icon.svg';
import pic10 from '../assests/avatar_male_man_portrait_icon.svg';
import pic11 from '../assests/avatar_male_president_trump_donald trump_icon.svg';
import pic12 from '../assests/avatar_man_muslim_icon.svg';
import pic13 from '../assests/beard_hipster_male_man_icon.svg';
import pic14 from '../assests/child_girl_kid_person_icon.svg';
import pic15 from '../assests/christmas_clous_santa_icon.svg';
import pic16 from '../assests/friday_halloween_jason_movie_icon.svg';
import pic17 from '../assests/indian_male_man_person_icon.svg';


type ContactItem = {
  id: number;
  fname: string;
  lname: string;
  active: boolean;
  avatar: string;
};

const avatars = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
];

const CreateContactForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  // const [editId, setEditId] = useState<number | null>(null);

  const navigate = useNavigate();
  const contactsArray = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (fname === '' || lname === '') {
      setError(true);
    } else {
      setError(false);
      const id = contactsArray.length > 0 ? contactsArray[contactsArray.length - 1].id + 1 : 1;
      const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
      const newContact: ContactItem = { id, fname, lname, active, avatar: randomAvatar };
      dispatch(addContact(newContact));
      resetForm();
      navigate('/');
    }
  };

  // Reset the form
  const resetForm = () => {

    setFname('');
    setLname('');
    setActive(false);
};


  

  return (

    // FORM CONTAINER
    <div className='flex flex-col mt-5 items-center'>
      
      {/* FORM INNER CONTAINER */}
      <div className=' w-fit  bg-gray-200 mx-3 py-10 px-4 md:px-14 rounded-md shadow-lg'>
      
      {/* FORM TITLE  */}
      <h1 className='text-center font-bold text-xl mb-2'>Add Contact</h1>

        {/*ADD CONTACT FORM */}
        <form className=''>
          {error && <p className='text-taken font-semibold mb-2'>Error! Both First Name and Last Name are required.</p>}
          <label htmlFor="fname">First Name:
            <input className="placeholder:text-sm placeholder:text-slate-400 ml-2 py-1.5 px-3 border-2 border-teal-200 text-sm rounded-md mb-3" placeholder='John' type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
          </label>
          <br />
          <label htmlFor="lname">Last Name:
            <input className="placeholder:text-sm placeholder:text-slate-400 ml-2 py-1.5 px-3 border-2 border-teal-200 text-sm rounded-md mb-3" placeholder='Doe' type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
          </label>
          <br />
          <label>Active Status:
            {/* <xxs */}
            <div>
              <input className='ml-3' type="radio" id="active-true" checked={active === true} onChange={() => setActive(true)} />
              <label className='ml-2 text-green-600 font-medium' htmlFor="active-true">Active</label>
              <input className='ml-3' type="radio" id="active-false" checked={active === false} onChange={() => setActive(false)} />
              <label className="ml-2 text-red-500 font-medium" htmlFor="active-false">Inactive</label>
            </div>
            {/* <input className='ml-3' type="radio" id="active-true" checked={active === true} onChange={() => setActive(true)} />
            <label className='ml-2' htmlFor="active-true">Active</label>
            <input className='ml-3' type="radio" id="active-false" checked={active === false} onChange={() => setActive(false)} />
            <label className="ml-2" htmlFor="active-false">Inactive</label> */}
          </label>
          <br />
          <div className='mt-4'>
            <button className='border-2 border-teal-400 bg-teal-400 text-white font-medium px-4 rounded-lg' type="submit" onClick={submitHandler}>
              Add
            </button>
            <button className='border-2 border-taken bg-taken text-white font-medium px-4 mx-2 rounded-lg' onClick={resetForm} disabled={!(fname || lname)}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContactForm;
