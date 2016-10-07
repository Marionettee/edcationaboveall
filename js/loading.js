setTimeout(ab, 2000)

function ab() {
	$("#hm").css("display", "block")
}
$(".fakeloader").fakeLoader({
	timeToHide: 2000,
	bgColor: "#3498db",
	spinner: "spinner4"
});