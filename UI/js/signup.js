function Queue(){
	let users = [];
	this.print = function(){
		return users;			
	};
	this.enqueue = function(element){
		users.push(element);
	};
		
}
let btnregister = document.getElementById('neza');
let btnlst = document.getElementById('lst');
let q = new Queue();
btnregister.addEventListener('click', function(){	
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
	let oname = document.getElementById('oname').value;
	let email = document.getElementById('mail').value;
	let phone = document.getElementById('phone').value;
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let retype = document.getElementById('retype').value;
	if(password !== retype){
		alert('password doesn\'t mach!');
	}else if(password.length < 8){
		alert('password too short!');
	}
	let user={
		fname:fname,
		lname:lname,
		oname:oname,
		email:email,
		phone:phone,
		username:username,
		password:password
	};
	
	q.enqueue(user);
});

btnlst.addEventListener('click',function(){
	console.log(q.print());
});
