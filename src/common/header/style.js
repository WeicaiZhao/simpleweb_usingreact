import styled from 'styled-components';
// import logoPic from '../../statics/web-logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({ href: '/'})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px
    height: 56px;
    background-size: contain;
    
`;