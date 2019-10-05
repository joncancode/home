import React, { Component } from 'react';
import cover_meetup from '../images/cover_meetup.png';
import cover_bronx from '../images/cover_bronx.png';

export class Projects extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Poppins, sans-serif',
        width: '85%',
        lineHeight: '30px',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
        paddingTop: '50px'
      },
      container: {
        // textAlign: 'center',
        width: '85%',
        //backgroundColor: 'rgba(0,0,51,0.9)',
        margin: 'auto',
        paddingBottom: '50px',
        borderRadius: '5%',
        fontSize: '18px',
        color: 'rgba(0,0,55,0.9)',
        fontWeight: 'bold',
        display: 'inline-block'
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

<div style={styles.container}>
  <br></br>

<a href="https://uxplanet.org/meetup-conceptual-rebrand-and-case-study-7076f017a0aa" target="_new" >
          <img 
          style={{ paddingBottom: '35px', textShadow: '5px 10px' }}
          src={cover_meetup} alt="jh" height="200px" width="380px"/>
</a>
<a href="https://joncancode.github.io/bronx_case_study/" target="_new" >
          <img 
          style={{ paddingBottom: '35px' }}
          src={cover_bronx} alt="jh" height="200px" width="380px"/>
          </a>

</div>

        </div>
      </div>
    );
  }
}

export default Projects;
