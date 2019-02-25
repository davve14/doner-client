FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN npm install --unsafe-perm
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 80
CMD [ "npm", "start" ]

