var bearerToken = localStorage.getItem('authToken');

function showAlert(iconType,titleMessage,textMessage){
    Swal.fire({
        icon: iconType,
        title: titleMessage,
        text: textMessage,
    });
}

function formatDate(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}

function Base64FileToNormalFile(imgElement){
    if (imgElement) {
      let base64String = imgElement.src;
  
      function base64ToBlob(base64, mimeType) {
          let byteString = atob(base64.split(',')[1]);
          let arrayBuffer = new ArrayBuffer(byteString.length);
          let uint8Array = new Uint8Array(arrayBuffer);
          for (let i = 0; i < byteString.length; i++) {
              uint8Array[i] = byteString.charCodeAt(i);
          }
          return new Blob([uint8Array], { type: mimeType });
      }
  
      let mimeType = base64String.match(/data:(.*);base64,/)[1];
      let blob = base64ToBlob(base64String, mimeType);
  
      let file = new File([blob], 'image.png', { type: mimeType });
      let dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      
      return dataTransfer.files;
    } else {
      console.log('Image element not found');
    }
  }