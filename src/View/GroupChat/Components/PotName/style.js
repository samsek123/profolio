export const styles = theme => ({
  nameWrapper: {
    position: 'relative',
    fontSize: 14,
    color: '#848484',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
  potNameWrapper: {
    verticalAlign: 'top',
    width: '100%',
    maxWidth: 50,
  },
  potNameAvatar: {
    [theme.breakpoints.down('md')]: {
      width: 20,
      height: 20,
    },
  },
  genderDot: {
    height: 4,
    width: 4,
    borderRadius: '50%',
    display: 'inline-block',
    position: 'absolute',
    right: -1,
    top: '50%',
    marginTop: '-2px',
  },
  male: {
    backgroundColor: '#A195FF',
  },
  female: {
    backgroundColor: '#FF8E8E',
  },
  sendBarAvatar: {
    border: '5px solid white',
    WebkitBoxShadow: '1px 1px 3px 0px rgba(0,0,0,0.45)',
    MozBoxShadow: '1px 1px 3px 0px rgba(0,0,0,0.45)',
    boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.45)',
  },
});
