import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => (
  <>
    <h1>Ошибка! Неверный адрес!</h1>
    <Link to="/">Вернуться...</Link>
  </>
);

export default ErrorPage;
