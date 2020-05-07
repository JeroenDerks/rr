import { makeStyles } from '@material-ui/core/styles';

export const gridStyle = makeStyles({
  grid: {
    maxWidth: 1200,
  },
  gridItem: {
    transition: 'all .6s ',
    transitionTimingFunction: 'ease',
    cursor: 'pointer',
  },
  greyScale: {
    filter: 'grayscale(70%)',
  },
  image: {
    width: '100%',
  },
  transition: {
    transition: 'all .6s ',
    transitionTimingFunction: 'ease',
  },
  wrapper: {
    transition: 'all .6s ',
    transitionTimingFunction: 'ease',
  },
});
