window.addEventListener("load", event => {
	let inpt = document.getElementById("answer")
	let prompt = document.getElementById("prompt")
	let results = document.getElementById("results")
	
	let table = [5, 8, 11, 17, 25, 35]
	let product = 0
	let equationString = ""
	function newNumbers(){
		let first = table[Math.floor(Math.random()*(6-0)+0)]
		let second = Math.floor(Math.random()*(21-1)+1)
		equationString = first.toString() + 'x' + second.toString() + '='
		prompt.innerHTML = equationString
		inpt.value = ""
		product = first*second
	}
	
	newNumbers()
	
	inpt.addEventListener("keydown", event => {
		if (event.key == "Enter"){
			let answer = inpt.value
			//printing the output
			let newline = document.createElement("tr")
			let equation = document.createElement("td")
			let newcontent = document.createTextNode(equationString + answer)
			equation.appendChild(newcontent)
			if (product == parseInt(answer))
				equation.classList.add("correct")
			else
				equation.classList.add("wrong")
			let corr = document.createElement("td")
			newcontent = document.createTextNode(product.toString())
			corr.appendChild(newcontent)
			newline.appendChild(equation)
			newline.appendChild(corr)
			results.prepend(newline)
			newNumbers()
		}
	});
})

window.addEventListener("load", event => {
	let timer = document.getElementById("timer")
	let button_ss = document.getElementById("button_ss")
	let button_reset = document.getElementById("button_reset")
	//true means timer is not running, the button must start it
	//false means timer is running, the button must stop it
	let button_state = true
	let time_elapsed = 0
	let time = 0
	let x = null
	
	button_ss.addEventListener("click", event => {
		if(button_state) {
			start = performance.now() - time_elapsed
			function timer_func() {
				time = performance.now() - start
				let seconds = Math.floor(time/1000)
				let miliseconds = Math.floor(time-seconds*1000)
				let minutes = Math.floor(seconds/60)
				seconds = Math.floor(seconds - minutes*60)
				timer.innerHTML = minutes + ":" + seconds + ":" + miliseconds
				console.log("hi")
			}
			x = setInterval(timer_func, 10);
			button_state = false
		} else {
			time_elapsed = time
			clearInterval(x)
			button_state = true
		}
	})
	
	button_reset.addEventListener("click", event => {
		time_elapsed = 0
		clearInterval(x)
		timer.innerHTML = "0:0:0"
		button_state = true
	})
})
