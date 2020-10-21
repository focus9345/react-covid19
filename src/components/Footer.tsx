import * as React from 'react';

function Footer() {
  
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-mutted">
                Copyright © <a href="https://www.connorjoshua.com/">Joshua Connor</a> {new Date().getFullYear()}.
                </span>
            </div>
        </footer>
    );
  }
  export default Footer;