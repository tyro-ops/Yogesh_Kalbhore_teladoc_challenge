# Yogesh_Kalbhore_teladoc_challenge

# Teladoc Challenge Automation

This repository contains automation tests for the Teladoc challenge using Playwright, Cucumber, TypeScript, and Docker. This README provides instructions on how to set up the project and run the tests.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Docker](https://www.docker.com/products/docker-desktop) (optional, for Docker setup)
- [Git](https://git-scm.com/) (for version control)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
 git clone https://github.com/yourusername/Yogesh_Kalbhore_teladoc_challenge.git
 cd Yogesh_Kalbhore_teladoc_challenge


### 2. Install Dependencies

Install the necessary dependencies using npm:

npm install


### 3. Setup Environment
If you're using Docker, you can set up the environment by building and running the Docker container. Make sure Docker is installed and running.

# Build the Docker image:

docker build -t teladoc-challenge .


# Run the Docker container:

docker run --rm -it teladoc-challenge


### 4. Run Tests

To run the tests, use the following command:

npx cucumber-js
