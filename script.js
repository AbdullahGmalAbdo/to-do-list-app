var notesArray = [];
function Add() {
	var notes = document.getElementById('input').value;
	notesArray.push(notes);
	document.getElementById('input').value = '';
	view();
}
function view() {
	var results = '';
	var count = notesArray.length;
	for (var i = 0; i < count; i++) {
		results +=
			'<li>' +
			notesArray[i] +
			"<span> <i onclick='chang()' style='margin-right:25px;' class='fa-solid fa-star'></i><i onclick='Edit(" +
			i +
			")'style='margin-right:25px;' class='fa-sharp fa-solid fa-pen-to-square'></i><i onclick='del(" +
			i +
			")' class='fa-sharp fa-solid fa-trash'></i></span> </li>";
	}
	document.getElementById('notess').innerHTML = results;
}
function del(index) {
	notesArray.splice(index, 1);
	view();
}
function Edit(index) {
	document.getElementById('input').value = notesArray[index];
	document.getElementById('btn1').style.display = 'none';
	document.getElementById('btn2').style.display = 'inline-block';
	document.getElementById('input2').value = index;
}
function update() {
	var newValue = document.getElementById('input2').value;
	var oldValue = document.getElementById('input').value;
	notesArray[newValue] = oldValue;
	view();
	document.getElementById('btn1').style.display = 'inline-block';
	document.getElementById('btn2').style.display = 'none';
	document.getElementById('input').value = '';
}
