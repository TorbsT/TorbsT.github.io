import React from 'react';
import { Link, Element } from 'react-scroll';
import { List, ListItemButton } from '@mui/material';

export default function ScrollExample() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <nav style={{ width: 200, position: 'fixed', top: 0, left: 0, height: '100vh', backgroundColor: '#f0f0f0' }}>
        <List>
          <ListItemButton component={Link} to="projects" smooth duration={500}>
            Projects
          </ListItemButton>
          <ListItemButton component={Link} to="about" smooth duration={500}>
            About
          </ListItemButton>
        </List>
      </nav>

      {/* Main Content */}
      <div style={{ marginLeft: 220, padding: 20 }}>
        <Element name="projects">
          <section style={{ height: '100vh', backgroundColor: '#e0f7fa' }}>
            <h2>Projects</h2>
          </section>
        </Element>

        <Element name="about">
          <section style={{ height: '100vh', backgroundColor: '#ffe0b2' }}>
            <h2>About</h2>
          </section>
        </Element>
      </div>
    </div>
  );
}
