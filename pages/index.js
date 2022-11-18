import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import PhotoList from "../components/photos/PhotoList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Amals Photos</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React photos!"
        />
      </Head>
      <PhotoList photos={props.photos} />;
    </Fragment>
  );
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
