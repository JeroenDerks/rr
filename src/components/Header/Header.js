import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import { Box } from '@material-ui/core/';

export default function Header() {
  return (
    <>
      <Box py={1}></Box>
      <Logo />
      <Box py={1}></Box>
      <Menu />
    </>
  );
}
