FROM mcr.microsoft.com/playwright:v1.39.0-focal

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm install -g allure-commandline --save-dev

ENV ALLURE_RESULTS_DIR=/app/allure-results

ENTRYPOINT ["npx", "cucumber-js"]
