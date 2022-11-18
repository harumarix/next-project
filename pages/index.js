import { MongoClient } from "mongodb";
import PhotoList from "../components/photos/PhotoList";

const HomePage = (props) => {
  return <PhotoList photos={props.photos} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://amal:030196@cluster0.mhuyb.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const photosCollection = db.collection("photos");

  const photos = await photosCollection.find().toArray();

  client.close();

  return {
    props: {
      photos: photos.map((photo) => ({
        title: photo.title,
        address: photo.address,
        image: photo.image,
        description: photo.description,
        id: photo._id.toString(),
      })),
    },
  };
}
export default HomePage;
