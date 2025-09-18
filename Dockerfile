FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* yarn.lock* package-lock.json* ./
RUN if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile;   elif [ -f yarn.lock ]; then yarn --frozen-lockfile;   elif [ -f package-lock.json ]; then npm ci;   else npm i; fi
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
