import { Link } from 'gatsby';
import React from 'react';
import '../styles.scss';

export default ({children}) => (
    <div>
      <div className="toolbar" role="banner">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
      </div>

      <div className="content" role="main">
        {children}
      </div>
    </div>
  )
