import React from 'react';
import styled from 'styled-components'
import {
  Desktop,
  Phone_Landscape,
  Phone_Portrait,
  Orange,
} from '../../../../DeviceRules';

export default ({ person: { name, img, text, profileSite } }) => (
  <Credit>
    <Image src={img} alt={`loading...`}/>
    <Text_Box>
      <Title>
        <Link href={profileSite}>{name}</Link>
      </Title>
      <Credit_Text>{text}</Credit_Text>
    </Text_Box>
  </Credit>
);


const Credit = styled.div`
  display: grid;
  height: 20vh;
  width: 70vw;
  grid-template-columns: 1fr auto 1fr 6fr;
  grid-template-areas: ". img . textbox";
  margin: 2vh 0;
  @media ${Phone_Portrait}{
    width: 100%;
    display:flex;
    height:25vh;
    margin: 0 0 6vh 0;
    padding: 0 5px;
  }
  @media ${Phone_Landscape}{
    display: flex;
    height:80%;
    margin: 0 0 1vh 0;
  }

`;
const Image = styled.img`
@media ${Desktop}{
      grid-area: img
      height: 100%
      width: 220px
      border-radius: 5px
    }
    @media ${Phone_Portrait}{
      width: 40vw
      height: auto
      margin-top: 5vh
    }
    @media ${Phone_Landscape}{
      height: 100%;
      width: 158px;
    }
`;
const Text_Box = styled.div`
  grid-area: textbox;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1vh;
  @media ${Phone_Portrait}{
    margin-left: 20px;
  }
  @media ${Phone_Landscape}{
    margin-left: 8vw;
  }
`;
const Credit_Text = styled.p`
  grid-area: text;
  flex-grow: 1;
  margin: 3vh 0;
  font-size: 1.5vh;
  font-family: Roboto Condensed;
  @media ${Phone_Portrait}{
    margin: 1vh 0;
    font-size: 0.8rem;
  }
  @media ${Phone_Landscape}{
    font-size:3vh;
  }
`;
const Link = styled.a`
  color: ${Orange};
`;
const Title = styled.h2`
  @media ${Phone_Portrait}{
    font-size: 1.5rem;
  }
`;