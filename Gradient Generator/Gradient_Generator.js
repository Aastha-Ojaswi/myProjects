function generateColor(){
  let c1 = document.getElementById("c1").value;
  let c2 = document.getElementById("c2").value;
  let c3 = document.getElementById("c3").value;
  let percent1 = document.getElementById("percent1").value;
  let percent2 = document.getElementById("percent2").value;
  let percent3 = document.getElementById("percent3").value;
  
  percent1 = Number(percent1);
  percent2 = Number(percent2);
  percent3 = Number(percent3);

  if(percent1<percent2 && percent1<percent3){
    if(percent2<percent3){
      document.querySelector(".container").style.background = `linear-gradient(to right, ${c1} ${percent1}, ${c2} ${percent2}, ${c3} ${percent3})`;
    }
    else{
      document.querySelector(".container").style.background = `linear-gradient(to right, ${c1} ${percent1}, ${c3} ${percent3}, ${c2} ${percent2})`;
    }
  }

  if(percent2<percent1 && percent2<percent3){
    if(percent1<percent3){
      document.querySelector(".container").style.background = `linear-gradient(to right, ${c2} ${percent2}, ${c1} ${percent1}, ${c3} ${percent3})`;
    }
    else{
      document.querySelector(".container").style.background = `linear-gradient(to right, ${c2} ${percent2}, ${c3} ${percent3}, ${c1} ${percent1})`;
    }
  }

  if(percent3<percent1 && percent3<percent2){
    if(percent1<percent2){
      document.querySelector(".container").style.background = `linear-gradient(to right, ${c3} ${percent3}, ${c1} ${percent1}, ${c2} ${percent2})`;
    }
    else{
      document.querySelector(".container").style.background = `linear-gradient(to right, ${c3} ${percent3}, ${c2} ${percent2}, ${c1} ${percent1})`;
    }
  }
}

function Reset(){
  let c1 = document.getElementById("c1").value = "";
  let c2 = document.getElementById("c2").value = "";
  let c3 = document.getElementById("c3").value = "";
  let percent1 = document.getElementById("percent1").value ="";
  let percent2 = document.getElementById("percent2").value = "";
  let percent3 = document.getElementById("percent3").value = "";
  document.querySelector(".container").style.background = `#ffff`;
}