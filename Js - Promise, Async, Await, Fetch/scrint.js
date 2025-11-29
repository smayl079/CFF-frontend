// script.js
const loadBtn = document.getElementById('loadBtn');
const statusEl = document.getElementById('status');
const tbody = document.querySelector('#commentsTable tbody');

loadBtn.addEventListener('click', () => {
  // Əvvəlki table içini təmizləyək
  tbody.innerHTML = '';
  statusEl.textContent = 'Yüklənir...';

  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      if (!response.ok) throw new Error(`Server responded: ${response.status}`);
      return response.json();
    })
    .then(data => {

      if (!Array.isArray(data) || data.length === 0) {
        statusEl.textContent = 'Heç bir data gəlmədi.';
        return;
      }


      const fragment = document.createDocumentFragment();
      data.forEach(comment => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = comment.id ?? '';
        tr.appendChild(tdId);

        const tdPostId = document.createElement('td');
        tdPostId.textContent = comment.postId ?? '';
        tr.appendChild(tdPostId);

        const tdName = document.createElement('td');
        tdName.textContent = comment.name ?? '';
        tr.appendChild(tdName);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = comment.email ?? '';
        tr.appendChild(tdEmail);

        const tdBody = document.createElement('td');
        const pre = document.createElement('pre');
        pre.textContent = comment.body ?? '';
        tdBody.appendChild(pre);
        tr.appendChild(tdBody);

        fragment.appendChild(tr);
      });

      tbody.appendChild(fragment);
      statusEl.textContent = `Uğurla yükləndi — ${data.length} sətr.`;
    })
    .catch(err => {
      console.error(err);
      statusEl.textContent = 'Xəta oldu: ' + err.message;

    });
});
