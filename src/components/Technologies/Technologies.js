import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiEthereum } from 'react-icons/si';
import { GoGraph } from 'react-icons/go';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with technologies including web and mobile development, Data Science and Blockchains.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, HTML <br /> 
            CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Swift, <br />
            Django, Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GoGraph size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with <br />
            Pandas, Numpy <br />
            Sci-kit Learn, TensorFlow 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiEthereum size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchains</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Ethereum, Solidity <br />
            Web3, Smart Contracts
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
