FROM node:14.17.4 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/frontend-v1/ /usr/share/nginx/html



# docker commands in terminal
# cd frontend-v1
# sudo docker build -t app . 
# sudo docker run -p 8888:80 app        //run app on docker local container


# Azure commands
# az login
# az acr login --name dsfrontendtask
# sudo chmod 666 /var/run/docker.sock    //ONLY run if it fail to login into azure, this command change mode for docker.sock
# az acr update -n dsfrontendtask --admin-enabled=true
# docker ps                              // see local running docker containers
# docker tag app dsfrontendtask.azurecr.io/app   
# docker push dsfrontendtask.azurecr.io/app   

# NOTE: there are some steps to do on azure portal for deployment like container registries and container instances