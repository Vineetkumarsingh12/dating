import React from 'react'
import ConfessCard from './ConfessCard';

const ConfessAnonymously = () => {
      const [allConfession, setAllConfession] = useState([]);
      const [ownConfession, setOwnConfession] = useState([]);
      const [confession, setConfession] = useState('');
  return (
    <div>
        {/* all confession */}
      <div>
   {
        allConfession.map((confession, _id) => {
        return <ConfessCard key={_id} description={confession}/>
        })
    
   }
      </div>

      {/* own confession */}
      <div>
        {
        ownConfession.map((confession, _id) => {
        return <ConfessCard key={_id} description={confession}/>  

        })
      }

      </div>

      {/* confess */}
      <div>
        
      </div>

    </div>
  )
}

export default ConfessAnonymously
