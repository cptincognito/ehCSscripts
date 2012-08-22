// TRACK MATTE MUST BE SET FOR THESE LAYERS BEFORE DUPLICATE
//in current project/composition
//get layer 'mask'
var maskAnim = app.project.item(0).layer(0);
//get layer 'source'
var sourceFootage = app.project.item(0).layer(0).duplicate();
var maxlayers = 256
var frameDur = (1/24);
var lastLayer = sourceFootage;
var lastInpoint = 0;
var curMaskAnim = null;
var curSourceFootage = null;

for (i=0, i< maxlayers, i++) {
	//dup mask to layer (2+i),
	curMaskAnim = maskAnim.duplicate();
	curMaskAnim.name = "maskAnim" + i;
	curMaskAnim.moveAfter(lastLayer);
	lastLayer = curMaskAnim;
	curMaskAnim.inpoint = lastInpoint + frameDur;
	lastPoint = curMaskAnim.inpoint;

	//dup src to layer 3+i
	curSourceFootage = sourceFootage.duplicate();
	curSourceFootage.name = "sourceFootage" + i;
	curSourceFootage.moveAfter(lastLayer);
	lastLayer = curSourceFootage;
	curSourceFootage.inpoint = lastInpoint + frameDur;
	lastPoint = curSourceFootage.inpoint;
	//apply effect extract to mask
	//set extract white point i+1
	//set extract black point i
   	var theExtractor = curMaskAnim("Effects").addProperty("Extract");
  	theExtractor(1).setValue(-.04);
   	theExtractor(2).setValue(4);
   	theExtractor(3).setValue(1);
   	theExtractor(4).setValue(.55);
 	// OPTIONAL SET SOFTNESS
}

