/*import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function HomePage() {
  return (
    <>
      <header className="hp-header">
        <div className="hp-header-left">
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

        <div className="hp-header-right">
          <Link to="/signup" className="hp-signup-button">Sign Up</Link>
          <Link to="/notifications" className="hp-icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="hp-icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <section className="hp-hero-section">
        <div className="hp-overlay">
          <h1>Discover Your Next Great Read</h1>
          <div className="hp-search-bar">
            <input type="text" placeholder="Search for books by title, author or ISBN..." />
            <button>🔍</button>
          </div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Featured & Trending Books</h2>
        <div className="hp-book-grid">
          <div className="hp-book">
            <img
              src="https://m.media-amazon.com/images/I/81IM6vEPvLL._UF1000,1000_QL80_.jpg"
              alt="The Crash"
            />
            <h4>The Crash</h4>
            <p>$12.00</p>
          </div>
          <div className="hp-book">
            <img
              src="https://m.media-amazon.com/images/I/81Vcp2zthJL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
              alt="Strangers in Time"
            />
            <h4>Strangers in Time</h4>
            <p>$15.00</p>
          </div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Personalized Recommendations</h2>
        <div className="hp-book-grid">
          <div className="hp-book">
            <img
              src="https://i0.wp.com/www.nationalbook.org/wp-content/uploads/2017/05/blood-in-the-water.jpg?fit=266%2C400&ssl=1"
              alt="Blood in the Water"
            />
            <h4>Blood in the Water</h4>
            <p>$9.99</p>
          </div>
          <div className="hp-book">
            <img
              src="https://images3.penguinrandomhouse.com/cover/9798217071937"
              alt="The Listeners"
            />
            <h4>The Listeners</h4>
            <p>$11.00</p>
          </div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Explore by Genre</h2>
        <div className="hp-genres">
          <div className="hp-genre">Fiction</div>
          <div className="hp-genre">Non-Fiction</div>
          <div className="hp-genre">Science</div>
          <div className="hp-genre">Romance</div>
          <div className="hp-genre">Thriller</div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Bookish Insights</h2>
        <div className="hp-insights">
          <div className="hp-insight">
            <h4>Books Read This Month</h4>
            <p>12</p>
          </div>
          <div className="hp-insight">
            <h4>Average Rating</h4>
            <p>4.5 / 5</p>
          </div>
          <div className="hp-insight">
            <h4>Most Popular Genre</h4>
            <p>Fantasy</p>
          </div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Upcoming Releases & Events</h2>
        <div className="hp-events">
          <div className="hp-event">The Future of AI - Aug 2025</div>
          <div className="hp-event">Sustainable Living Guide</div>
          <div className="hp-event">Digital Photography Talk</div>
          <div className="hp-event">Art of Storytelling Workshop</div>
        </div>
      </section>

      <footer className="hp-footer">© 2025 BookBound Inc. | Made with ❤️</footer>
    </>
  );
}
*/
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function HomePage() {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [events, setEvents] = useState([]);
  const [insight, setInsight] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId"); // get real user ID from session

  useEffect(() => {
    fetch("http://localhost:5000/api/books/trending")
      .then(res => res.json())
      .then(data => setTrendingBooks(data));

    if (userId) {
      fetch(`http://localhost:5000/api/recommendations/${userId}`)
        .then(res => res.json())
        .then(data => setRecommendations(data));

      fetch(`http://localhost:5000/api/insights/${userId}`)
        .then(res => res.json())
        .then(data => setInsight(data));
    }

    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, [userId]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="hp-header">
        <div className="hp-header-left">
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

        <div className="hp-header-right">
          {!userId && (
            <Link to="/signup" className="hp-signup-button">Sign Up</Link>
          )}
          <Link to="/notifications" className="hp-icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="hp-icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <section className="hp-hero-section">
        <div className="hp-overlay">
          <h1>Discover Your Next Great Read</h1>
          <form className="hp-search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for books by title, author or ISBN..."
            />
            <button type="submit">🔍</button>
          </form>
        </div>
      </section>

      <section className="hp-section">
        <h2>Featured & Trending Books</h2>
        <div className="hp-book-grid">
          {trendingBooks.map(book => (
            <div key={book._id} className="hp-book">
              <img src={book.imageUrl} alt={book.title} />
              <h4>{book.title}</h4>
              <p>${book.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hp-section">
        <h2>Personalized Recommendations</h2>
        <div className="hp-book-grid">
          {recommendations.map(book => (
            <div key={book._id} className="hp-book">
              <img src={book.imageUrl} alt={book.title} />
              <h4>{book.title}</h4>
              <p>${book.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hp-section">
        <h2>Explore by Genre</h2>
        <div className="hp-genres">
          <div className="hp-genre">Fiction</div>
          <div className="hp-genre">Non-Fiction</div>
          <div className="hp-genre">Science</div>
          <div className="hp-genre">Romance</div>
          <div className="hp-genre">Thriller</div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Bookish Insights</h2>
        <div className="hp-insights">
          <div className="hp-insight">
            <h4>Books Read This Month</h4>
            <p>{insight?.booksRead ?? '--'}</p>
          </div>
          <div className="hp-insight">
            <h4>Average Rating</h4>
            <p>{insight?.avgRating ?? '--'} / 5</p>
          </div>
          <div className="hp-insight">
            <h4>Most Popular Genre</h4>
            <p>{insight?.mostPopularGenre ?? '--'}</p>
          </div>
        </div>
      </section>

      <section className="hp-section">
        <h2>Upcoming Releases & Events</h2>
        <div className="hp-events">
          {events.map(event => (
            <div key={event._id} className="hp-event">
              {event.title} - {event.date}
            </div>
          ))}
        </div>
      </section>

      <footer className="hp-footer">© 2025 BookBound Inc. | Made with ❤️</footer>
    </>
  );
}
