import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
        height: '120%',
        lineHeight: '35px',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
        paddingTop: '100px'
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


        </div>
      </div>
    );
  }
}

export default Contact;
