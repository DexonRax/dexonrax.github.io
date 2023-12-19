function reverseString(str) {
	    var splitString = str.split("");
	    var reverseArray = splitString.reverse();
	    var joinArray = reverseArray.join("");
	    return joinArray;
	}

function FormatText(str){
	let input_text = document.getElementById("input_text")
	let text_length = input_text.value.length
	let text_until_flip = Math.ceil(text_length / 2)
	let output_h1 = ""
	let output_h2 = ""
	let output_final = []
	for(let i = 0; i<text_length; i++){
		if(i<text_until_flip){
			output_h1 += input_text.value[i]
		}
		else if(i>=text_until_flip){
			output_h2 += input_text.value[i]
		}
	}

	output_final = [output_h1, reverseString(output_h2)]
	return output_final
}

/*function text_changed(){
	let input_text = document.getElementById("input_text")
	let text_length = input_text.value.length
	let text_until_flip = Math.ceil(text_length / 2)

	document.getElementById("text_edit_left").innerHTML = ""
	document.getElementById("text_edit_right").innerHTML = ""

	for(let i = 0; i<text_length; i++){
		if(i<text_until_flip){
			document.getElementById("text_edit_left").innerHTML += input_text.value[i]
		}
		else if(i>=text_until_flip){
			document.getElementById("text_edit_right").innerHTML += input_text.value[i]
		}
	}
	document.getElementById("text_edit_right").innerHTML = reverseString(document.getElementById("text_edit_right").innerHTML);
}*/

function text_changed(){
	const canvas = document.getElementById("image");
	const ctx = canvas.getContext("2d");
	var scale = window.devicePixelRatio;     
    canvas.width = Math.floor(512 * scale); 
    canvas.height = Math.floor(512 * scale); 

	ctx.clearRect(0, 0, 512, 512);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 512, 512);

	//alert(document.getElementById("font_size").value+" "+document.getElementById("font_select").value)

	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.font = document.getElementById("font_size").value+" "+document.getElementById("font_select").value

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var textWidth = ctx.measureText(document.getElementById("input_text").value).width;
    var nonFlippedX = centerX - (textWidth / 4);
    var flippedX = centerX + (textWidth / 4);

	ctx.fillText(FormatText(document.getElementById("input_text").value)[0], nonFlippedX, centerY);
    ctx.scale(-1, 1);
    ctx.fillText(FormatText(document.getElementById("input_text").value)[1], -flippedX, centerY);
    ctx.scale(-1, 1);

}
