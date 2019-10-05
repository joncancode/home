import React, { Component } from 'react';
import cover_meetup from '../images/cover_meetup.png';
import cover_bronx from '../images/cover_bronx.png';

export class Projects extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
        //backgroundColor: 'rgba(19, 40, 74,0.2)',
        paddingTop: '50px'
      },
      container: {
        // textAlign: 'center',
        width: '100%',
        //backgroundColor: 'rgba(0,0,51,0.9)',
        margin: 'auto',
        paddingTop: '7px',
        paddingBottom: '50px',
        borderRadius: '5%',
        color: 'rgba(0,0,55,0.9)',
        fontWeight: 'bold',
        display: 'inline-block'
        
      },
      link: {
        color: '#ff7417',
        textDecoration: 'none',
        display: 'inline-block',
        paddingTop: '15px'
      },

      cover_link: {
        padding: '35px',
      }
    };

    return (
      <div style={styles.main}>
        <div className="mq" style={styles.container}>

<div style={styles.container}>

  {/* https://uxplanet.org/meetup-conceptual-rebrand-and-case-study-7076f017a0aa */}
<a href="
http://rebrand.ly/meetup_case_study
" target="_new"  style={styles.cover_link}> 
          <img 
          src={cover_meetup} alt="jh" height="220px" width="400px"/>
</a>

{/* https://joncancode.github.io/bronx_case_study/ */}
<a href="http://rebrand.ly/bronx_case_study/" style={styles.cover_link} >
          <img 
          src={cover_bronx} alt="jh" height="220px" width="400px"/>
          </a><br></br>
         <h3> More at <a style={styles.link} target="_new" href="//behance.net/jonhaines">
            Behance
          </a></h3>
</div>

        </div>
      </div>
    );
  }
}

export default Projects;
