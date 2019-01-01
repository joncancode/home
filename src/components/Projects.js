import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        width: '100%',
        height: '100%',
        //lineHeight: '50px',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
        padding: '20px'
      },
      container: {
        textAlign: 'left',
        width: '75%',
        backgroundColor: 'rgba(0,0,100,0.9)',
        margin: 'auto',
        padding: '30px',
        borderRadius: '5%',
        fontSize: '18px',
        color: 'white',
        fontWeight: 'bold'
      },
      link: {
        color: '#ff7417',
        textDecoration: 'none'
      }
    };

    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <h2 className="page-title">What I've Been Working On...</h2>
          <div style={{marginLeft: '30px'}}>
          <h4 style={{ paddingTop: '10px' }}>
            NBA Milestones (the Lebron Point Tracker) 
          </h4>
          <div style={{ paddingBottom: '5px' }}>
            <button style={{ border: '2px solid #6abaef', margin: '3px' }}>
              <a target="_new" href="https://github.com/joncancode/d3-pie">
                Github
              </a>
            </button>
            <button style={{ border: '2px solid #6abaef', margin: '3px' }}>
              <a
                target="_new"
                href="https://pedantic-spence-fb0d84.netlify.com/"
              >
                Demo
              </a>
            </button>
            <p style={{ color: '#ff7417' }}>____________</p>           
          </div>           
          <h4 style={{ paddingTop: '10px' }}>NYKPie</h4>
          <div style={{ paddingBottom: '5px' }}>

            <button style={{ border: '2px solid #6abaef', margin: '3px' }}>
              <a target="_new" href="https://github.com/joncancode/d3-pie">
                Github
              </a>
            </button>
            <button style={{ border: '2px solid #6abaef', margin: '3px' }}>
              <a
                target="_new"
                href="https://pedantic-spence-fb0d84.netlify.com/"
              >
                Demo
              </a>
            </button>
            <p style={{ color: '#ff7417' }}>____________</p>
          </div>
          <h4 style={{ paddingTop: '10px' }}>Pokemon Python</h4>
          <div style={{ paddingBottom: '5px' }}>
            <button style={{ border: '2px solid #6abaef', margin: '3px' }}>
              <a
                target="_new"
                href="https://github.com/joncancode/console-adventure/"
              >
                Github
              </a>
            </button>
            <button style={{ border: '2px solid #6abaef', margin: '3px' }}>
              <a
                target="_new"
                href="https://github.com/joncancode/console-adventure#try-it-yourself"
              >
                Demo it yourself
              </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
