
var d = document.getElementById("d");
var g = document.getElementById("g");
var p = document.getElementById("p");



var de = 1;
var di = 1;
var ge = 1;
var gi = 1;
var r = false;
var t = 0;



var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown",funcion)



function funcion(tecla)
{

  g.style.gridColumnStart = 1;
  g.style.gridRowStart = 1;


  if(t > 0 && de < 4)
  {
    if (tecla.keyCode == teclas.RIGHT)
    {

      de++;
      ge++;
      d.style.gridColumn = de;
      g.style.gridColumnEnd = ge;


    }
  }

  if(t > 0 && de > 1)
  {
    if (tecla.keyCode == teclas.LEFT)
    {
      de--;
      d.style.gridColumn = de;
    }
  }


  if (t > 0 && di < 4)
  {
    if (tecla.keyCode == teclas.DOWN)
    {
      di++;
      gi++
      d.style.gridRow = di;
      g.style.gridRowEnd = gi;

    }
  }

  if (t > 0 && di > 1)
  {
    if (tecla.keyCode == teclas.UP)
    {
      di--;
      d.style.gridRow = di;
    }
  }

  if(gi > 4 && ge > 5)
  {
    p.innerHTML = "terminaste en " + t + " segundos";
    g.style.animationName = "color";


    r = true;
  }

}


setInterval(tiempo,1000);

function tiempo()
{

if(r == false)
{
  t ++;
  p.innerHTML = t;
}


}
