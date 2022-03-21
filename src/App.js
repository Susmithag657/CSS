import React from 'react';
import './style.css';

export default function App() {
  return (
    /*center content horizontally */
    <div>
      <div className="container">
        <p>centering text horizontally inside div using text-align property</p>
      </div>
      <div className="container2">
        <p>centering text horizontally inside div using flex property</p>
      </div>
      <div className="container3">
        <p>Center div vertically using padding property</p>
      </div>
      <div className="container4">
        <p>Center div vertically using line height property</p>
      </div>
      <div className="container5">
        <p>Center div vertically using flex align property</p>
      </div>
      <div className="container6">
        <p>centering div horizontally using width and margin auto properties</p>
      </div>
      <div className="container7">
        <p>To center a div vertically and horizontally in a page using top,left and transform properties</p>
      </div>
    </div>
  );
}
