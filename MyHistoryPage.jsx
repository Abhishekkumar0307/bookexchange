import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./my-history.css";

export default function MyHistoryPage() {
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      alert("⚠️ User not logged in!");
      setLoading(false);
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/history/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch history");
        const data = await res.json();

        // ✅ Transform the raw array into structured data
        const totalBorrowed = data.filter(b => b.type === "borrowed").length;
        const totalLent = data.filter(b => b.type === "lent").length;
        const activeLoans = data.filter(b => b.status === "Borrowed").length;

        const borrowedBooks = data.filter(b => b.type === "borrowed");
        const lastBooks = data.filter(b => b.status === "Returned").slice(0, 3);
        const recentActivity = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map(b => ({
            description: `${b.status} "${b.bookTitle}"`,
            date: b.date,
          }));

        setHistory({
          totalBorrowed,
          totalLent,
          activeLoans,
          borrowedBooks,
          lastBooks,
          recentActivity,
        });
      } catch (err) {
        console.error("❌ Error fetching history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [userId]);

  if (loading) return <div className="mh-loading">Loading...</div>;
  if (!history) return <div className="mh-no-history">No history found.</div>;

  return (
    <>
      <header className="mh-header">
        <div className="mh-header-left">
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
        <div className="mh-header-right">
          <Link to="/notifications" className="mh-icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="mh-icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <div className="mh-container">
        <h1>My Book History</h1>

        {/* Stats */}
        <div className="mh-stats">
          <div className="mh-stat-box">
            <h2>{history.totalBorrowed || 0}</h2>
            <p>Total Borrowed Books</p>
          </div>
          <div className="mh-stat-box">
            <h2>{history.totalLent || 0}</h2>
            <p>Total Lent Books</p>
          </div>
          <div className="mh-stat-box">
            <h2>{history.activeLoans || 0}</h2>
            <p>Active Loans</p>
          </div>
        </div>

        {/* Borrowed Books */}
        <h2>Borrowed Books List</h2>
        <div className="mh-book-grid">
          {history.borrowedBooks?.length > 0 ? (
            history.borrowedBooks.map((book, index) => (
              <div className="mh-book-card" key={index}>
                <img src={book.bookImage} alt={book.bookTitle} />
                <div className="mh-tags">
                  <span className="mh-tag">Borrowed</span>
                  <span className="mh-tag">{book.category}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No borrowed books found.</p>
          )}
        </div>

        {/* Last Books */}
        <h2>Last Books</h2>
        <div className="mh-book-grid">
          {history.lastBooks?.length > 0 ? (
            history.lastBooks.map((book, index) => (
              <div className="mh-book-card" key={index}>
                <img src={book.bookImage} alt={book.bookTitle} />
                <div className="mh-tags">
                  <span className="mh-tag">Returned</span>
                  <span className="mh-tag">{book.category}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No recently returned books.</p>
          )}
        </div>

        {/* Recent Activity */}
        <div className="mh-activity-section">
          <h3>Recent Activity</h3>
          <ul>
            {history.recentActivity?.length > 0 ? (
              history.recentActivity.map((activity, index) => (
                <li key={index}>
                  <span>{activity.description}</span>
                  <span>{new Date(activity.date).toLocaleDateString()}</span>
                </li>
              ))
            ) : (
              <p>No recent activity available.</p>
            )}
          </ul>
        </div>
      </div>

      <footer className="mh-footer">
        BookExchange © 2025 | Stay updated with BookExchange
      </footer>
    </>
  );
}
