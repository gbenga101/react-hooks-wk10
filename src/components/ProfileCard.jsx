import { useState, useEffect } from 'react';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({ name: 'Gbenga Fagbenro', email: 'gbenga@example.com', city: 'Abeokuta' });
      setLoading(false);
    }, 2000);

    // Cleanup: cancels the timeout if the component unmounts before it fires,
    // preventing a "set state on an unmounted component" warning.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Profile Card</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>City: {profile.city}</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
