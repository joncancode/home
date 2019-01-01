import React, { Component } from 'react';

export class Blog extends Component {
  render() {
    const styles = {
      main: {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        width: '100%',
        height: '100%',
        lineHeight: '50px',
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
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        marginLeft: '20px'
      }
    };

    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <h2 className="page-title">Some Stuff I've Written...</h2>
          <a
            style={styles.link}
            target="_new"
            href="https://hackernoon.com/the-xhr-history-lesson-you-never-wanted-2c892678f78d"
          >
            The XHR Lesson You Never Wanted
          </a>
          <a
            style={styles.link}
            target="_new"
            href="https://hackernoon.com/terminal-thrillness-adventures-in-the-command-line-e3a1179883bd"
          >
            Terminal Thrillness — Adventures in the Command Line
          </a>
          <a style={styles.link} target="_new" href="https://hackernoon.com/return-of-the-consoles-recreating-pok%C3%A9mon-in-python-94e0d7d860de">
          Return of the Consoles: Recreating Pokémon in Python
              </a>
              <a style={styles.link} target="_new" href="https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065">
              PostgreSQL, Explained With Basketball Players
              </a>
              <a style={styles.link} target="_new" href="https://hackernoon.com/the-simplicity-of-computational-complexity-street-fighter-ii-vs-the-big-o-67786db7653c">
              The Simplicity of Computational Complexity: Street Fighter II VS the Big O
              </a>
              <a style={styles.link} target="_new" href="https://codeburst.io/what-the-database-be60a4a6b903">
              What the Database?
              </a>
        </div>
      </div>
    );
  }
}

export default Blog;
