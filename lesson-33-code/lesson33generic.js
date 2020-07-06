// geolocation api
var myGeo = navigator.geolocation.getCurrentPosition((position) => {
  var latlng = new google.maps.Latlng(
    position.coords.latitude.position.coords.longitude
  );
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.mapTypeId.TERRAIN,
    disableDefaultUI: true,
  };
  var map = new google.maps.Map(
    document.querySelector("#map_canvas"),
    myOptions
  );
});

var position = navigator.geolocation.getCurrentPosition();
var myLatitude = position.coords.latitude;
var latlng = new google.maps.latlng(
  position.coords.latitude.position.coords.longitude
);

// canvas
d
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
Ball.prototype.draw = () => {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// client side storage api's

localStorage.setItem("myCat", "Tom");
localStorage.getItem("myCat");
localStorage.removeItem("myCat");
//  check for storage availability

function storageAvailable(type) {
  try {
    var storage = window(type);
    x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everyting except firefox
      (e.code === 22 ||
        // firefox
        e.code === 1014 ||
        // test name field too, bcos code might not be present
        // eveyting except firefox
        e.name === "QuotaExceedError" ||
        // firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage.length !== 0
    );
    // acknoledge qutaexceederror only if theres something already stored
  }
}
// we can now implement the following function like this
 if(storageAvailable('localStorage')){
    //  yeah we can use local storage awersomenness
 } else {
    //  too bad no local storage for us
 }
//  you can test for session storage as well, just by putting it as param to the storageAvailable


// HTML5 file apis




// check for support in your browser
if (window.file && window.FileReader && window.FileList && window.Blob) {
    // great success all the file apis are supported
} else {
    alert("the file apis are not fully supported in this browser")
}


// file api demo
//  <script>
    function handleFileSelect(evt){
        var files = evt.target.files //fielist object

        // files is a filelist of file objects, list some ppties

        var output = []

        for(var i = 0,f; f = files[i]; i++){
            output.push('<li><strong>', escape(f.name), '</strong> (',f.type ||
            'n/a', ') - ',f.size, 'bytes, last modified',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>')
        }

        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>'
    }
    document.getElementById('files').addEventListener('change', handleFileSelect)

// </script> 

// drag and drop api

function handleFileSelect(e){
    e.stopPropagation()
    e.preventDefault()

    var files = e.dataTransfer.files //fileist object
    // files is a filelist of file objects . List some ppties

    var output = []
    for(var i = 0, f; f = files[i]; i++){
       output.push("<li><strong>", escape(f.name), '</strong> (', f.type || 'n/a', ') -',
                        f.size, 'bytes, last modified:',
                        f.lastModifiedDate ?
                        f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>')
    }
    document.getElementById('list').innerHTML = "<ul>" + output.join('') + '</ul>'

}

function hadnleDragOver(e){
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy' //explitly show this is a copy
}
// setup the drag and drop listeners

var dropZone = document.getElementById('drop_zone')
dropZone.addEventListener('dragover', hadnleDragOver, false)
dropZone.addEventListener('drop', handleFileSelect, false)


// Reading an uploaded file

function handleFileSelect(e){
    var files = e.target.files //fileiist object
    // loop thru the filelist and render image files as thumbnails
    for(var i = 0,f; f= files[i]; i++){
        // only process image files
        if(!f.type.match('image.*')){
            continue
        }
        var reader = new FileReader()
        // closure to capture the file information
        reader.onload = (
         (theFile) => {
             return function(e) {
                //  render thumbnail
                var span = document.createElement('span')
                span.innerHTML = ['<img class="thumb" src="">', e.taret.result, '"title="', escape(theFile.name), '"/>'].join('')
                document.getElementById('list').insertBefore(span, null)
             }
         }
        )(f)
        reader.readAsDataURL(f)
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false)