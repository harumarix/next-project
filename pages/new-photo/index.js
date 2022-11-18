import { Router, useRouter } from "next/router";
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
  return <NewPhotoForm onAddPhoto={addPhotoHandler} />;
};
export default NewPhotoPage;
