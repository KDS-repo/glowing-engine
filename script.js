
window.onload = event => {
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
}
