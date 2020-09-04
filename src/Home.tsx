import React from 'react';
import logo from './react.svg';
import styled from 'styled-components';
import {Route, Switch, Link} from 'react-router-dom';
import './Home.css';
import {Helmet} from 'react-helmet-async';
const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
`;

class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className="Home">
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home" />
                    <meta name="keywords" content="Home" />
                </Helmet>
                <div>
                    <img src={logo} className="Home-logo" alt="logo" />
                    <h2>
                        Welcome to BBQ<Button>StyledComponent button</Button>
                    </h2>
                    <Link to={'/deep'}>Deep</Link>
                </div>
            </div>
        );
    }
}

export default Home;
