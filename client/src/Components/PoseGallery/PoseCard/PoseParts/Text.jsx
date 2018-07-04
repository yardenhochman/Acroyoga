import React from 'react';
import { Desktop, Phone_Portrait } from '../../../../DeviceRules';
import styled from 'styled-components'


const PoseText = ({ poseTitle, subtitle }) => (
		<Details>
			<TextArea>
				<Title>{poseTitle}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</TextArea>
		</Details>
);

export default PoseText;

const Details = styled.div`
  width: 100%;

  @media ${Phone_Portrait}{
    display: grid;
    grid-template-columns: 5vw auto 5vw;
    grid-template-rows: 20% auto;
    grid-template-area: 'heart | text | .|''.|text|.';
  }
`;
const TextArea = styled.div`
  grid-area: textArea;
  grid-row: 2;
  grid-column: 2;
`;
const Title = styled.h1`
  grid-area: title;
  font-family: Special Elite;

  @media ${Phone_Portrait}{
    height: 8vh;
  }
  @media ${Desktop}{
    margin-top: 2vh;
  }
`;
const Subtitle = styled.p`
  font-family: Roboto Condensed;
    grid-area: sub;
    @media ${Phone_Portrait}{
      color: black;
      margin-top: 1vh;
    }
    @media ${Desktop}{
      font-size: 2vh;
    }
`;