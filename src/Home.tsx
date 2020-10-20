import React from 'react';
import logo from './react.svg';
import {Route, Switch, Link} from 'react-router-dom';
import './Home.css';
import {Helmet} from 'react-helmet-async';
import {Box, styled} from 'galaco';
const WebpOp = ({use, src, ...props}: any) => {
    console.log('ddt::props', props);
    //can use webp?
    src = src + '@f_webp,q_50';
    return <Box {...props} src={src} use={use}></Box>;
};

const Img: any = styled(Box)`
    width: 500px;
`;
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
                <Img
                    use={[WebpOp, 'img']}
                    // as="img"
                    src={
                        'https://vrstudio-prod.cdn.bcebos.com/vrstudio-prod/platform/vr-index/news/头图.jpg'
                    }
                ></Img>
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
