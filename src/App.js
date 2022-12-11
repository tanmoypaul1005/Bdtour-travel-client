import Footer from "./Page/Footer/Footer";
import TourPackage from "./Page/TourPackage/TourPackage";
// import { imgbbUploader } from "imgbb-uploader";

function App() {
  const submit = (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    console.log("state",image)
    let formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=9660752b6e7f4906c5a6348723119f3b`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())

      .then((result) => {
        if (result.success) {
          const image = result.data.url
          console.log("image", image)
        }
      })
  }

  return (
    <div className="">
      <TourPackage />
      <Footer/>
      {/* <form onSubmit={submit}>
        <input
          className=""
          type="file"
          name="image"
          id="image"
          required
        />
        <input type="submit" value="Submit" />
      </form> */}


    </div>
  );
}

export default App;
