```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>通过css实现类图片轮播</title>
  <style>
    :root {
      --backgroundColor: #e7812d;
      --textColor: white;
      --fontSize: 20px;
    }
    html {
      font-size: var(--fontSize);
    }
    body {
      margin: 0;
    }
    .panels {
      height: 300px;
      overflow: hidden;
      display: flex;
    }
    .panel {
      background: var(--backgroundColor);
      box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
      color: var(--textColor);
      text-align: center;
      transition: 
      font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s ease,
        background 0.8s;
      background-size: cover;
      background-position: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .panel1 { background-image:url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500); }
    .panel2 { background-image:url(https://source.unsplash.com/rFKUFzjPYiQ/1500x1500); }
    .panel3 { background-image:url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d); }
    .panel * {
      margin: 0;
      width: 100%;
      transition: transform 0.5s;
      flex: 1;
    }
    .panel *:first-child { transform: translateY(-100%); }
    .panel *:last-child { transform: translateY(100%); }
    .panel.active {
      flex: 8;
    } 
    .panel.active * {
      transform: translate(0);
      
    }
    .panel p:nth-child(2) {
      font-size: 2em;
    }

  </style>
</head>
<body>
  <div class="panels">
    <div class="panel panel1">
      <p>上主标题</p>
      <p>主标题</p>
      <p>下主标题</p>
    </div>
    <div class="panel panel2">
      <p>上主标题</p>
      <p>主标题</p>
      <p>下主标题</p>
    </div>
    <div class="panel panel3">
      <p>上主标题</p>
      <p>主标题</p>
      <p>下主标题</p>
    </div>
  </div>
  <script>
    const panels = document.querySelectorAll('.panel')
    let length = panels.length
    let panelId = 1
    let timeId

    function handleOpen() {
      let arr = [...this.classList]
      if(arr.indexOf('active') !== -1) {
        return
      } else {
        panels[panelId - 1].classList.remove('active')
        this.classList.add('active')
        panelId = this.classList[1].slice(-1)
      }
    }

    function autoSwitch() {
      timeId = setTimeout(function() {
        panels[panelId - 1].classList.remove('active')
        panelId++
        if(panelId > length) {
          panelId = 1
        }
        panels[panelId - 1].classList.add('active')
        
        autoSwitch()
      }, 3500)
    }
    
    panels[panelId - 1].classList.add('active')

    panels.forEach(panel => panel.addEventListener('click', handleOpen))
    autoSwitch()
  </script>
</body>
</html>
```