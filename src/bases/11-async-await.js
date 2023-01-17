const getImage = async () => {
  try {
    const apiKey = "pvhEzbhMbp4qwYVJdfRKZGd16iv9xiTd";
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await respuesta.json();

    const { url } = data.images.original;

    const img = document.createElement("img");

    img.src = url;

    document.body.append(img);
  } catch (e) {
    console.log(e);
  }
};

getImage();
