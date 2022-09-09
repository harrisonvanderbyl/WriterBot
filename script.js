const data = {
  author: {
    name: "Cyber-Diffusion",
    penName: "AI Discord Bot",
    bio: "A discord bot for image generation using Stable Diffusion and much more",
    description: `
Features:
- Decentralised Compute, Open source, and scales with users.

- Free for use

- Upscaling with RealESRGAN

- Max Resolution: 512x1024

- Post Images directly to Twitter

- Img2Img

- Add to your own server for a small donation (1$ on patreon)!
      `,
    image:
      "https://cdn.discordapp.com/attachments/1003896143186493440/1017586854859649065/generation.png",
  },

  artwork: [
    {
      image:
        "https://cdn.discordapp.com/attachments/1003896143186493440/1017589169138171946/generation.png",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/989166996866359330/1017414944536416317/generation.png",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1003896143186493440/1017292576350535690/buffer.png",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/989166996866359330/1016804367078260736/generation.png",
    },
  ],
  links: {
    patreon: "https://www.patreon.com/unexplored_horizons",
    discord: "https://discord.gg/eZqw6gMhf6",
    github: "https://github.com/harrisonvanderbyl/ravenbot-ai",
  },
  background:
    "https://cdn.discordapp.com/attachments/1003896143186493440/1017565354714726471/generation.png",
};

// onload
window.onload = function () {
  // set up the author
  const author = document.getElementById("author");
  author.innerHTML = data.author.name;

  // set up the bio
  const bio = document.getElementById("bio");
  bio.innerHTML = data.author.bio;

  // set up the description
  const description = document.getElementById("description");
  description.innerHTML =
    "<p>" +
    data.author.description
      .split("\n")
      .map(
        (m) =>
          "<div style='margin-top:20px;margin-left:" +
          (m.split("-")[0] ?? "").split(" ").length * 10 +
          "px'>" +
          m +
          "</div>"
      )
      .join("\n") +
    "</p>";

  // set up the pen name
  const penName = document.getElementsByClassName("penName");
  for (let i = 0; i < penName.length; i++) {
    penName[i].innerHTML = data.author.penName;
  }

  // set up the image
  const image = document.getElementsByClassName("profileicon");
  for (let i = 0; i < image.length; i++) {
    image[i].src = data.author.image;
    image[i].href = data.author.image;
  }

  // set up the artwork
  //style="width: 100%;border-radius:50px"
  for (let i = 0; i < data.artwork.length; i++) {
    const art = document.createElement("img");
    art.src = data.artwork[i].image;
    art.style = "width: 100%;border-radius:50px";
    if (data.artwork[i].link) {
      art.style = "width: 100%;border-radius:50px;cursor:pointer;";
      art.onclick = function () {
        window.location.href = data.artwork[i].link;
      };
    }

    const artwork =
      i < data.artwork.length / 2
        ? document.getElementById("images-1")
        : document.getElementById("images-2");
    artwork.appendChild(art);
  }

  // set up the links
  for (let key in data.links) {
    const link = document.getElementsByClassName(key);
    for (let i = 0; i < link.length; i++) {
      link[i].href = data.links[key];
    }
  }

  // set up the background

  const background = document.getElementById("background");
  background.src = data.background;
};
