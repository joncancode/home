import Radium from 'radium';
import React from 'react';

class Button extends React.Component {

   
    render() {
      // Radium extends the style attribute to accept an array. It will merge
      // the styles in order. We use this feature here to apply the primary
      // or warning styles depending on the value of the `kind` prop. Since its
      // all just JavaScript, you can use whatever logic you want to decide which
      // styles are applied (props, state, context, etc).
      return (
        <button
          style={[
            styles.base,
            styles[this.props.kind]
          ]}>
          {this.props.children}
        </button>
      );
    }
  }
   
  Button = Radium(Button);
   
  var styles = {
    base: {
      outline: 'none',
      flex: 1,
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '18px',
   
      ':hover': {
        background: '#6abaef',
        // borderBottom: '3.5px solid orange',
      }
    },
    primary: {
      background: 'transparent',
      // borderBottom: '3.5px solid transparent',
    },
   
  };

  export default Button;