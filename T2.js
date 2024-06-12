document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const birthDate = document.getElementById('birthDate').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const major = document.getElementById('major').value;
    const html = document.getElementById('html').checked;
    const css = document.getElementById('css').checked;
    const js = document.getElementById('js').checked;
    const siblings = document.getElementById('siblings').value;
    const siblingsDesc = document.getElementById('siblingsDesc').value;
  
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('birthDate', birthDate);
    localStorage.setItem('image', image);
    localStorage.setItem('description', description);
    localStorage.setItem('major', major);
    localStorage.setItem('html', html);
    localStorage.setItem('css', css);
    localStorage.setItem('js', js);
    localStorage.setItem('siblings', siblings);
    localStorage.setItem('siblingsDesc', siblingsDesc);
  
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Birth Date:", birthDate);
    console.log("Image:", image);
    console.log("Description:", description);
    console.log("Major:", major);
    console.log("HTML:", html);
    console.log("CSS:", css);
    console.log("JS:", js);
    console.log("Siblings Number:", siblings);
    console.log("Description of Siblings:", siblingsDesc);
  });
  