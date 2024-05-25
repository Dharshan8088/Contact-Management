
import ContactList1 from '../components/ContactList1';
import { useNavigate} from 'react-router-dom';

const Home = () => {

    // const [toShow, setToShow] = useState(false);
    const navigate = useNavigate();
    return (
    <>
       {/*CREATE CONTACT BTN  */}
      <div className='flex flex-col h-full w-full items-center mt-3'>
        <div className='w-fit '>
          <button onClick={() => navigate('/create')} className=' hover:text-white hover:text-sm hover:bg-teal-400 border-2 border-teal-400 rounded-full py-1.5 px-3 text-sm text-teal-400 font-medium cursor-pointer'>
            Create Contact
          </button>
        </div>
        
        {/* CONTACT LIST */}
        <div className='mt-2 mx-4 md:mx-0 py-2  px-3 md:py-5 md:px-6 border-1 rounded-lg bg-gray-200 h-auto w-5/6 shadow-lg'>
          <ContactList1 />
        </div>
      </div>
    </>
    );
};

export default Home;
