import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Img, GridContainer, BlogCard } from './AcomplishmentsStyles';
import { Cert } from '../../constants/constants';


const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <GridContainer>
      {Cert.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
