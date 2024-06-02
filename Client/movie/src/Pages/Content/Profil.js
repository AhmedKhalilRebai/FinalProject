import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

function Profil() {
    return (
        <Dropdown align="end">
        <Dropdown.Toggle as="div">
          <FaUserCircle size={30} style={{ cursor: 'pointer' }} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#settings">Settings</Dropdown.Item>
          <Dropdown.Item href="#logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default Profil
