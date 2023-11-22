FROM node:20.9.0 as stage1
WORKDIR /cloud-com-app
COPY package.json ./
RUN npm install

FROM node:20.9.0 as stage2
WORKDIR /cloud-com-app
COPY . .
COPY --from=stage1 /cloud-com-app/node_modules ./node_modules
RUN npm run build
RUN npm run build --prod

FROM node:20.9.0 as final
WORKDIR /cloud-com-app
ENV NODE_ENV production
COPY --from=stage2 /node_modules ./

EXPOSE 4200
CMD ["ng","serve"]


