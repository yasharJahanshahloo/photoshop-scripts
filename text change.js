
var str = "your list of strings seprated with <,>";
var list = str.split(",");
  




var fileRef = new File("psd file address");
var docRef = app.open(fileRef);

/**
  * Change text content of a specific named Text Layer to a new text string.
  *
  * @param {Object} doc - A reference to the document to change.
  * @param {String} layerName - The name of the Text Layer to change.
  * @param {String} newTextString - New text content for the Text Layer.
  */
function changeTextLayerContent(doc, layerName, newTextString) {
  for (var i = 0, max = doc.layers.length; i < max; i++) {
    var layerRef = doc.layers[i];
    if (layerRef.typename === "ArtLayer") {
      if (layerRef.name === layerName && layerRef.kind === LayerKind.TEXT) {
        layerRef.textItem.contents = newTextString;
		var file = new File("your file name + ".png");
	
		var opts, file;
        opts = new ExportOptionsSaveForWeb();
        opts.format = SaveDocumentType.PNG;
        opts.PNG8 = false;
        opts.quality = 100;
        app.activeDocument.exportDocument(file, ExportType.SAVEFORWEB, opts);
      }
    } else {
      changeTextLayerContent(layerRef, layerName, newTextString);
    }
  }
}



for (var i = 0, max = list.length; i < max; i++){
	changeTextLayerContent(docRef, 'name of text layer to be changed', list[i]);

}

