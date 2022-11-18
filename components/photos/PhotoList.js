import PhotoItem from "./PhotoItem";
import classes from "./PhotoList.module.css";

function PhotoList(props) {
  return (
    <ul className={classes.list}>
      {props.photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          id={photo.id}
          image={photo.image}
          title={photo.title}
          address={photo.address}
        />
      ))}
    </ul>
  );
}

export default PhotoList;
