var click = 0;
        function ClickCounter()
        {
          click++; 
          document.getElementById('count').innerHTML = click;
        }
        function ClickCounterR()
        {
          click--; 
          document.getElementById('count').innerHTML = click;
        }