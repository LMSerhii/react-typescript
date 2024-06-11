import React, { FC } from 'react';
import Title from '../components/Title/Title';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import Subtitle from '../components/Subtitle/Subtitle';
import Button from '../components/Button/Button';
import { CardVariant } from '../types';

const CardsPage: FC = () => {
  return (
    <>
      <Title title="Cards Page" />

      <Container>
        <Card
          width="250px"
          height="250px"
          variant={CardVariant.outlined}
          onClick={() => console.log('card 1')}
        >
          <Subtitle text="Card 1" />
          <Button>Buy</Button>
        </Card>
        <Card
          width="250px"
          height="250px"
          variant={CardVariant.primary}
          onClick={() => console.log('card 2')}
        >
          <Subtitle text="Card 2" />
          <Button>Buy</Button>
        </Card>
        <Card
          width="250px"
          height="250px"
          variant={CardVariant.outlined}
          onClick={() => console.log('card 3')}
        >
          <Subtitle text="Card 3" />
          <Button>Buy</Button>
        </Card>
        <Card
          width="250px"
          height="250px"
          variant={CardVariant.primary}
          onClick={() => console.log('card 4')}
        >
          <Subtitle text="Card 4" />
          <Button>Buy</Button>
        </Card>
      </Container>
    </>
  );
};

export default CardsPage;
