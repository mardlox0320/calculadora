function coiso(um) {
    document.querySelector('#ovo').value += um
}
 function clean() {
    document.querySelector('#ovo').value = '' 
 }
 function remove() {
   const ovo = document.querySelector('#ovo')
   ovo.value = ovo.value.slice(0, -1)
 }
 function ovu() {
     document.querySelector('#ovo')
     try {
        ovo.value = eval(ovo.value)
     } catch {
        ovo.value = 'error';
        setTimeout(() => {
    ovo.value = "";
  }, 800);
  
     }
     if (ovo.value = undefined) setTimeout(() => {
    ovo.value = "";
  }, 800);
 }