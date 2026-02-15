
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/profile";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => { fetchProfile(); }, []);

  const fetchProfile = async () => {
    const { data } = await axios.get(API);
    setProfile(data);
    if (data?.darkMode) document.documentElement.classList.add("dark");
  };

  const saveProfile = async () => {
    const { data } = await axios.put(API, profile);
    setProfile(data);
    setEditMode(false);
  };

  const endorseSkill = async (id) => {
    const { data } = await axios.post(`${API}/endorse/${id}`);
    setProfile(data);
  };

  const toggleDarkMode = async () => {
    const updated = { ...profile, darkMode: !profile.darkMode };
    setProfile(updated);
    await axios.put(API, updated);
    document.documentElement.classList.toggle("dark");
  };

  if (!profile) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex justify-center p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-xl">
        
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <button onClick={toggleDarkMode} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            {profile.darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <img src={profile.profilePicture} className="w-28 h-28 rounded-full mx-auto mb-4" />

        {editMode ? (
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full border rounded p-2 mb-4 text-black"
          />
        ) : (
          <p className="text-center mb-4">{profile.bio}</p>
        )}

        <h2 className="font-semibold mb-2">Skills</h2>
        {profile.skills.map(skill => (
          <div key={skill._id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2">
            <span>{skill.name} ({skill.endorsements})</span>
            <button
              onClick={() => endorseSkill(skill._id)}
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Endorse
            </button>
          </div>
        ))}

        <div className="flex justify-end mt-4">
          {editMode ? (
            <button onClick={saveProfile} className="px-4 py-2 bg-green-500 text-white rounded-lg">
              Save
            </button>
          ) : (
            <button onClick={() => setEditMode(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">
              Edit
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
