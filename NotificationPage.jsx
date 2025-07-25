/*import React from "react";
import "./NotificationPage.css";

export default function NotificationPage() {
  return (
    <div className="bp-notification-container">
      <h1 className="bp-notification-title">Your Notifications</h1>

      <div className="bp-notification-box">
        🔔 Your request to borrow <strong>The Crash</strong> was approved!
      </div>
      <div className="bp-notification-box">
        🔔 New book <strong>Digital Fortress</strong> added to your favorite genre.
      </div>
      <div className="bp-notification-box">
        🔔 You have a new message in the Chat Section.
      </div>
    </div>
  );
}
*/

import React, { useEffect, useState } from "react";
import "./NotificationPage.css";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const userId = sessionStorage.getItem("userId"); // or however you're storing it

  useEffect(() => {
    fetch(`http://localhost:5000/api/notifications/${userId}`)
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error("Error fetching notifications:", err));
  }, [userId]);

  return (
    <div className="bp-notification-container">
      <h1 className="bp-notification-title">Your Notifications</h1>
      {notifications.map((note) => (
        <div key={note._id} className="bp-notification-box">
          🔔 {note.message}
        </div>
      ))}
    </div>
  );
}
