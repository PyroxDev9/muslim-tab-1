import styled from 'styled-components';

const Container = styled.button`
    width: 100%;
    border: 1px solid #333;
    border-radius: .75em;
    padding: .75em;
    background: ${props => props.mode === 'outline' ? 'transparent' : '#333'};
    transition: all ease-in-out .3s;
    width: fit-content;
    block-size: fit-content;
    margin-top: 1em;
    color: ${props => props.mode === 'outline' ? '#333' : '#fff'};
    font-weight: bold
`

export {
    Container
}