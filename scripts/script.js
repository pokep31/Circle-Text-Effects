let text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map((char,i) => `<b style="transform:rotate(${i * 7.3}deg)">${char}</b>`).join("");