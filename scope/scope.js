const x = 1;    // This variable is part of the global scope

    function a() {  // This is function a
      const y = 2;  // This variable is part of function a's scope
      output(y);
    }

    function b() {  // This is function b
      const z = 3;  // This variable is a part of function b's scope
      output(z);
    }

    function output(value) {    // This is function output
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = `Value: ${value}`;
    }
    // The output function is always a global function, so can work withing other functions