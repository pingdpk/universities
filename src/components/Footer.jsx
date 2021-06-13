import React from 'react'
const Footer = (props) => {
    return (
        <div className={props.content.data ? 'footer' : 'footer fixed'}>
            <div>All rights reserved (2021)</div>
        </div>

    )};
export default Footer;