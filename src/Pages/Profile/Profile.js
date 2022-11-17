import React, { useContext } from "react";
import { AuthContext } from "../../hooks/UserContext";
import avatar from '../../assets/profile pic.webp'

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-28 container">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
          <img
            src={user?.photoURL?user.photoURL : avatar}
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold mt-5 mb-5"> Name : {user?.displayName ? user.displayName : 'Name Not Available'}</h2>
            <p>
                Email  : {user?.email}
            </p>
            <span className='mt-5 flex items-center justify-center space-x-2 w-full'>
              <span className='text-gray-400 text-small'>
                Email Status:{' '}
                {user?.emailVerified ? (
                  <span className='text-green-400'>Verified</span>
                ) : (
                  <span className='text-red-400'>Not Verified</span>
                )}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
