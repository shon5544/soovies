import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { trimText } from "../Utilities";
import { TouchableOpacity } from "react-native";
import { formatDate } from "../Utilities";

const Container = styled.View`
  padding: 0px 25px;
  margin-top: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
const Data = styled.View`
  width: 70%;
  margin-left: 15px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Overview = styled.Text`
  color: white;
`;

const ReleaseDate = styled.Text`
  color: rgb(210, 210, 210);
  margin-bottom: 7px;
  margin-top: 3px;
  font-weight: 500;
  font-size: 12px;
`;

const Horizontal = ({ id, title, overview, poster, releaseDate }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 15)}</Title>
        {releaseDate ? <ReleaseDate>개봉일: {releaseDate}</ReleaseDate> : null}
        <Overview>{trimText(overview, 110)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
};

export default Horizontal;
