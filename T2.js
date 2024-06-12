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

  const formData1 = {
      name: name,
      age: age,
      gender: gender,
      birthDate: birthDate,
      image: image,
  };

  localStorage.setItem("formData1", JSON.stringify(formData1));
  console.log(formData1);

  const programmingLanguages = {
      HTML: html,
      CSS: css,
      JS: js
  };

  const formData2 = {
      description: description,
      major: major,
      programmingLanguages: programmingLanguages,
  };

  localStorage.setItem("formData2", JSON.stringify(formData2));
  console.log(formData2);

  const formData3 = {
      siblings: siblings,
      siblingsDesc: siblingsDesc,
  };

  localStorage.setItem("formData3", JSON.stringify(formData3));
  console.log(formData3);
});
