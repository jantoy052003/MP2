import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCards from '../../../components/MovieCards'

let active = 1;
let pages = [];
for (let number = 1; number <= 5; number++) {
  pages.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Popular = () => {
  return (
    <div>
      Popular
    </div>
  )
}

export default Popular
