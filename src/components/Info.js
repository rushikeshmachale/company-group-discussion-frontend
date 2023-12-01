import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Info = () => {
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedGroup = Cookies.get('group');
        
        if (selectedGroup) {
          const groupData = await JSON.parse(selectedGroup);
          setGroup(groupData);
        }
      } catch (error) {
        console.error('Error:', error);
        setGroup({});
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Group Information</h3>
      {group && (
        <div>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Group Details</h5>
              <p className="card-text">ID: {group.id}</p>
              <p className="card-text">Name: {group.name}</p>
              <p className="card-text">Type: {group.type}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Group Members</h5>
              <ul className="list-group list-group-flush">
                {group.employees.map((employee, index) => (
                  <li key={index} className="list-group-item">
                    Name: {employee.username}, Role: {employee.role},<HighlightOffIcon></HighlightOffIcon>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <button className='btn btn-primary'>Back</button>
    </div>
  );
};

export default Info;
