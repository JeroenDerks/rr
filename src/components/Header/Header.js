import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import { Box } from '@material-ui/core/';

export default function Header({ showCategory, setCategory }) {
  return (
    <>
      <Box py={1}></Box>
      <Logo showCategory={showCategory} setCategory={setCategory} />
      <Box py={1}></Box>
      <Menu showCategory={showCategory} setCategory={setCategory} />
    </>
  );
}
