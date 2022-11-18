import { Router, useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import NewPhotoForm from "../../components/photos/NewPhotoForm";

const NewPhotoPage = () => {
  const roter = useRouter();
  async function addPhotoHandler(enteredPhotoData) {
    const response = await fetch("/api/new-photo", {
      method: "POST",
      body: JSON.stringify(enteredPhotoData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);

    Router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Photo</title>
        <meta
          name="description"
          content="Add your own photos and create amazing networking opportunities."
        />
      </Head>
      <NewPhotoForm onAddPhoto={addPhotoHandler} />;
    </Fragment>
  );
};
export default NewPhotoPage;
