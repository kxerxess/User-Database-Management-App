var del=document.getElementsByClassName('del');
console.log('from js file');
var i=0;
for(i=0;i<del.length;i++){
	let j=i;
	del[i].addEventListener('click',function(event){
		event.preventDefault();
		console.log(del[j]);
		console.log(del[j].href);
		var url=del[j].href;
		document.getElementById('confirm').classList.remove("hide");
		var yes=document.getElementById('yes');
		console.log(url);
		yes.addEventListener('click',function(){
			window.location.assign(url);
		});
		document.getElementById('no').addEventListener('click',function(){
			document.getElementById('confirm').className='hide';
		});
	});
}
