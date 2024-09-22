
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Test = () => {
    const [active, setActive] = useState(0);

  const toggleAccordion = (index) => {
    setActive(active !== index ? index : 0);
  };

  return (
    <div className="" onClick={() => toggleAccordion(4)}>
      <div className='flex items-center justify-between'>
        <p className='text-lg font-semibold'>Need Help</p>
        {active === 4 ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <div 
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${active === 4 ? 'max-h-40' : 'max-h-0'}`}
      >
        <div className="flex flex-col gap-4 py-5 px-8">
          <p className="font-medium">Help Center</p>
          <p className="font-medium">My requests</p>
          <p className="font-medium">Contacts</p>
        </div>
      </div>
    </div>
  );
}

export default Test