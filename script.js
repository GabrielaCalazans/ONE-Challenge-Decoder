const	textarea = document.querySelector(".textArea");
const	message = document.querySelector(".message");
const	textInput = document.querySelector("#text");

textarea.addEventListener("paste", function () {
	const regex = /^[0-9a-z\s]+$/;
	const self = this;

	setTimeout(function() {
		const text = self.value;

		if (!regex.test(text)) {
			self.value = "";
			alert(`Insert only lowercase letters. Do not insert special characters or accented letters.`);
		}
	}, 500);
});

textInput.addEventListener("keypress", function(c) {
	if (!checkChar(c)) {
		c.preventDefault();
		alert(`Insert only lowercase letters. Do not insert special characters or accented letters.`);
	}
});

function	checkChar(c) {
	const	char = String.fromCharCode(c.keyCode);
	const	pattern = /^[0-9a-z\s]+$/;

	if (char.match(pattern)) {
		console.log(char);
		console.log(c.keyCode);
		return true;
	}
}

function	btnEncrypt() {
	const	encryptedText = encrypt(textarea.value);
	message.value = encryptedText;
	textarea.value = "";

}

function	btnDecrypt() {
	const	encryptedText = decrypt(textarea.value);
	message.value = encryptedText;
	textarea.value = "";
}

function	btnCopy() {
	let copyText = document.getElementById("message");
	copyText.select();
	copyText.setSelectionRange(0, 99999);

	document.execCommand("copy");
	alert(`Text copied.`);
}

function encrypt(string) {
	let	matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	result = string.toLowerCase();

	for (i = 0; i < matrix.length; i++) {
		if (result.includes(matrix[i][0])) {
			result = result.replaceAll(matrix[i][0], matrix[i][1])
		}
	}
	return (result);
}

function	decrypt(string) {
	let	result = string.toLowerCase()

	if (result.includes("enter")) {
		result = result.replaceAll("enter", "e");
	}
	if (result.includes("imes")) {
		result = result.replaceAll("imes", "i");
	}
	if (result.includes("ai")) {
		result = result.replaceAll("ai", "a");
	}
	if (result.includes("ober")) {
		result = result.replaceAll("ober", "o");
	}
	if (result.includes("ufat")) {
		result = result.replaceAll("ufat", "u");
	}
	return result;
}
