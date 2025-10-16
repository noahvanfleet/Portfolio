# Noah Van Fleet – Portfolio Website

- 🎓 Recent graduate with a degree in Computer Science. Go vols!  

## Portfolio features  

- Interactive and responsive portfolio gallery  
- Project modals with detailed descriptions, images/videos, and tech-stack badges  
- Noah's Ark themed website to curate a unique, playful aesthetic  

## 🛠 Tech Stack

- **Frontend:** React, Next.js, Tailwind CSS, GSAP  
- **Backend:** Next.js, NodeMailer  
- **Deployment:** Docker, GitHub WebHooks, Hetzner dedicated server
- **Version Control:** Git & GitHub  

## Run locally

1. ### Clone the repository:  

    ```bash
    git clone https://github.com/noahvanfleet/portfolio.git
    cd Portfolio
    ```

1. ### Install dependencies:

    ```bash  
    npm i
    ```

1. ### Set environment variables

    You need to set environment variables in order for the contact form to work correctly.
    Uses gmail for smtp, which requires extra steps, which can be found [here](https://www.gmass.co/blog/gmail-smtp/)



    ```bash 
    nano .env

    EMAIL=[your email]
    EMAIL_PASSWORD=[gmail app Password]

    ```

1. ### Run it

    ### Via NPM

    ```bash  
    npm run dev
    ```

    ### Via Docker

    Environment variables can also be set here, with the -e flag.

    ```bash  
    docker build -t portfolio
    docker run -d --name portfolio -p 3000:3000 -e EMAIL=[your email] -e EMAIL_PASSWORD=[Google app password] portfolio:latest
    ```
