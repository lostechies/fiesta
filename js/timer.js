  var Timer,
    TotalSeconds;
    
  function CreateTimer(TimerID, Time) {
    Time.month = Time.month - 1; //This adjusts for new Date() starting months at 0
    endDate = new Date(Time.year,Time.month,Time.day);
    now = new Date();
    Time = endDate - now;
    if(Time <= 0) {
      Time = 0;
      return; //This stops the timer from being inserted if the time is up.
    } 
  
    Timer = document.getElementById(TimerID);
    TotalSeconds = Math.floor(Time / 1000);
    
    UpdateTimer()
    window.setTimeout('Tick()', 1000);  
  }

  
  function Tick() {
    if (TotalSeconds <= 0) {
      return;
    }
    
    TotalSeconds -= 1;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
  }
  
  function UpdateTimer() {
    var Seconds = TotalSeconds;
        var Days = Math.floor(Seconds / 86400);
        Seconds -= Days * 86400;
        var Hours = Math.floor(Seconds / 3600);
        Seconds -= Hours * (3600);
        var Minutes = Math.floor(Seconds / 60);
        Seconds -= Minutes * (60);

        var TimeStr = '<li><span class="number">' + LeadingZero(Days) + '</span><span>Days</span></li>' + '<li><span class="number">' + LeadingZero(Hours) + '</span><span>Hours</span></li>' + '<li><span class="number">' + LeadingZero(Minutes) + '</span><span>Minutes</span></li>' + '<li><span class="number">' + LeadingZero(Seconds) + '</span><span>Seconds</span></li>'
    
    Timer.innerHTML = TimeStr;
  }
  
  function LeadingZero(Time) {
      return (Time < 10) ? "0" + Time : + Time;
  }

