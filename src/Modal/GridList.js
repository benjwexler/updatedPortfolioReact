import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 450,
    height: 450,
    margin: 0,
  },
  icon: {
    fontSize: 30,
    margin: 10,
    marginTop: 15,
    borderRadius: '50%',
    boxShadow: '0px 0px 5px grey',
    border: '2px solid #a7a7a7',
    cursor: 'pointer',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */




export default function TitlebarGridList() {
  const classes = useStyles();
  const titleData = [
    {
      img: '/pics/BTZ-Drum-Pic.png',
      title: 'BTZ Drum Machine',
      style: { height: '60%', width: '100%', maxWidth: 420, margin: 'auto', border: '1px solid #828282', overflow: 'hidden' },
    }, 
    {
      img: '/pics/mixedByWex.jpg',
      title: 'Music Portfolio Site',
      style: { height: '100%', width: '100%', maxWidth: 270, margin: 'auto', border: '1px solid #828282', overflow: 'hidden' },
    },
    {
      img: '/pics/claPic3.jpg',
      title: 'CLA Admin Pannel',
      style: { height: '60%', width: '100%', maxWidth: 420, margin: 'auto', border: '1px solid #828282', overflow: 'hidden' },
    }, 
  ];

  const [currentItem, setCurrentItem] = useState(0)

  const tile = titleData[currentItem]

  return (
    <div>
      <div className={classes.root}>
        <GridList
          cellHeight={180} className={classes.gridList}
          style={{ margin: 0, marginTop: 60, }}
        >
          {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
          {/* {titleData.map(tile => ( */}
            <GridListTile key={tile.img}
              style={tile.style}
            >
              <img src={tile.img} alt={tile.title}

              />
              <GridListTileBar
                title={tile.title}
                style={{ paddingTop: 20 }}
              // subtitle={<span>by: {tile.author}</span>}
              // actionIcon={
              //   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
              //     <InfoIcon />
              //   </IconButton>
              // }
              />
            </GridListTile>
          {/* ))} */}
        </GridList>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span>
        <ArrowLeft className={classes.icon}
          onClick={() => setCurrentItem(currentItem - 1 === -1 ? titleData.length-1 : currentItem-1)}
        />
        </span>
        <span>
        <ArrowRight className={classes.icon} 
          onClick={() => setCurrentItem(currentItem + 1 === titleData.length ? 0 : currentItem+1)}
        />
        </span>
      </div>
    </div>
  );
}