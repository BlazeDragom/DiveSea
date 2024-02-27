// Global variables
const imgInputHelper = document.getElementById("add-image");
const imgInputHelperLabel = document.getElementById("add-img-label");
const imgContainer = document.querySelector(".add-image_container");
const imgFiles = [];

const addImgHandler = () => {
  const file = imgInputHelper.files[0];
  if (!file) return;

  // Generate img preview
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const newImg = document.createElement("img");
    newImg.src = reader.result;
    imgContainer.insertBefore(newImg, imgInputHelperLabel);
  };


  // Reset image input
  imgInputHelper.value = "";
  return;
};

const customFormSubmitHandler = (ev) => {
  ev.preventDefault();
  const firstImgInput = document.getElementById("image-input");
  firstImgInput.files = getImgFileList(imgFiles);
  const container = document.getElementById("custom__print-files");
  printFiles(firstImgInput.files, container);
};

imgInputHelper?.addEventListener("change", addImgHandler);