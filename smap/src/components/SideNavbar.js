import React, { useState } from 'react';
import { Link } from 'react-router-dom'
 import './SideNavbar.css'; 
 
const SideNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState({});
  const handleDropdownClick = (name) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const handleActiveClick = (name) => {
    setActiveDropdown((prevActive) => (prevActive === name ? '' : name));
    
  };

  return (
    <div className='side'>
        <div className="sidenav">
      <Link className={`sidenav ${activeDropdown === 'manager'?'active':''}`} onClick={() => handleActiveClick('manager')} to={"/"}>Account Management</Link></div>
      <div className="dropdown">
        <button className={`dropdown-btn ${activeDropdown === 'tools'?'active':''}`} onClick={() => handleActiveClick('tools')}>
          Automation Tool
        </button>
        <div className={`dropdown-container ${activeDropdown === 'tools' ? 'show' : ''}`}>
          <div className="drop-on">
          <button className="drop-on-dropdown-btn" onClick={() => handleDropdownClick('services1')}>
          Get new friends
          </button>
          <div className={`drop-on-dropdown-container ${dropdownOpen['services1'] ? 'do' : ''}`}>
            <Link to={'/friendrequest'}>Send Friend Request</Link>
            <Link to={'/incomingfriend'}>Incoming friends</Link>
            <Link to={'/widrawal'}>Withdraw friend Request</Link>
            <Link to={'/unfriend'}>Unfriend</Link>
          </div>
        </div>
          <div className="drop-on">
          <button className="drop-on-dropdown-btn" onClick={() => handleDropdownClick('services2')}>
          Message your friends
          </button>
          <div className={`drop-on-dropdown-container ${dropdownOpen['services2'] ? 'do' : ''}`}>
            <Link to={'/braodcast'}>Broadcaste Message</Link>
            <Link to={'/autoreply'}>Auto Reply To Message</Link>
            <Link to={'/sendmessage-to-friends'}>Send Message To Friend Page</Link>
            <Link to={'/sendmessageto-place'}>Send Message to Places</Link>
          </div>
        </div>
          <div className="drop-on">
          <button className="drop-on-dropdown-btn" onClick={() => handleDropdownClick('services3')}>
          Intraction Message
          </button>
          <div className={`drop-on-dropdown-container ${dropdownOpen['services3'] ? 'do' : ''}`}>
          <Link to={'/post-comment'}>Post comment</Link>
            <Link to={'/reply-to-comment'}>Reply to comment</Link>
            <Link to={'/fanpage-liker'}>Fanpage liker</Link>
            <Link to={'/post-liker'}>Post liker</Link>
            <Link to={'/comment-liker'}>Comment liker</Link>
          </div>
        </div>
          <div className="drop-on">
          <button className="drop-on-dropdown-btn" onClick={() => handleDropdownClick('services4')}>
          Scraper Content Manager
          </button>
          <div className={`drop-on-dropdown-container ${dropdownOpen['services4'] ? 'do' : ''}`}>
          <Link to={'/profileScraper'}>Profile Scraper</Link>
            <Link to={'/fanpagescraper'}>Fanpage Scraper</Link>
            <Link to={'/groupScraper'}>Group Scraper</Link>
            <Link to={'commentScraper'}>Comment Scraper</Link>
            <Link to={'/Commentscraper'}>Comment Reply Scraper</Link>
            <Link to={'/postscrap'}>Post Scraper</Link>
            <Link to={'/download'}>Download Media</Link>
            <Link to={'/placeScraper'}>Place Scraper</Link>
          </div>
        </div>
          <div className="drop-on">
          <button className="drop-on-dropdown-btn" onClick={() => handleDropdownClick('services5')}>
          Miscellaneous
          </button>
          <div className={`drop-on-dropdown-container ${dropdownOpen['services5'] ? 'do' : ''}`}>
            <Link to={'/invitaion'}>Group inviter</Link>
            <Link to={"/event"}>Event creator & invitor</Link>
            <Link to={'/blacklist'}>Private blacklist</Link>
          </div>
        </div>
        </div>
      </div>
      <div className="sidenav">
        <Link className={`sidenav ${activeDropdown === 'jobCampaign'?'active':''}`} onClick={() => handleActiveClick('jobCampaign')} to={'/jobCampaign'}>
          Job / Campaign
        </Link>
      </div>
      <div className="sidenav">
        <Link className={`sidenav ${activeDropdown === 'analysis'?'active':''}`} onClick={() => handleActiveClick('analysis')} to={'/analysis'}>Analysis</Link></div>
      <div className="sidenav"><Link  className={`sidenav ${activeDropdown === 'terminal'?'active':''}`} onClick={() => handleActiveClick('terminal')} to={'/terminal'}>Terminal</Link></div>
    </div>
  );
};

export default SideNavbar;
