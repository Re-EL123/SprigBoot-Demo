/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


async function fetchMessage() {
  try {
    const response = await fetch("/api/hello");
    if (!response.ok) {
      throw new Error("Failed to fetch backend message");
    }
    const text = await response.text();
    document.getElementById("output").innerText = text;
  } catch (err) {
    document.getElementById("output").innerText = "Error: " + err.message;
  }
}
