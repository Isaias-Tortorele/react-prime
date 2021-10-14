import React from 'react';
import { Ionicons, Feather} from '@expo/vector-icons';

import { Container, Title, RateContainer, Rate, ActiveContainer, DetailButton, DeleteButton} from './styles';

function FavoriteItem({ data, deleteMovie, navigattePage }){
  return (
    <Container>
      <Title size={22}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

      <ActiveContainer>
        <DetailButton onPress={ () => navigattePage(data)}>
          <Title size={14}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton onPress={ () => deleteMovie(data.id)}>
          <Feather name="trash" size={24} color="#FFF" />
        </DeleteButton>

      </ActiveContainer>
    </Container>
  );
}

export default FavoriteItem;