import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
      
        onSnapshot(contactRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists
        })
        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts=(e)=>{
    const value=e.target.value;
    const contactRef = collection(db, "contacts");
      
        onSnapshot(contactRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          const filteredContacts=contactLists.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))
          setContacts(filteredContacts);
          return filteredContacts
        });
  };
  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow ">
            <FiSearch className="text-white ml-1 text-3xl absolute" />
            <input
            onChange={filterContacts}
              type="text"
              className=" flex-grow h-10 border-white border bg-transparent rounded-md text-white pl-10"
            />
          </div>

          <CiCirclePlus
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer/>
        

        
    </>
  );
};

export default App;
