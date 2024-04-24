document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;

  // 创建标题
  const header = document.createElement('h1');
  header.textContent = 'Dynamic Content';

  // 创建表单
  const form = document.createElement('form');
  form.setAttribute('action', '/submit');
  form.setAttribute('method', 'post');

  // 创建输入框
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name: ';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Email: ';
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');

  // 创建提交按钮
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit');

  // 将元素添加到表单
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitButton);

  // 将表单和标题添加到 body
  body.appendChild(header);
  body.appendChild(form);
});
