"use strict"

const processTimeForm = (e) => {
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

	fetch(
		"http://localhost/TimeConverter/convert.php?type=time",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			console.log(result)
		})

	return false
}

const processCircleForm = (e) => {
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

	fetch(
		"http://localhost/TimeConverter/convert.php?type=circle",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			console.log(result)
		})

	return false
}

const processTriangleForm = (e) => {
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

	fetch(
		"http://localhost/TimeConverter/convert.php?type=triangle",
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => {
			console.log(result)
		})

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
