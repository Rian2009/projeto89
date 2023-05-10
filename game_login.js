function adduse()
{
jogador1_none=document.getElementById("jogador1").value;
jogador2_none=document.getElementById("jogador2").value;
localStorage.setItem("jogador1_none", jogador1_none);
localStorage.setItem("jogador2_none", jogador2_none);
window.location="gamepage.html";
}



