import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <Container>
        <p className="mb-1">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <p className="mb-0">
          Built with React & React-Bootstrap
        </p>
      </Container>
    </footer>
  );
}

export default Footer;