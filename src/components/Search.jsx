import React from 'react';
import styled from 'styled-components'

const SearchContainer = styled.div `
color: ${props => props.theme.accent || 'pink'};
`


const Search = props => {

  return (
    <SearchContainer>
      This is Search Component
    </SearchContainer>
  );
}

export default Search;
