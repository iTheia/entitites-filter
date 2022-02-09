FROM bitnami/node:14 as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN mkdir patches
COPY patches ./patches/
RUN npm install --only=development
COPY . .
RUN npm run build

FROM bitnami/node:14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN mkdir patches
COPY patches ./patches/
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
RUN ls -l
CMD ["node", "dist/main"]
