// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './SearchBooks.css';

// // function SearchBooks() {
// //   const [locationFilter, setLocationFilter] = useState("");

// //   const searchResults = [
// //     {
// //       title: 'A Court of Thorns and Roses',
// //       src: 'https://rarebirdsbooks.com/cdn/shop/files/website_cover_template_-_2024-09-13T145240.049_800x.png?v=1726235574',
// //       location: 'Delhi',
// //       price: 50
// //     },
// //     {
// //       title: 'The Hobbit',
// //       src: 'https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg',
// //       location: 'Lucknow',
// //       price: 40
// //     },
// //     {
// //       title: 'The Once and Future King',
// //       src: 'https://m.media-amazon.com/images/I/81Pso1OY5TL.jpg',
// //       location: 'Bareilly',
// //       price: 60
// //     },
// //     {
// //       title: 'Throne of Glass',
// //       src: 'https://m.media-amazon.com/images/I/81REJ3+rUOL._UF1000,1000_QL80_.jpg',
// //       location: 'Delhi',
// //       price: 55
// //     },
// //     {
// //       title: 'Children of Blood and Bone',
// //       src: 'https://m.media-amazon.com/images/I/91J5VV6U83L.jpg',
// //       location: 'Mumbai',
// //       price: 45
// //     },
// //     {
// //       title: "Harry Potter and the Sorcerer's Stone",
// //       src: 'https://m.media-amazon.com/images/I/91ocU8970hL._UF1000,1000_QL80_.jpg',
// //       location: 'Jaipur',
// //       price: 70
// //     }
// //   ];

// //   const allBooks = [
// //     {
// //       title: 'Shadow and Bone',
// //       src: 'https://m.media-amazon.com/images/I/816JhuO1cyS.jpg',
// //       location: 'Delhi',
// //       price: 50
// //     },
// //     {
// //       title: 'The Name of the Wind',
// //       src: 'https://m.media-amazon.com/images/I/611iKJa7a-L.jpg',
// //       location: 'Noida',
// //       price: 65
// //     },
// //     {
// //       title: 'The Way of Kings',
// //       src: 'https://m.media-amazon.com/images/I/81rjJoKDOPL._UF1000,1000_QL80_.jpg',
// //       location: 'Bareilly',
// //       price: 55
// //     },
// //     {
// //       title: 'Mistborn: The Final Empire',
// //       src: 'https://npr.brightspotcdn.com/legacy/sites/kwit/files/201903/final_empire.jpg',
// //       location: 'Lucknow',
// //       price: 45
// //     },
// //     {
// //       title: 'The Priory of the Orange Tree',
// //       src: 'https://m.media-amazon.com/images/I/91JR5HRL84L._UF1000,1000_QL80_.jpg',
// //       location: 'Jaipur',
// //       price: 60
// //     },
// //     {
// //       title: 'The First Law Trilogy',
// //       src: 'https://m.media-amazon.com/images/I/91KcoX5BslL._UF1000,1000_QL80_.jpg',
// //       location: 'Pune',
// //       price: 75
// //     }
// //   ];

// //   const handleBorrow = (book) => {
// //     const options = {
// //       key: "rzp_test_1234567890abcdef", // ✅ Replace with your real test key
// //       amount: book.price * 100,
// //       currency: "INR",
// //       name: "BookLoop",
// //       description: `Borrowing "${book.title}"`,
// //       handler: function (response) {
// //         alert(`✅ Payment successful!\nTransaction ID: ${response.razorpay_payment_id}`);
// //       },
// //       prefill: {
// //         name: "Test User",
// //         email: "test@example.com",
// //         contact: "9999999999"
// //       },
// //       theme: {
// //         color: "#4CAF50"
// //       }
// //     };

// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   const filteredSearchResults = searchResults.filter(book =>
// //     book.location.toLowerCase().includes(locationFilter.toLowerCase())
// //   );

// //   const filteredAllBooks = allBooks.filter(book =>
// //     book.location.toLowerCase().includes(locationFilter.toLowerCase())
// //   );

// //   return (
// //     <>
// //       <header>
// //         <div className="header-left">
// //           <strong>BookLoop</strong>
// //           <nav>
// //             <Link to="/">Home</Link>
// //             <Link to="/addbook">Add Book</Link>
// //             <Link to="/search">Search Books</Link>
// //             <Link to="/history">My History</Link>
// //             <Link to="/borrowrequests">Borrow Requests</Link>
// //             <Link to="/exchangechat">Chat Section</Link>
// //           </nav>
// //         </div>
// //         <div className="header-right">
// //           <Link to="/notifications" className="icon-link">🔔</Link>
// //           <Link to="/profile" className="icon-link">👤</Link>
// //         </div>
// //       </header>

// //       <div className="container">
// //         <aside className="sidebar">
// //           <h4>Filters</h4>
// //           <p><strong>Genre</strong></p>
// //           <label><input type="checkbox" /> Fantasy</label><br />
// //           <label><input type="checkbox" /> Fiction</label><br />
// //           <label><input type="checkbox" /> Mystery</label><br />
// //           <label><input type="checkbox" /> Sci-Fi</label><br />
// //           <label><input type="checkbox" /> Biography</label><br />

// //           <p style={{ marginTop: '1rem' }}><strong>Rating</strong></p>
// //           <label><input type="checkbox" /> 5 Stars</label><br />
// //           <label><input type="checkbox" /> 4 Stars</label><br />
// //           <label><input type="checkbox" /> 3 Stars</label><br />

// //           <p style={{ marginTop: '1rem' }}><strong>Availability</strong></p>
// //           <label><input type="checkbox" /> In Stock</label><br />
// //           <label><input type="checkbox" /> Coming Soon</label><br />

// //           <div style={{ marginTop: '1rem' }}>
// //             <p><strong>Location</strong></p>
// //             <input
// //               type="text"
// //               placeholder="Enter city or area"
// //               value={locationFilter}
// //               onChange={(e) => setLocationFilter(e.target.value)}
// //               style={{ width: '90%' }}
// //             />
// //           </div>
// //         </aside>

// //         <main className="main">
// //           <section className="search-header">
// //             <h2>Search Results</h2>
// //             <div className="search-bar">
// //               <input type="text" placeholder="Search books..." />
// //             </div>
// //           </section>

// //           <section className="book-grid">
// //             {filteredSearchResults.map((book, idx) => (
// //               <div className="book" key={idx}>
// //                 <img src={book.src} alt={book.title} />
// //                 <h4>{book.title}</h4>
// //                 <p>📍 {book.location} | 💰 ₹{book.price}</p>
// //                 <button onClick={() => handleBorrow(book)}>Borrow Now</button>
// //               </div>
// //             ))}
// //           </section>

// //           <div className="promo-box">
// //             <h3>Share Your Books with the Community!</h3>
// //             <Link to="/addbook">
// //               <button className="add-book-btn">Add Book</button>
// //             </Link>
// //           </div>

// //           <h3>All Books Available</h3>
// //           <section className="book-grid">
// //             {filteredAllBooks.map((book, idx) => (
// //               <div className="book" key={idx}>
// //                 <img src={book.src} alt={book.title} />
// //                 <h4>{book.title}</h4>
// //                 <p>📍 {book.location} | 💰 ₹{book.price}</p>
// //                 <button onClick={() => handleBorrow(book)}>Borrow Now</button>
// //               </div>
// //             ))}
// //           </section>
// //         </main>
// //       </div>

// //       <footer className="footer">
// //         <div className="subscribe">
// //           <label>Stay updated with BookExchange</label><br />
// //           <input type="email" placeholder="Enter your email" />
// //           <button>Subscribe</button>
// //         </div>
// //         <p>&copy; 2023 BookExchange. All rights reserved.</p>
// //       </footer>
// //     </>
// //   );
// // }

// // export default SearchBooks; 

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './SearchBooks.css';

// const SearchBooks = () => {
//   const [locationFilter, setLocationFilter] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const genresList = ['Fantasy', 'Fiction', 'Mystery', 'Sci-Fi', 'Biography'];

//   const allBooks = [
//     { title: 'A Court of Thorns and Roses', src: '...', location: 'Delhi', price: 50, genre: 'Fantasy' },
//     { title: 'The Hobbit', src: '...', location: 'Lucknow', price: 40, genre: 'Fantasy' },
//     { title: 'The Once and Future King', src: '...', location: 'Bareilly', price: 60, genre: 'Fiction' },
//     { title: 'Throne of Glass', src: '...', location: 'Delhi', price: 55, genre: 'Fantasy' },
//     { title: 'Children of Blood and Bone', src: '...', location: 'Mumbai', price: 45, genre: 'Fiction' },
//     { title: "Harry Potter and the Sorcerer's Stone", src: '...', location: 'Jaipur', price: 70, genre: 'Fantasy' },
//     { title: 'Shadow and Bone', src: '...', location: 'Delhi', price: 50, genre: 'Fantasy' },
//     { title: 'The Name of the Wind', src: '...', location: 'Noida', price: 65, genre: 'Fantasy' },
//     { title: 'The Way of Kings', src: '...', location: 'Bareilly', price: 55, genre: 'Fantasy' },
//     { title: 'Mistborn: The Final Empire', src: '...', location: 'Lucknow', price: 45, genre: 'Fantasy' },
//     { title: 'The Priory of the Orange Tree', src: '...', location: 'Jaipur', price: 60, genre: 'Fiction' },
//     { title: 'The First Law Trilogy', src: '...', location: 'Pune', price: 75, genre: 'Fantasy' }
//   ];

//   const handleBorrow = (book) => {
//     const options = {
//       key: "rzp_test_1234567890abcdef",
//       amount: book.price * 100,
//       currency: "INR",
//       name: "BookLoop",
//       description: `Borrowing "${book.title}"`,
//       handler: (response) => {
//         alert(`✅ Payment successful!\nTransaction ID: ${response.razorpay_payment_id}`);
//       },
//       prefill: { name: "Test User", email: "test@example.com", contact: "9999999999" },
//       theme: { color: "#4CAF50" }
//     };
//     new window.Razorpay(options).open();
//   };

//   const handleGenreChange = (genre) => {
//     setSelectedGenres(prev =>
//       prev.includes(genre)
//         ? prev.filter(g => g !== genre)
//         : [...prev, genre]
//     );
//   };

//   const filteredBooks = allBooks.filter(book => {
//     const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const locMatch = book.location.toLowerCase().includes(locationFilter.toLowerCase());
//     const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(book.genre);
//     return titleMatch && locMatch && genreMatch;
//   });

//   return (
//     <>
//       <header>
//         <div className="header-left">
//           <strong>BookLoop</strong>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/addbook">Add Book</Link>
//             <Link to="/search">Search Books</Link>
//             <Link to="/history">My History</Link>
//             <Link to="/borrowrequests">Borrow Requests</Link>
//             <Link to="/exchangechat">Chat Section</Link>
//           </nav>
//         </div>
//         <div className="header-right">
//           <Link to="/notifications" className="icon-link">🔔</Link>
//           <Link to="/profile" className="icon-link">👤</Link>
//         </div>
//       </header>

//       <div className="container">
//         <aside className="sidebar">
//           <h4>Filters</h4>
//           <p><strong>Genre</strong></p>
//           {genresList.map(genre => (
//             <label key={genre}>
//               <input
//                 type="checkbox"
//                 checked={selectedGenres.includes(genre)}
//                 onChange={() => handleGenreChange(genre)}
//               /> {genre}
//             </label>
//           ))}
//           <p style={{ marginTop: '1rem' }}><strong>Location</strong></p>
//           <input
//             type="text"
//             placeholder="Enter city or area"
//             value={locationFilter}
//             onChange={e => setLocationFilter(e.target.value)}
//             style={{ width: '90%' }}
//           />
//         </aside>

//         <main className="main">
//           <section className="search-header">
//             <h2>Search Results</h2>
//             <div className="search-bar">
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </section>

//           <section className="book-grid">
//             {filteredBooks.map((book, idx) => (
//               <div className="book" key={idx}>
//                 <img src={book.src} alt={book.title} />
//                 <h4>{book.title}</h4>
//                 <p>📍 {book.location} | 💰 ₹{book.price}</p>
//                 <button onClick={() => handleBorrow(book)}>Borrow Now</button>
//               </div>
//             ))}
//             {filteredBooks.length === 0 && <p>No books found.</p>}
//           </section>
//         </main>
//       </div>

//       <footer className="footer">
//         <div className="subscribe">
//           <label>Stay updated with BookExchange</label><br />
//           <input type="email" placeholder="Enter your email" />
//           <button>Subscribe</button>
//         </div>
//         <p>&copy; 2023 BookExchange. All rights reserved.</p>
//       </footer>
//     </>
//   );
// };

// export default SearchBooks;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBooks.css';

function SearchBooks() {
  const [locationFilter, setLocationFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenres((prevGenres) =>
      e.target.checked
        ? [...prevGenres, genre]
        : prevGenres.filter((g) => g !== genre)
    );
  };

  const searchResults = [
    {
      title: 'A Court of Thorns and Roses',
      src: 'https://rarebirdsbooks.com/cdn/shop/files/website_cover_template_-_2024-09-13T145240.049_800x.png?v=1726235574',
      location: 'Delhi',
      price: 50,
      genre: 'Fantasy'
    },
    {
      title: 'The Hobbit',
      src: 'https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg',
      location: 'Lucknow',
      price: 40,
      genre: 'Fantasy'
    },
    {
      title: 'The Once and Future King',
      src: 'https://m.media-amazon.com/images/I/81Pso1OY5TL.jpg',
      location: 'Bareilly',
      price: 60,
      genre: 'Fiction'
    },
    {
      title: 'Throne of Glass',
      src: 'https://m.media-amazon.com/images/I/81REJ3+rUOL._UF1000,1000_QL80_.jpg',
      location: 'Delhi',
      price: 55,
      genre: 'Fantasy'
    },
    {
      title: 'Children of Blood and Bone',
      src: 'https://m.media-amazon.com/images/I/91J5VV6U83L.jpg',
      location: 'Mumbai',
      price: 45,
      genre: 'Fiction'
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      src: 'https://m.media-amazon.com/images/I/91ocU8970hL._UF1000,1000_QL80_.jpg',
      location: 'Jaipur',
      price: 70,
      genre: 'Fantasy'
    }
  ];

  const allBooks = [
    {
      title: 'Shadow and Bone',
      src: 'https://m.media-amazon.com/images/I/816JhuO1cyS.jpg',
      location: 'Delhi',
      price: 50,
      genre: 'Fantasy'
    },
    {
      title: 'The Name of the Wind',
      src: 'https://m.media-amazon.com/images/I/611iKJa7a-L.jpg',
      location: 'Noida',
      price: 65,
      genre: 'Fantasy'
    },
    {
      title: 'The Way of Kings',
      src: 'https://m.media-amazon.com/images/I/81rjJoKDOPL._UF1000,1000_QL80_.jpg',
      location: 'Bareilly',
      price: 55,
      genre: 'Fantasy'
    },
    {
      title: 'Mistborn: The Final Empire',
      src: 'https://npr.brightspotcdn.com/legacy/sites/kwit/files/201903/final_empire.jpg',
      location: 'Lucknow',
      price: 45,
      genre: 'Sci-Fi'
    },
    {
      title: 'The Priory of the Orange Tree',
      src: 'https://m.media-amazon.com/images/I/91JR5HRL84L._UF1000,1000_QL80_.jpg',
      location: 'Jaipur',
      price: 60,
      genre: 'Fantasy'
    },
    {
      title: 'The First Law Trilogy',
      src: 'https://m.media-amazon.com/images/I/91KcoX5BslL._UF1000,1000_QL80_.jpg',
      location: 'Pune',
      price: 75,
      genre: 'Fiction'
    }
  ];

  const handleBorrow = (book) => {
    const options = {
      key: "rzp_test_1234567890abcdef",
      amount: book.price * 100,
      currency: "INR",
      name: "BookLoop",
      description: `Borrowing "${book.title}"`,
      handler: function (response) {
        alert(`✅ Payment successful!\nTransaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#4CAF50"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const filterBooks = (books) =>
    books.filter((book) => {
      const matchLocation = book.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchSearch = book.title.toLowerCase().includes(searchText.toLowerCase());
      const matchGenre = selectedGenres.length === 0 || selectedGenres.includes(book.genre);
      return matchLocation && matchSearch && matchGenre;
    });

  return (
    <>
      <header>
        <div className="header-left">
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
        <div className="header-right">
          <Link to="/notifications" className="icon-link">🔔</Link>
          <Link to="/profile" className="icon-link">👤</Link>
        </div>
      </header>

      <div className="container">
        <aside className="sidebar">
          <h4>Filters</h4>
          <p><strong>Genre</strong></p>
          <label><input type="checkbox" value="Fantasy" onChange={handleGenreChange} /> Fantasy</label><br />
          <label><input type="checkbox" value="Fiction" onChange={handleGenreChange} /> Fiction</label><br />
          <label><input type="checkbox" value="Mystery" onChange={handleGenreChange} /> Mystery</label><br />
          <label><input type="checkbox" value="Sci-Fi" onChange={handleGenreChange} /> Sci-Fi</label><br />
          <label><input type="checkbox" value="Biography" onChange={handleGenreChange} /> Biography</label><br />

          <div style={{ marginTop: '1rem' }}>
            <p><strong>Location</strong></p>
            <input
              type="text"
              placeholder="Enter city or area"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              style={{ width: '90%' }}
            />
          </div>
        </aside>

        <main className="main">
          <section className="search-header">
            <h2>Search Results</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search books..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </section>

          <section className="book-grid">
            {filterBooks(searchResults).map((book, idx) => (
              <div className="book" key={idx}>
                <img src={book.src} alt={book.title} />
                <h4>{book.title}</h4>
                <p>📍 {book.location} | 💰 ₹{book.price}</p>
                <button onClick={() => handleBorrow(book)}>Borrow Now</button>
              </div>
            ))}
          </section>

          <div className="promo-box">
            <h3>Share Your Books with the Community!</h3>
            <Link to="/addbook">
              <button className="add-book-btn">Add Book</button>
            </Link>
          </div>

          <h3>All Books Available</h3>
          <section className="book-grid">
            {filterBooks(allBooks).map((book, idx) => (
              <div className="book" key={idx}>
                <img src={book.src} alt={book.title} />
                <h4>{book.title}</h4>
                <p>📍 {book.location} | 💰 ₹{book.price}</p>
                <button onClick={() => handleBorrow(book)}>Borrow Now</button>
              </div>
            ))}
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="subscribe">
          <label>Stay updated with BookExchange</label><br />
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p>&copy; 2023 BookExchange. All rights reserved.</p>
      </footer>
    </>
  );
}

export default SearchBooks;
