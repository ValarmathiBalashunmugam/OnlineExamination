import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'OnlineExamination';
  constructor(){}
  ngOnInit(){
    var t = 1200000;; 
  var x = setInterval(function() { 
  
    // var now = new Date().getTime(); 
    // var t = deadline - now; 
    t=t-1000;
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("day").innerHTML =days.toString() ; 
    document.getElementById("hour").innerHTML =hours.toString(); 
    document.getElementById("minute").innerHTML = minutes.toString(); 
    document.getElementById("second").innerHTML =seconds.toString(); 
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; } 
    }, 1000); 
  

  }

  



  
  
}
