import React, { Component } from 'react';

export class Home extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        width: '100%',
        height: '100%',
        lineHeight: '35px',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
        padding: '20px',
      },
      container: {
        textAlign: 'left',
        width: '75%',
        backgroundColor: 'rgba(0,0,51,0.9)',
        margin: 'auto',
        padding: '20px',
        borderRadius: '5%',
        fontSize: '18px',
        color: 'white',
        fontWeight: 'bold',
      },
      link: {
        color: '#ff7417',
        textDecoration: 'none'
      }
    };

    return (
      <div style={styles.main}>
        <div className="mq" style={styles.container}>
          <h2 className="page-title">Hi,</h2>
          <p>
            I'm
            <strong> Jonathan Haines</strong>, a developer and designer from
            <strong> Brooklyn</strong>,<strong> New York</strong>.
          </p>
          <a
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
            href="https://www.eventbrite.com/o/thinkful-virtual-17048039731/"
          >

            I teach
          </a>
          .{' '}
          <a
            style={styles.link}
            className="link"
            target="_new"
            href="https://medium.com/@jc.haines19/"
          >

            I write
          </a>
          .{' '}
          <a
            style={styles.link}
            className="link"
            target="_new"
            href="https://jonathanhaines.smugmug.com/"
          >

            I photograph
          </a>
          .{' '}
          <p>
            {' '}
            If you want to work with me, find me at
            <strong> jc.haines19@gmail.com</strong>.
          </p>
          <p>
            {' '}
            My resume/CV can be found{' '}
            <a
              style={styles.link}
              className="link"
              target="_new"
              href="https://rebrand.ly/jonhaines-resume"
            >
              here
            </a>
            .
          </p>
          <div style={{ marginTop: '40px' }} />
        </div>
      </div>
    );
  }
}

export default Home;
