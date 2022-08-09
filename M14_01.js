const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const listNode = xmlDOM.querySelector('list');
const students = listNode.getElementsByTagName('student');

let result = {};

result.list = [];

let i = 0;
for(const student of students) {
    const studentName = student.querySelector('name');
    const lang = studentName.getAttribute('lang');
    const firstName = studentName.querySelector('first');
    const secondName = studentName.querySelector('second');
    const studentAge = student.querySelector('age');
    const studentProf = student.querySelector('prof');

    result.list[i] = {
        name: firstName.textContent + ' ' + secondName.textContent,
        age: studentAge.textContent,
        prof: studentProf.textContent,
        lang: lang,
    }

    i++;
}

console.log('result', JSON.stringify(result));