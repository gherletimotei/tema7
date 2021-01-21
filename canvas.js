export let canvas = document.getElementById("myCanvas");
export let ctx = canvas.getContext("2d");
export let x = canvas.width/2;
export let y = canvas.height-30;
export let dx = 2;
export let dy = -2;

export function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
