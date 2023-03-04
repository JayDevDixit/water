k = 0
w = 1
setInterval(()=>{
k = k+w
progress.innerHTML = `${k}%`
if (k==100 | k==0)
w = -1*w
},50)