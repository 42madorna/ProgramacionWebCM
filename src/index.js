"use strict"

const setError = (error) => {
	if (!error) return
	const div__error = document.getElementById("div__error")
	div__error.innerHTML = `<p class="error">${error}</p>`
	setInterval(() => {
		div__error.innerHTML = ""
	}, 5000)
}

const processTimeForm = async (e) => {
	if (e.preventDefault) e.preventDefault()

	const div__error = document.getElementById("div__error")

	const formData = {}

	formData.seconds = document.getElementById("seconds").value.trim()

	if (!formData.seconds) return (div__error.innerHTML = "Ta vacio")
	if (isNaN(formData.seconds))
		return (div__error.innerHTML = "Numeric values only")

	const headers = new Headers()
	headers.append("Content-Type", "application/x-www-form-urlencoded")

	const urlencoded = new URLSearchParams()
	urlencoded.append("seconds", formData.seconds)

	const requestOptions = {
		method: "POST",
		headers,
		body: urlencoded,
	}

	try {
		const request = await fetch(
			"https://calculatron.adornapps.com/convert.php?type=time",
			requestOptions
		)
		if (request.status == 200) {
			const result = await request.json()
			console.log(result)
			const div__result_time = document.getElementById("div__result_time")
			div__result_time.innerHTML = `<p>Seconds: ${result.seconds}</p>`
			div__result_time.innerHTML += `<p>Minutes: ${result.minutes}</p>`
			div__result_time.innerHTML += `<p>Hours: ${result.hours}</p>`
			div__result_time.innerHTML += `<p>Days: ${result.days}</p>`
			return false
		}
		const result = await request.json()
		setError(result.error)
	} catch (e) {
		console.error(e)
	}

	return false
}

const processCircleForm = async (e) => {
	if (e.preventDefault) e.preventDefault()

	const div__error = document.getElementById("div__error")

	const formData = {}

	formData.radius = document.getElementById("radius").value.trim()

	if (!formData.radius) return (div__error.innerHTML = "Ta vacio")
	if (isNaN(formData.radius))
		return (div__error.innerHTML = "Numeric values only")

	const headers = new Headers()
	headers.append("Content-Type", "application/x-www-form-urlencoded")

	const urlencoded = new URLSearchParams()
	urlencoded.append("radius", formData.radius)

	const requestOptions = {
		method: "POST",
		headers,
		body: urlencoded,
	}

	try {
		const request = await fetch(
			"https://calculatron.adornapps.com/convert.php?type=circle",
			requestOptions
		)
		if (request.status == 200) {
			const result = await request.json()
			console.log(result)
			const div__result_circle =
				document.getElementById("div__result_circle")
			div__result_circle.innerHTML = `<p>Area: ${result.area}</p>`
			div__result_circle.innerHTML += `<p>Perimeter: ${result.length}</p>`
			return false
		}
		const result = await request.json()
		setError(result.error)
	} catch (e) {
		console.error(e)
	}

	return false
}

const processTriangleForm = async (e) => {
	if (e.preventDefault) e.preventDefault()

	const div__error = document.getElementById("div__error")

	const formData = {}

	formData.side1 = document.getElementById("side1").value.trim()
	formData.side2 = document.getElementById("side2").value.trim()
	formData.side3 = document.getElementById("side3").value.trim()

	if (!formData.side1) return (div__error.innerHTML = "Ta vacio")
	if (isNaN(formData.side1))
		return (div__error.innerHTML = "Numeric values only")

	const headers = new Headers()
	headers.append("Content-Type", "application/x-www-form-urlencoded")

	const urlencoded = new URLSearchParams()
	urlencoded.append("side1", formData.side1)
	urlencoded.append("side2", formData.side2)
	urlencoded.append("side3", formData.side3)

	const requestOptions = {
		method: "POST",
		headers,
		body: urlencoded,
	}

	try {
		const request = await fetch(
			"https://calculatron.adornapps.com/convert.php?type=triangle",
			requestOptions
		)
		if (request.status == 200) {
			const result = await request.json()
			console.log(result)
			const div__result_triangle = document.getElementById(
				"div__result_triangle"
			)
			div__result_triangle.innerHTML = `<p>Area: ${result.area}</p>`
			div__result_triangle.innerHTML += `<p>Perimeter: ${result.length}</p>`
			return false
		}
		const result = await request.json()
		setError(result.error)
	} catch (e) {
		console.error(e)
	}

	return false
}

window.addEventListener("load", () => {
	const timeForm = document.getElementById("form__time")
	const triangleForm = document.getElementById("form__triangle")
	const circleForm = document.getElementById("form__circle")
	if (timeForm.attachEvent) {
		timeForm.attachEvent("submit", processTimeForm)
	} else {
		timeForm.addEventListener("submit", processTimeForm)
	}
	if (circleForm.attachEvent) {
		circleForm.attachEvent("submit", processCircleForm)
	} else {
		circleForm.addEventListener("submit", processCircleForm)
	}
	if (triangleForm.attachEvent) {
		triangleForm.attachEvent("submit", processTriangleForm)
	} else {
		triangleForm.addEventListener("submit", processTriangleForm)
	}
})
