const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const updateName = () => {
  const trimmedValue = nameInput.value.trim();

  nameOutput.textContent = trimmedValue || 'Anonymous';
};

nameInput.addEventListener('input', updateName);