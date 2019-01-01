import ReactGA from 'react-ga';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Parallax from 'react-springy-parallax';
import blueback from './images/blueback.png';

import Button from './components/Button';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-131514420-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const styles = {
      main: {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        height: '100%',
        color: '#6abaef',
        display: 'flex',
        //alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: '18px',
        flexShrink: 1,
        color: '#13284a',
        fontWeight: 'bold',
        fontFamily: 'Menlo-Regular, Menlo, monospace'
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
              onClick={() => this.refs.parallax.scrollTo(3)}
            >
              blog
            </button>
          </Button>
        </div>
        <Parallax horizontal ref="parallax" pages={4}>
          <Parallax.Layer
            offset={0}
            speed={1}
            style={{ width: '100%', 
            //backgroundImage: `url(${blueback})`,
            backgroundRepeat: 'cover',
            backgroundSize: 'contain'
          }}
          />
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ 
              //backgroundImage: `url(${blueback})`,
            backgroundRepeat: 'cover',
            backgroundSize: 'contain'
          }}
          />
          <Parallax.Layer
            offset={2}
            speed={2}
            style={{
              backgroundRepeat: 'cover',
              backgroundSize: 'contain'
            }}
          >
            <Parallax.Layer
              offset={3}
              speed={2}
              style={{
                //backgroundImage: `url(${blueback})`,
                backgroundRepeat: 'cover',
                backgroundSize: 'contain'
              }}
            >
            </Parallax.Layer>
          </Parallax.Layer>
          <Parallax.Layer offset={3} speed={-0.1} style={styles.main} />
          <Parallax.Layer offset={0} speed={2} style={styles.main}>
            <Home />
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={-0.1} style={styles.main}>
            <Projects />
          </Parallax.Layer>

          <Parallax.Layer offset={2} speed={-0.2} style={styles.main}>

          </Parallax.Layer>

          <Parallax.Layer offset={3} speed={-0.2} style={styles.main}>
            <Blog />
          </Parallax.Layer>
          <Parallax.Layer
            offset={4}
            speed={1.5}
            style={styles.main}
            onClick={() => this.refs.parallax.scrollTo(0)}
          />
        </Parallax>
      </div>
    );
  }
}

export default App;
