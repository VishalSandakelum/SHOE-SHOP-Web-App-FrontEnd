const inventoryfileInput = document.getElementById('inventory-file-input');
const inventoryimagePreview = document.getElementById('inventory-image-preview');

inventoryfileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    inventoryimagePreview.innerHTML = '';
    inventoryimagePreview.appendChild(img);
    console.log('Image Path:', file.name); // Log image path
  } else {
    const defaultImg = document.createElement('img');
    defaultImg.src = 'default-image.jpg';
    inventoryimagePreview.innerHTML = '';
    inventoryimagePreview.appendChild(defaultImg);
    console.log('No image selected'); // Log when no image is selected
  }
});

inventoryimagePreview.addEventListener('click', function() {
    console.log('clicked')
    inventoryfileInput.click();
});