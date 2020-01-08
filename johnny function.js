function johnny() {
  var code_lines = 99;
  var string1 = 'lines of code in the file';
  var string2 = 'John strikes one out, clears it all out';
  var string3 = 'line of code in the file';
  while ( code_lines > 0) {
    if (code_lines == 1){
      console.log(String(code_lines), string3 + ',', String(code_lines), string3 + ';', string2);
    }
    else {
      console.log(String(code_lines), string1 + ',', String(code_lines), string1 + ';', string2);
    }
    code_lines = code_lines - 1;
  }
}
johnny();

code .
