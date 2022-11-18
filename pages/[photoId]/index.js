import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import PhotoDetails from "../../components/photos/PhotoDetails";

function PhotoDetailsPage(props) {
  console.log(props.photoData);
  return (
    <Fragment>
      <Head>
        <title>{props.photoData.title}</title>
        <meta name="description" content={props.photoData.description} />
      </Head>
      <PhotoDetails
        image={props.photoData.image}
        title={props.photoData.title}
        address={props.photoData.address}
        description={props.photoData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://amal:030196@cluster0.mhuyb.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const photosCollection = db.collection("photos");

  const photos = await photosCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: photos.map((photo) => ({
      params: {
        photoId: photo._id.toString(),
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const photoId = context.params.photoId;

  const client = await MongoClient.connect(
    "mongodb+srv://amal:030196@cluster0.mhuyb.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const photosCollection = db.collection("photos");

  const selectedPhoto = await photosCollection.findOne({
    _id: ObjectId(photoId),
  });

  client.close();

  return {
    props: {
      photoData: {
        id: selectedPhoto._id.toString(),
        title: selectedPhoto.title,
        address: selectedPhoto.address,
        description: selectedPhoto.description,
        image: selectedPhoto.image,
      },
    },
  };
}
export default PhotoDetailsPage;
