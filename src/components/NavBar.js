import React, { Component } from 'react';
import './NavBar.css';
import behance from '../images/nav_behance.png';
import facebook from '../images/nav_facebook.png';
import instagram from '../images/nav_instagram.png';
import linkedin from '../images/nav_linkedin.png';
import github from '../images/nav_github.png';

export class NavBar extends Component {
  render() {
    const styles = {
      main: {
        lineHeight: '25px',
        position: 'relative',
        display: 'flex',
        flex: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
        //borderBottom: '4px solid orange',
      },
      textTitle: {
        textShadow: '2.5px 2.5px 0 #6abaef',
        fontWeight: 'bold',
        color: '#13284a',
        fontFamily: '"Lucida Console", Monaco, monospace',
        fontSize: '24px',
        
      },
      span: {
        // display: 'flex',
        // outline: 'none',
        // marginRight: '5px'
        paddingTop: '15px'
      },
      socialLinks: {
        flex: 1,
        padding: '5px'
      },
  

    };
    return (
      <div style={styles.main}>
        <div >
          <h2 style={styles.textTitle}>Jonathan Haines</h2>
        </div>
        <span style={styles.span}>
          <a target="_new" href="//linkedin.com/in/jonathanhaines1/">
            <img
              className="socialLinks"
              style={styles.socialLinks}
              src={linkedin}
              alt="logo-linkedin"
              height="40"
              width="40"
            />
          </a>
          <a target="_new" href="//behance.net/jonhaines">
            <img
              className="socialLinks"
              style={styles.socialLinks}
              src={behance}
              alt="logo-behance"
              height="40"
              width="40"
            />
          </a>
          <a target="_new" href="//github.com/joncancode">
            <img
              className="socialLinks"
              style={styles.socialLinks}
              src={github}
              alt="logo-github"
              height="40"
              width="40"
            />
          </a>
          <a target="_new" href="//facebook.com/jonathan.haines.3">
            <img
              className="socialLinks"
              style={styles.socialLinks}
              src={facebook}
              alt="logo-facebook"
              height="40"
              width="40"
            />
          </a>
          {/* <a target="_new" href="//instagram.com/_jonstagram_/">
            <img
              className="socialLinks"
              style={styles.socialLinks}
              src={instagram}
              alt="logo-instagram"
              height="40"
              width="40"
            />
          </a> */}
        </span>
      </div>
    );
  }
}

export default NavBar;
