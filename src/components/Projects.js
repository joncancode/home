import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
        height: '100%',
        lineHeight: '30px',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
        padding: '20px'
      },
      container: {
        textAlign: 'left',
        width: '75%',
        //backgroundColor: 'rgba(0,0,51,0.9)',
        margin: 'auto',
        padding: '20px',
        borderRadius: '5%',
        fontSize: '18px',
        color: 'rgba(0,0,55,0.9)',
        fontWeight: 'bold',
      },
      link: {
        color: '#ff7417',
        textDecoration: 'none',
        display: 'inline-block',
        marginLeft: '30px'
      }
    };

    return (
      <div style={styles.main}>
        <div className="mq" style={styles.container}>
          <h2 className="page-title">What I've Been Working On...</h2>
          <div>
            <h4 style={{ marginLeft: '20px' }}>
              NBA Milestones (the Lebron Point Tracker)
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://github.com/joncancode/nba_milestones"
              >
                Github
              </a>
              
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://joncancode.github.io/nba_milestones"
              >
                Demo
              </a>
            </h4>
            
            <h4 style={{ marginLeft: '20px' }}>
              Pokemon Python
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://github.com/joncancode/console-adventure/"
              >
                Github
              </a>
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://github.com/joncancode/console-adventure#try-it-yourself"
              >
                Demo it yourself
              </a>
            </h4>

            <h4 style={{ marginLeft: '20px' }}>
              When Again?
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://github.com/joncancode/remind-me/"
              >
                Github
              </a>
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://when-did-that-happen.herokuapp.com"
              >
                Demo
              </a>
            </h4>

            <h4 style={{ marginLeft: '20px' }}>
              Note Hero
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://github.com/joncancode/flashcards/"
              >
                Github
              </a>
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://notehero.herokuapp.com"
              >
                Demo 
              </a>
            </h4>
            <h4 style={{ marginLeft: '20px' }}>
              My Rex
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://github.com/joncancode/my-rex/"
              >
                Github
              </a>
              <a
                className="link"
                style={styles.link}
                target="_new"
                href="https://myrex.herokuapp.com/"
              >
                Demo
              </a>
            </h4>


          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
