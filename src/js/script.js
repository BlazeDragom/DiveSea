document.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("mousedown", function (event) {
    const message = document.createElement("span");
    message.textContent = "Пошёл нахуй";
    message.style.position = "absolute";
    message.style.left = `${event.clientX}px`;
    message.style.top = `${event.clientY}px`;
    document.body.appendChild(message);

    const onMouseMove = (moveEvent) => {
        link.style.position = "absolute";
        link.style.left = `${moveEvent.clientX}px`;
        link.style.top = `${moveEvent.clientY}px`;
    };

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.body.removeChild(message);
      },
      { once: true }
    );
  });
});

document.querySelector('.header_btn').addEventListener('click', function(event) {
  const heart = document.createElement('div');
  heart.style.position = 'absolute';
  heart.style.left = `${event.clientX - 12}px`; 
  heart.style.top = `${event.clientY - 12}px`;
  heart.style.width = '24px';
  heart.style.height = '24px';
  heart.style.background = 'red';
  heart.style.borderRadius = '50%';
  heart.innerHTML = '<div style="position: absolute; left: 50%; top: 50%; width: 2px; height: 24px; background: black; transform: translate(-50%, -50%);"></div>';
  document.body.appendChild(heart);

  setTimeout(() => {
    document.body.removeChild(heart);
  }, 1000); 
});






