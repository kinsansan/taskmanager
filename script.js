document.addEventListener("DOMContentLoaded", function () {
	var count=0;
	var ans = document.getElementById("ans");
	var namesort = document.getElementById("namesort");
	var datesort = document.getElementById("datesort");
	var prioritysort = document.getElementById("prioritysort");
	var taskname = new Object();
	var taskdeadline = new Object();
	var taskpriority = new Object();
	var array = new Array();
	var namecount=0;
	var datecount=0;
	var prioritycount=0;

	ans.addEventListener('click',function(){
		var name = document.getElementById('name').value;
		var deadlines = document.getElementById('deadline').value;
		var priority = document.getElementById('priority').value;
		if(name !=""){
			output(name,deadlines,priority);
		}
		else{
			alert("タスク名が空です");
		}
	},false);

	function output(name,deadlines,priority){
		var time = Date.parse(deadlines);
		var deadline = new Date(time);
		array[count]={"name":name,"deadline":deadline,"priority":priority};
		var contents="";
		for (var i=0; i<array.length; i++) {
			contents +="<tr>";
			for(var pos in array[i]){
				if (pos == "deadline") {
					contents +="<td>"+array[i][pos].toLocaleDateString()+"</td>";
				}
				else{
					contents +="<td>"+array[i][pos]+"</td>";
				}
			}
			contents +="</tr>";
		}
		contents="<table border=\"1\"><tr><th>task名</th><th>日付</th><th>優先度</th></tr>"+contents+"</table>";
		document.getElementById("output").innerHTML =contents;
		count++;
	}

	namesort.addEventListener('click',function(){
		if (namecount%2 ==0) {
			array.sort(function(a,b){
				return (a.name < b.name) ? -1 : 1;
			});
		}
		else{
			array.sort(function(a,b){
				return (a.name > b.name) ? -1 : 1;
			});
		}
		var contents="";
		for (var i=0; i<array.length; i++) {
			contents +="<tr>";
			for(var pos in array[i]){
				if (pos == "deadline") {
					contents +="<td>"+array[i][pos].toLocaleDateString()+"</td>";
				}
				else{
					contents +="<td>"+array[i][pos]+"</td>";
				}
			}
			contents +="</tr>";
		}
		namecount++;
		contents="<table border=\"1\"><tr><th>task名</th><th>日付</th><th>優先度</th></tr>"+contents+"</table>";
		document.getElementById("output").innerHTML =contents;
	},false);
	datesort.addEventListener('click',function(){
		if (datecount%2 ==0) {
			array.sort(function(a,b){
				return (a.deadline < b.deadline) ? -1 : 1;
			});
		}
		else{
			array.sort(function(a,b){
				return (a.deadline > b.deadline) ? -1 : 1;
			});
		}
		var contents="";
		for (var i=0; i<array.length; i++) {
			contents +="<tr>";
			for(var pos in array[i]){
				if (pos == "deadline") {
					contents +="<td>"+array[i][pos].toLocaleDateString()+"</td>";
				}
				else{
					contents +="<td>"+array[i][pos]+"</td>";
				}
			}
			contents +="</tr>";
		}
		datecount++;
		contents="<table border=\"1\"><tr><th>task名</th><th>日付</th><th>優先度</th></tr>"+contents+"</table>";
		document.getElementById("output").innerHTML =contents;
	},false);
	prioritysort.addEventListener('click',function(){
		if (prioritycount%2 ==0) {
			array.sort(function(a,b){
				return (a.priority < b.priority) ? -1 : 1;
			});
		}
		else{
			array.sort(function(a,b){
				return (a.priority > b.priority) ? -1 : 1;
			});
		}
		var contents="";
		for (var i=0; i<array.length; i++) {
			contents +="<tr>";
			for(var pos in array[i]){
				if (pos == "deadline") {
					contents +="<td>"+array[i][pos].toLocaleDateString()+"</td>";
				}
				else{
					contents +="<td>"+array[i][pos]+"</td>";
				}
			}
			contents +="</tr>";
		}
		prioritycount++;
		contents="<table border=\"1\"><tr><th>task名</th><th>日付</th><th>優先度</th></tr>"+contents+"</table>";
		document.getElementById("output").innerHTML =contents;
	},false);
});