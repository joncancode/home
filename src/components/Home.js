import React, { Component } from 'react';
import jonhaines from '../images/jonhaines.jpg';
import { brotliDecompress } from 'zlib';

export class Home extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
        height: '50%',
        lineHeight: '30px',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
      },
      container: {
        textAlign: 'left',
        width: '75%',
        //backgroundColor: 'rgba(0,0,51,0.9)',
        margin: 'auto',
        //padding: '20px',
        borderRadius: '5%',
        fontSize: '18px',
        color: 'rgba(0,0,55,0.9)',
      },
      link: {
        color: '#ff7417',
        textDecoration: 'none',
        fontWeight: 'bold'
      }
    };

    return (
      <div style={styles.main}>
        <div className="mq" style={styles.container}>
          <img 
          style={{ borderRadius: '5%', float: 'right', align: 'right'}}
          src={jonhaines} alt="jh" height="175px" width="175px"/>
          <p style={{ fontSize: '36px'}} className="page-title"><strong
          style={{ color: 'rgba(0,0,55,0.9)'}}> Hi</strong>,</p>
          
          <p>
            I'm
            <strong> Jon</strong>, a <strong>UX / UI Designer</strong> from
            <strong> Brooklyn</strong>.
          </p>

<p>I've been involved in the tech space in NYC for the past several years.</p>
<ul>
  <li>I currently do freelance design and consulting work for a number of websites (dsk and mob).</li>
  <li>I teach and mentor with the online program  <strong>Thinkful</strong>, including creating and hosting a UX/UI webinar.</li>
  <li>I've taught JavaScript at <strong>General Assembly</strong>.</li>
  <li>I was involved with leading the design and front-end development for an early stage education start-up.</li>
</ul>

          {/* <a
            style={styles.link}
            className="link"
            target="_new"
            href="https://github.com/joncancode"
          >

            I code
          </a>
          .{' '}

          <a
            style={styles.link}
            className="link"
            target="_new"
            href="https://behance.net/jonhaines/"
          >

            I design
          </a>
          .{' '}
          <a
            style={styles.link}
            className="link"
            target="_new"
            href="https://www.eventbrite.com/o/thinkful-virtual-17048039731/"
          >

            I teach
          </a>

          .{' '}
          <a
            style={styles.link}
            className="link"
            target="_new"
            href="https://jonathanhaines.smugmug.com/"
          >

            I snap
          </a>
          .{' '} */}
          

        </div>
      </div>
    );
  }
}

export default Home;
