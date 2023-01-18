function clock() {
    let time = new Date();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();

   document.getElementById('hrs').innerHTML=hour;
   document.getElementById('min').innerHTML=minute;
   document.getElementById('sec').innerHTML=second;
}
 setInterval(clock,1000)