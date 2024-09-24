import React from 'react'
import SingleUser from './SingleUser';
import userGetAllUsers from '../../context/userGetAllUsers';


function Users() {

    const [allUsers, loading] = userGetAllUsers();

    if (!Array.isArray(allUsers)) {
        console.error('allUsers is not an array:', allUsers);
        return <div>Error: Unable to retrieve users.</div>;
    }

    console.log(allUsers);


    return (
        <div style={{maxHeight: "calc(84vh - 1vh)"}} className='py-2 flex-aayush overflow-y-auto'>


            {allUsers.map((user, index)=>(
                 <SingleUser key={index} user={user}/>
            ))}
        </div>

    );
}

export default Users;
