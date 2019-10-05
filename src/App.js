import ReactGA from 'react-ga';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Parallax from 'react-springy-parallax';
import clouds from './images/clouds.png';

import Button from './components/Button';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-131514420-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const styles = {
      main: {
        fontFamily: 'Be Vietnam, sans-serif',
        fontSize: 14,
        //height: '100%',
        color: '#6abaef',
        display: 'flex',
        //alignItems: 'center',
        justifyContent: 'center'
      },
      buttonContainer: {
        width: '100%',
        display: 'flex',
        borderBottom: '3.5px solid orange'
      },
      button: {
        height: '25px',
        width: '100%',
        outline: 'none',
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        flexShrink: 1,
        color: '#ff7417',
        fontWeight: 'bold',
        fontFamily: 'Poppins, sans-serif',
      }
    };
    
    return (
      <div className="App">
        <NavBar />
        <div style={styles.buttonContainer}>
          <Button kind="primary">
            <button
              className="button"
              style={styles.button}
              onClick={() => this.refs.parallax.scrollTo(0)}
            >
              about
            </button>
          </Button>
          <Button kind="primary">
            <button
              className="button"
              style={styles.button}
              onClick={() => this.refs.parallax.scrollTo(1)}
            >
              projects
            </button>
          </Button>
          <Button kind="primary">
            <button
              className="button"
              style={styles.button}
              onClick={() => this.refs.parallax.scrollTo(4)}
            >
              contact
            </button>
          </Button>
        </div>

        {/* <Home />


            <Projects />



            <Blog /> */}

        <Parallax 
        style={{
          overflowY: 'hidden'
        }}
        ref="parallax" pages={4}>
          <Parallax.Layer
            offset={0}
            speed={1}
            style={{
              width: '100%',
              height: '50%',
              backgroundImage: `url(${clouds})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'stretch',
            }}
          />
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{
             backgroundImage: `url(${clouds})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'stretch',
            }}
          />

          <Parallax.Layer
            offset={3}
            speed={2}
            style={{
              backgroundImage: `url(${clouds})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'stretch'
            }}
          />

  
          <Parallax.Layer offset={0} speed={1} style={styles.main}>
            <Home />
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={-0.1} style={styles.main}>
            <Projects />
          </Parallax.Layer>

          <Parallax.Layer offset={2} speed={-0.2} style={styles.main} />

          <Parallax.Layer offset={3} speed={-0.2} style={styles.main}>
            <Contact />
          </Parallax.Layer>

        </Parallax>
      </div>
    );
  }
}

export default App;
