document.addEventListener("DOMContentLoaded", () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Juniorcssilva",
      icon: '<i class="fab fa-github"></i>'
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/devjuniorsilva",
      icon: '<i class="fab fa-linkedin"></i>'
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/?next=%2F/",
      icon: '<i class="fab fa-instagram"></i>'
    },
    {
      name: "E-mail",
      url: "mailto:silvio.silvio02@gmail.com",
      icon: '<i class="fas fa-envelope"></i>'
    }
  ];

  const ul = document.getElementById("links");

  links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const spanIcon = document.createElement("span");
    spanIcon.className = "icon";
    spanIcon.innerHTML = link.icon;

    a.appendChild(spanIcon);
    a.appendChild(document.createTextNode(link.name));
    li.appendChild(a);
    ul.appendChild(li);
  });
});
