// // import React, { useEffect, useState, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./ProfilePage.css";

// // export default function ProfilePage() {
// //   const navigate = useNavigate();

// //   const [profile, setProfile] = useState({
// //     name: "",
// //     email: "",
// //     since: "",
// //     booksShared: 0,
// //     membership: "",
// //     avatar: "",
// //     location: "", // ✅ Added
// //   });

// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState({
// //     name: "",
// //     email: "",
// //     location: "", // ✅ Added
// //   });

// //   const [avatarPreview, setAvatarPreview] = useState(null);
// //   const fileInputRef = useRef(null);

// //   // Load profile from sessionStorage on mount
// //   /*useEffect(() => {
// //     const storedProfile = {
// //       name: sessionStorage.getItem("userName") || "Guest User",
// //       email: sessionStorage.getItem("userEmail") || "unknown@example.com",
// //       since: sessionStorage.getItem("memberSince") || "Unknown",
// //       booksShared: sessionStorage.getItem("booksShared") || 0,
// //       membership: sessionStorage.getItem("membershipStatus") || "Free",
// //       avatar: sessionStorage.getItem("userAvatar") || "",
// //       location: sessionStorage.getItem("userLocation") || "Not Provided", // ✅
// //     };
// //     setProfile(storedProfile);
// //     setEditData({
// //       name: storedProfile.name,
// //       email: storedProfile.email,
// //       location: storedProfile.location, // ✅
// //     });
// //     setAvatarPreview(storedProfile.avatar || null);
// //   }, []);*/

// //   useEffect(() => {
// //   const email = sessionStorage.getItem("userEmail");

// //   if (!email) return;

// //   fetch(`http://localhost:5000/api/profile/${email}`)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       setProfile(data);
// //       setEditData({
// //         name: data.name,
// //         email: data.email,
// //         location: data.location,
// //       });
// //       setAvatarPreview(data.avatar || null);

// //       // Optional: Save to sessionStorage
// //       sessionStorage.setItem("userName", data.name);
// //       sessionStorage.setItem("userLocation", data.location);
// //       sessionStorage.setItem("userAvatar", data.avatar);
// //       sessionStorage.setItem("memberSince", data.since);
// //       sessionStorage.setItem("booksShared", data.booksShared);
// //       sessionStorage.setItem("membershipStatus", data.membership);
// //     })
// //     .catch((err) => console.error("Failed to load profile:", err));
// // }, []);


// //   const toggleEdit = () => {
// //     setIsEditing(!isEditing);
// //     if (isEditing) {
// //       setEditData({
// //         name: profile.name,
// //         email: profile.email,
// //         location: profile.location, // ✅
// //       });
// //       setAvatarPreview(profile.avatar || null);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditData((prev) => ({ ...prev, [name]: value }));
// //   };
  
 
// //   const handleAvatarChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setAvatarPreview(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   /*const handleSave = (e) => {
// //     e.preventDefault();

// //     const updatedProfile = {
// //       ...profile,
// //       name: editData.name,
// //       email: editData.email,
// //       location: editData.location, // ✅
// //       avatar: avatarPreview || "",
// //     };

// //     setProfile(updatedProfile);
// //     setIsEditing(false);

// //     sessionStorage.setItem("userName", updatedProfile.name);
// //     sessionStorage.setItem("userEmail", updatedProfile.email);
// //     sessionStorage.setItem("userAvatar", updatedProfile.avatar);
// //     sessionStorage.setItem("userLocation", updatedProfile.location); // ✅
// //   };

// //   const handleLogout = () => {
// //     sessionStorage.clear();
// //     navigate("/login");
// //   };
// //   */
// //  const handleSave = async (e) => {
// //   e.preventDefault();

// //   const updatedProfile = {
// //     name: editData.name,
// //     email: editData.email,
// //     location: editData.location,
// //     avatar: avatarPreview || "",
// //   };

// //   try {
// //     const res = await fetch(`http://localhost:5000/api/profile/${editData.email}`, {
// //       method: "PUT",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(updatedProfile),
// //     });

// //     const data = await res.json();
// //     setProfile(data);
// //     setIsEditing(false);

// //     // Update sessionStorage
// //     sessionStorage.setItem("userName", data.name);
// //     sessionStorage.setItem("userEmail", data.email);
// //     sessionStorage.setItem("userAvatar", data.avatar);
// //     sessionStorage.setItem("userLocation", data.location);
// //   } catch (err) {
// //     console.error("Failed to update profile:", err);
// //   }
// // };


// //   return (
// //     <div className="profile-container">
// //       <div className="profile-card">
// //         <div className="profile-avatar-section">
// //           <img
// //             src={avatarPreview || "https://i.pravatar.cc/150?img=12"}
// //             alt="Profile Avatar"
// //             className="profile-avatar"
// //           />
// //           {isEditing && (
// //             <div className="avatar-upload">
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleAvatarChange}
// //                 ref={fileInputRef}
// //                 id="avatarInput"
// //                 style={{ display: "none" }}
// //               />
// //               <label htmlFor="avatarInput" className="avatar-upload-btn">
// //                 Change Photo
// //               </label>
// //             </div>
// //           )}
// //         </div>

// //         {!isEditing ? (
// //           <>
// //             <h2 className="profile-name">{profile.name}</h2>
// //             <span className={`profile-badge membership-${profile.membership.toLowerCase()}`}>
// //               {profile.membership} Member
// //             </span>

// //             <div className="profile-info">
// //               <p><i className="fas fa-envelope"></i> {profile.email}</p>
// //               <p><i className="fas fa-map-marker-alt"></i> Location: {profile.location}</p> {/* ✅ */}
// //               <p><i className="fas fa-calendar-alt"></i> Member Since: {profile.since}</p>
// //               <p><i className="fas fa-book"></i> Books Shared: {profile.booksShared}</p>
// //               <p><i className="fas fa-star"></i> Status: <strong>{profile.membership}</strong></p>
// //             </div>

// //             <div className="profile-buttons">
// //               <button className="btn btn-edit" onClick={toggleEdit}>Edit Profile</button>
// //               <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
// //             </div>
// //           </>
// //         ) : (
// //           <form className="profile-edit-form" onSubmit={handleSave}>
// //             <label>
// //               Name
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={editData.name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </label>
// //             <label>
// //               Email
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={editData.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </label>
// //             <label>
// //               Location
// //               <input
// //                 type="text"
// //                 name="location"
// //                 value={editData.location}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </label>

// //             <div className="profile-buttons">
// //               <button type="submit" className="btn btn-save">Save Changes</button>
// //               <button type="button" className="btn btn-cancel" onClick={toggleEdit}>Cancel</button>
// //             </div>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProfilePage.css";

// export default function ProfilePage() {
//   const [user, setUser] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     location: "",
//     avatar: "",
//   });

//   const navigate = useNavigate();
//   const userId = sessionStorage.getItem("userId");

//   useEffect(() => {
//     if (!userId) return;

//     fetch(`http://localhost:5000/api/users/id/${userId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(data);
//         setFormData({
//           name: data.name || "",
//           email: data.email || "",
//           location: data.location || "",
//           avatar: data.avatar || "",
//         });
//       })
//       .catch((err) => console.error("Failed to fetch user data:", err));
//   }, [userId]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // const handleSave = () => {
//   //   fetch(`http://localhost:5000/api/users/${formData.email}`, {
//   //     method: "PUT",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(formData),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((updatedUser) => {
//   //       setUser(updatedUser);
//   //       setEditMode(false);
//   //     })
//   //     .catch((err) => console.error("Failed to update profile:", err));
//   // };
//   const handleSave = () => {
//   fetch(`http://localhost:5000/api/users/${formData.email}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Failed to update: ${res.status}`);
//       return res.json();
//     })
//     .then((updatedUser) => {
//       console.log("Updated successfully:", updatedUser);
//       setEditMode(false);
//     })
//     .catch((err) => {
//       console.error("Error updating user:", err);
//     });
// };


//   const handleLogout = () => {
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="profile-container">
//       <h1>My Profile</h1>

//       <div className="profile-card">
//         {formData.avatar ? (
//           <img src={formData.avatar} alt="Avatar" className="profile-avatar" />
//         ) : (
//           <div className="avatar-placeholder">No Avatar</div>
//         )}

//         <div className="profile-info">
//           {editMode ? (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//               />
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 placeholder="Location"
//               />
//               <input
//                 type="text"
//                 name="avatar"
//                 value={formData.avatar}
//                 onChange={handleChange}
//                 placeholder="Avatar URL"
//               />
//               <button onClick={handleSave}>Save</button>
//               <button onClick={() => setEditMode(false)}>Cancel</button>
//             </>
//           ) : (
//             <>
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Location:</strong> {user.location}</p>
//               <p><strong>Member Since:</strong> {user.since || "N/A"}</p>
//               <p><strong>Books Shared:</strong> {user.booksShared || 0}</p>
//               <p><strong>Membership:</strong> {user.membership || "Free"}</p>
//               <button onClick={() => setEditMode(true)}>Edit Profile</button>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    favBook: "",
    avatar: "",
    location: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    favBook: "",
    location: "",
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Load profile from sessionStorage
  // useEffect(() => {
  //   const storedProfile = {
  //     name: sessionStorage.getItem("userName") || "Guest User",
  //     email: sessionStorage.getItem("userEmail") || "unknown@example.com",
  //     gender: sessionStorage.getItem("userGender") || "",
  //     dob: sessionStorage.getItem("userDob") || "",
  //     favBook: sessionStorage.getItem("userFavBook") || "",
  //     avatar: sessionStorage.getItem("userAvatar") || "",
  //     location: sessionStorage.getItem("userLocation") || "Not Provided",
  //   };
  //   setProfile(storedProfile);
  //   setEditData(storedProfile);
  //   setAvatarPreview(storedProfile.avatar || null);
  // }, []);

  useEffect(() => {
  const userId = sessionStorage.getItem("userId");
  if (!userId) return;

  fetch(`http://localhost:5000/api/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setName(data.name || "");
      setEmail(data.email || "");
      setLocation(data.location || "");
      setAvatarUrl(data.avatarUrl || "");
      setMembership(data.membership || "");
    })
    .catch((err) => {
      console.error("Failed to fetch profile:", err);
    });
}, []);


  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setEditData(profile);
      setAvatarPreview(profile.avatar || null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleSave = (e) => {
  //   e.preventDefault();

  //   const updatedProfile = {
  //     ...editData,
  //     avatar: avatarPreview || "",
  //   };

  //   setProfile(updatedProfile);
  //   setIsEditing(false);

  //   // Save to sessionStorage
  //   sessionStorage.setItem("userName", updatedProfile.name);
  //   sessionStorage.setItem("userEmail", updatedProfile.email);
  //   sessionStorage.setItem("userGender", updatedProfile.gender);
  //   sessionStorage.setItem("userDob", updatedProfile.dob);
  //   sessionStorage.setItem("userFavBook", updatedProfile.favBook);
  //   sessionStorage.setItem("userAvatar", updatedProfile.avatar);
  //   sessionStorage.setItem("userLocation", updatedProfile.location);

  //   // OPTIONAL: Sync to backend
  //   fetch("/api/user/update", {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(updatedProfile),
  //   });
  // };

  const handleSave = (e) => {
  e.preventDefault();

  const updatedProfile = {
    ...editData,
    avatar: avatarPreview || "",
  };

  setProfile(updatedProfile);
  setIsEditing(false);

  // Save to sessionStorage
  sessionStorage.setItem("userName", updatedProfile.name);
  sessionStorage.setItem("userEmail", updatedProfile.email);
  sessionStorage.setItem("userGender", updatedProfile.gender);
  sessionStorage.setItem("userDob", updatedProfile.dob);
  sessionStorage.setItem("userFavBook", updatedProfile.favBook);
  sessionStorage.setItem("userAvatar", updatedProfile.avatar);
  sessionStorage.setItem("userLocation", updatedProfile.location);

  // ✅ Get userId from sessionStorage
  const userId = sessionStorage.getItem("userId");

  // ✅ PUT request to backend with userId
  fetch(`http://localhost:5000/api/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProfile),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Profile update failed");
      return res.json();
    })
    .then((data) => {
      console.log("Profile successfully updated:", data);
    })
    .catch((err) => {
      console.error("Error updating profile:", err);
    });
};

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar-section">
          <img
            src={avatarPreview || "https://i.pravatar.cc/150?img=12"}
            alt="Profile Avatar"
            className="profile-avatar"
          />
          {isEditing && (
            <div className="avatar-upload">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                ref={fileInputRef}
                id="avatarInput"
                style={{ display: "none" }}
              />
              <label htmlFor="avatarInput" className="avatar-upload-btn">
                Change Photo
              </label>
            </div>
          )}
        </div>

        {!isEditing ? (
          <>
            <h2 className="profile-name">{profile.name}</h2>

            <div className="profile-info">
              <p><i className="fas fa-envelope"></i> {profile.email}</p>
              <p><i className="fas fa-map-marker-alt"></i> Location: {profile.location}</p>
              <p><i className="fas fa-venus-mars"></i> Gender: {profile.gender || "Not Provided"}</p>
              <p><i className="fas fa-birthday-cake"></i> DOB: {profile.dob || "Not Provided"}</p>
              <p><i className="fas fa-book-open"></i> Favorite Book: {profile.favBook || "Not Provided"}</p>
            </div>

            <div className="profile-buttons">
              <button className="btn btn-edit" onClick={toggleEdit}>Edit Profile</button>
              <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <form className="profile-edit-form" onSubmit={handleSave}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Location
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Gender
              <select
                name="gender"
                value={editData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Date of Birth
              <input
                type="date"
                name="dob"
                value={editData.dob}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Favorite Book
              <input
                type="text"
                name="favBook"
                value={editData.favBook}
                onChange={handleChange}
                required
              />
            </label>

            <div className="profile-buttons">
              <button type="submit" className="btn btn-save">Save Changes</button>
              <button type="button" className="btn btn-cancel" onClick={toggleEdit}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}