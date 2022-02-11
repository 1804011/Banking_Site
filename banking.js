function $(str) {
	return document.getElementById(str);
}
function $$(str) {
	return document.querySelector(str);
}
function updateNode(inputNode, addNode, k = 1) {
	let inputValue = parseFloat(inputNode.value);
	let currentValue = parseFloat(addNode.innerText.substr(1));
	currentValue = currentValue + k * inputValue;
	if (currentValue < 0 || isNaN(inputValue)) return false;
	addNode.innerText = `\$ ${currentValue}`;
	return true;
}
$("deposit-btn").onclick = () => {
	updateNode($("add-deposit"), $$("#deposit span:last-child"));
	updateNode($("add-deposit"), $$("#balance span:last-child"));

	$("add-deposit").value = "";
};
$("withdraw-btn").onclick = () => {
	let ok = updateNode($("withdraw-amount"), $$("#balance span:last-child"), -1);
	if (ok) updateNode($("withdraw-amount"), $$("#withdraw span:last-child"), 1);
	$("withdraw-amount").value = "";
};
