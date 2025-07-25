/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./borrow-requests.css";

export default function BorrowRequestsPage() {
  const [activeTab, setActiveTab] = useState("incoming");

  return (
    <>
      <header className="br-header">
        <div className="br-header-left">
          <strong>BookLoop</strong>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/addbook">Add Book</Link>
            <Link to="/search">Search Books</Link>
            <Link to="/history">My History</Link>
            <Link to="/borrowrequests">Borrow Requests</Link>
            <Link to="/exchangechat">Chat Section</Link>
           
          </nav>
        </div>
        <div className="br-header-right">
          <Link to="/notifications" className="br-icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="br-icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <div className="br-container">
        <div className="br-tabs">
          <button
            className={`br-tab-btn ${activeTab === "incoming" ? "br-active" : ""}`}
            onClick={() => setActiveTab("incoming")}
          >
            Incoming Requests
          </button>
          <button
            className={`br-tab-btn ${activeTab === "outgoing" ? "br-active" : ""}`}
            onClick={() => setActiveTab("outgoing")}
          >
            Outgoing Requests
          </button>
        </div>

        {activeTab === "incoming" && (
          <div className="br-main-content">
            <div className="br-left-panel">
              <div className="br-request br-selected">
                <img src="https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY445_SX342_.jpg" alt="Wanderlust" />
                <div className="br-request-details">
                  <h4>Wanderlust Chronicles</h4>
                  <p>From: Explorer Nomad</p>
                  <span className="br-tag br-pending">Pending</span>
                  <span className="br-time">2 hours ago</span>
                </div>
              </div>
            </div>

            <div className="br-right-panel">
              <div className="br-book-preview">
                <img src="https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY445_SX342_.jpg" alt="Wanderlust" />
                <div>
                  <h3>Wanderlust Chronicles</h3>
                  <p><strong>Explorer Nomad</strong></p>
                  <p>A classic tale of a shepherd boy named Santiago who journeys to the Egyptian desert in search of a hidden treasure. Through his travels, he learns valuable lessons about destiny, love, and the true meaning of life’s journey.</p>
                  <p><span className="br-genre">Genre:</span> Adventure, Philosophy</p>
                </div>
              </div>

              <div className="br-message-box">
                <div className="br-user-info">
                  <div className="br-avatar">AJ</div>
                  <div>
                    <strong>Alice Johnson</strong><br />
                    <small>Requester</small>
                  </div>
                </div>
                <p><strong>Request Message:</strong></p>
                <p>Hello! I’m very interested in borrowing “The Alchemist”...</p>
                <p className="br-timestamp">Sent on July 26, 2024, 10:30 AM</p>
                <div className="br-actions">
                  <button className="br-reject">Reject</button>
                  <button className="br-accept">Accept</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "outgoing" && (
          <div className="br-main-content">
            <p style={{ padding: "2rem" }}>No outgoing requests yet.</p>
          </div>
        )}
      </div>

      <footer className="br-footer">BookExchange © 2025 | Stay updated with BookExchange</footer>
    </>
  );
}
  */

/*
 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./borrow-requests.css";

export default function BorrowRequestsPage() {
  const [activeTab, setActiveTab] = useState("incoming");
  const [requests, setRequests] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const endpoint =
          activeTab === "incoming"
            ? `http://localhost:5000/api/borrowrequests/incoming/${userId}`
            : `http://localhost:5000/api/borrowrequests/outgoing/${userId}`;

        const res = await fetch(endpoint);
        const data = await res.json();
        console.log(`Fetched ${activeTab} requests:`, data);
        setRequests(data);
      } catch (err) {
        console.error("Failed to fetch borrow requests:", err);
      }
    };

    fetchRequests();
  }, [activeTab, userId]);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/borrowrequests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const updated = await res.json();
      setRequests((prev) =>
        prev.map((r) => (r._id === updated._id ? updated : r))
      );
    } catch (err) {
      console.error("Failed to update request:", err);
    }
  };

  return (
    <>
      <header className="br-header">
        <div className="br-header-left">
          <strong>BookLoop</strong>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/addbook">Add Book</Link>
            <Link to="/search">Search Books</Link>
            <Link to="/history">My History</Link>
            <Link to="/borrowrequests">Borrow Requests</Link>
            <Link to="/exchangechat">Chat Section</Link>
          </nav>
        </div>
        <div className="br-header-right">
          <Link to="/notifications" className="br-icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="br-icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <div className="br-container">
        <div className="br-tabs">
          <button
            className={`br-tab-btn ${activeTab === "incoming" ? "br-active" : ""}`}
            onClick={() => setActiveTab("incoming")}
          >
            Incoming Requests
          </button>
          <button
            className={`br-tab-btn ${activeTab === "outgoing" ? "br-active" : ""}`}
            onClick={() => setActiveTab("outgoing")}
          >
            Outgoing Requests
          </button>
        </div>

        <div className="br-main-content">
          {requests.length === 0 ? (
            <p style={{ padding: "2rem" }}>No {activeTab} requests yet.</p>
          ) : (
            requests.map((request) => (
              <div key={request._id} className="br-left-panel">
                <div className="br-request br-selected">
                  <img src={request.bookImage || "https://via.placeholder.com/100"} alt={request.bookTitle || "Book"} />
                  <div className="br-request-details">
                    <h4>{request.bookTitle}</h4>
                    <p>
                      {activeTab === "incoming"
                        ? `From: ${request.senderEmail}`
                        : `To: ${request.receiverEmail}`}
                    </p>
                    <span className={`br-tag br-${request.status}`}>{request.status}</span>
                    <span className="br-time">{new Date(request.timestamp).toLocaleString()}</span>
                  </div>

                  {activeTab === "incoming" && request.status === "pending" && (
                    <div className="br-actions">
                      <button
                        className="br-reject"
                        onClick={() => handleStatusUpdate(request._id, "rejected")}
                      >
                        Reject
                      </button>
                      <button
                        className="br-accept"
                        onClick={() => handleStatusUpdate(request._id, "accepted")}
                      >
                        Accept
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="br-footer">
        BookExchange © 2025 | Stay updated with BookExchange
      </footer>
    </>
  );
}
*/


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./borrow-requests.css";

export default function BorrowRequestsPage() {
  const [activeTab, setActiveTab] = useState("incoming");
  const [requests, setRequests] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const endpoint =
          activeTab === "incoming"
            ? `http://localhost:5000/api/borrowrequests/incoming/${userId}`
            : `http://localhost:5000/api/borrowrequests/outgoing/${userId}`;

        const res = await fetch(endpoint);
        const data = await res.json();
        console.log(`Fetched ${activeTab} requests:`, data);
        setRequests(data);
      } catch (err) {
        console.error("Failed to fetch borrow requests:", err);
      }
    };

    fetchRequests();
  }, [activeTab, userId]);

  const handleAction = async (requestId, action) => {
    try {
      const response = await fetch(`http://localhost:5000/api/borrowrequests/${requestId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: action }), // "accepted" or "rejected"
      });

      if (response.ok) {
        setRequests((prev) => prev.filter((r) => r._id !== requestId));
      } else {
        console.error("Failed to update request status");
      }
    } catch (err) {
      console.error("Error in handleAction:", err);
    }
  };

  return (
    <>
      <header className="br-header">
        <div className="br-header-left">
          <strong>BookLoop</strong>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/addbook">Add Book</Link>
            <Link to="/search">Search Books</Link>
            <Link to="/history">My History</Link>
            <Link to="/borrowrequests">Borrow Requests</Link>
            <Link to="/exchangechat">Chat Section</Link>
          </nav>
        </div>
        <div className="br-header-right">
          <Link to="/notifications" className="br-icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="br-icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <div className="br-container">
        <div className="br-tabs">
          <button
            className={`br-tab-btn ${activeTab === "incoming" ? "br-active" : ""}`}
            onClick={() => setActiveTab("incoming")}
          >
            Incoming Requests
          </button>
          <button
            className={`br-tab-btn ${activeTab === "outgoing" ? "br-active" : ""}`}
            onClick={() => setActiveTab("outgoing")}
          >
            Outgoing Requests
          </button>
        </div>

        <div className="br-main-content">
          {requests.length === 0 ? (
            <p style={{ padding: "2rem" }}>No {activeTab} requests yet.</p>
          ) : (
            requests.map((request) => (
              <div key={request._id} className="br-left-panel">
                <div className="br-request br-selected">
                  <img src={request.bookImage || "https://via.placeholder.com/100"} alt={request.bookTitle || "Book"} />
                  <div className="br-request-details">
                    <h4>{request.bookTitle}</h4>
                    <p>
                      {activeTab === "incoming"
                        ? `From: ${request.senderEmail}`
                        : `To: ${request.receiverEmail}`}
                    </p>
                    <span className={`br-tag br-${request.status}`}>{request.status}</span>
                    <span className="br-time">{new Date(request.timestamp).toLocaleString()}</span>
                  </div>

                  {activeTab === "incoming" && request.status === "pending" && (
                    <div className="br-actions">
                      <button
                        className="br-reject"
                        onClick={() => handleAction(request._id, "rejected")}
                      >
                        Reject
                      </button>
                      <button
                        className="br-accept"
                        onClick={() => handleAction(request._id, "accepted")}
                      >
                        Accept
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="br-footer">
        BookExchange © 2025 | Stay updated with BookExchange
      </footer>
    </>
  );
}
