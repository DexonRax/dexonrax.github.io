function reverseString(str) {
	    var splitString = str.split("");
	    var reverseArray = splitString.reverse();
	    var joinArray = reverseArray.join("");
	    return joinArray;
	}

function text_changed(){
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
}

function change_font(){
	document.getElementById("text_edit_left").style.fontFamily = document.getElementById("font_select").value
	document.getElementById("text_edit_right").style.fontFamily = document.getElementById("font_select").value
}

function change_spacing(){
	document.getElementById("text_edit_left").style.letterSpacing = document.getElementById("letter_spacing").value
	document.getElementById("text_edit_right").style.letterSpacing = document.getElementById("letter_spacing").value
}

function font_size(){
	document.getElementById("text_edit_left").style.fontSize = document.getElementById("font_size").value
	document.getElementById("text_edit_right").style.fontSize = document.getElementById("font_size").value
}
