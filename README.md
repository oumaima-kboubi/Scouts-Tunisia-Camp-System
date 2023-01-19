# Scouts-Tunisia-Camp-System 🏕️
<div id="here"></div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Architecture🧱">Architecture</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#containerization-solution">Containerization Solution</a></li>
        <li><a href="#orchestration-solution">Orchestration Solution</a></li>
        <li><a href="#provisioning-solution">Provisioning Solution</a></li>
        <li><a href="#monitoring-solution">Monitoring Solutions</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#Devops">Devops</a>
      <ul>
        <li><a href="#observability">Observability</a></li>
        <li><a href="#automation">Automation</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#ci-pipeline">CI pipeline</a></li>
    <li><a href="#The App frontend Overview💻">The App frontend Overview</a></li>
    <li><a href="#Contact 📞">Contact</a></li>
  </ol>
</details>

## About this project 🤔
This project is part of **DevOps Lab** for the GL5 DevOps field. We are meant to create a distributed application, then use it with different tools to put to real field different DevOps concepts.

**Scouts Tunisia Camp System** is an application that offers you a safe space to share your memories in your scouting adventures & camps and explore & like other's memories. It's a Frontend/Backend application with basic CRUD features and a DB connection.

You can access the **Memory Space** [here](http://4.211.64.22/register) 🥳

It uses the **monorepo** strategy ✅:    

1- ⚡ **front-service/tunisian-scouts-system-app** : The frontend application that will be exposed to the users.   
2- ⚡ **auth-service**: a service that handles authentification and users. 
3- ⚡ **reservation-service**: the core of the application (CRUD functions).  
4- ⚡ **infrastructure**: diffrent files to prepare the deployment of the app infra and the app setup.   
5- ⚡ **terraform-microstacks**: terraform files to initiate the infrastructure of the project.  

<p align="right">(<a href="#here"> Go to the 🔝</a>)</p>

### Architecture🧱

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/archi3.png)

### Built With 🛠️

* [NodeJS](https://nodejs.org/en/about/), As an asynchronous event-driven JavaScript runtime framework for building server-side applications.
* [ExpressJS](https://expressjs.com/fr/), A minimalist and flexible Node.js web application infrastructure.
* [Angular](https://angular.io), A component-based framework for building scalable web applications.
* [Atlas MongoDB](https://www.mongodb.com/docs/atlas/getting-started/), A fully-managed cloud database that handles all the deploying, managing, and healing DB deployments on the Azure cloud service provider.
* [NPM](https://www.npmjs.com/) A package manager.
* [HELM](https://helm.sh) A package manager for Kubernetes.


### Containerization Solution 🛢️
* [Docker](https://www.docker.com/), a solution for building,sharing and running application images.

### Orchestration Solution 🎵
* [Kubernetes](https://kubernetes.io)  a solution for orchestrating containers.

### Provisioning Solution ☁️
* [Terraform](https://www.terraform.io/), a solution for provisioning, changing, and versioning resources on any environment.

### Monitoring Solution 👀
* [Prometheus](https://prometheus.io) An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.
* [Grafana](https://grafana.com) Grafana is the open source analytics & monitoring solution for every database.
* [DataDog](https://www.datadoghq.com) Datadog is a monitoring and analytics tool that can be used to determine performance metrics as well as event monitoring for infrastructure and cloud services.
* [ArgoCd](https://argo-cd.readthedocs.io/en/stable/) declarative, GitOps continuous delivery tool for Kubernetes.


<p align="right">(<a href="#here"> Go to the 🔝</a>)</p>


## Getting Started 🎉

In order to run this project and extend its functionalities you need to follow some few steps : 

### Prerequisites 🧷

* Make sure that Node.js (>= 10.13.0) is installed on your operating system. ( [Download Here](https://nodejs.org/en/download/))
* Make sure that Docker is installed.
* Make sure that Helm and terraform are installed.

### Installation 🔧

1. Clone the repo
   ```sh
   git clone https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System.git
   ```
##### If you want to build on top of the project   

2. Install NPM packages under each project
   ```sh
   npm install
   ```
2. 1- Add a **.env** file for required projects
   ```sh
   #AUTH-SERVICE
   MONGO_URI="MongoDb connection string" # for auth-service
   APP_PORT=3001
   TOKEN_KEY="whatever you choose"   # for the JWT Token
   
   #RESERVATION-SERVICE
   MONGO_URI="MongoDb connection string" # for reservation-service
   APP_PORT=3002
   ...
   ```
 2. 2- run all projects, ensure that all ports are well set and enjoy!   
 
##### Or if you want to use docker   
 
 3. make sure you have docker installed.
 
 3. 1- pull the images : 
 ``` sh
 docker pull oumaimakboubi/ms-auth:latest # auth-service
 docker pull oumaimakboubi/ms-reservation:latest # reservation-service
 docker pull oumaimakboubi/ms-front:latest # front-service
 ```
 
 3. 2- run the following docker run command:  
 ``` sh
 sudo docker run -d -p 3001:3001 --name ms-auth oumaimakboubi/ms-auth:latest
 sudo docker run -d -p 3002:3002 --name ms-auth oumaimakboubi/ms-reservation:latest
 sudo docker run -d -p 4200:4200 --name ms-auth oumaimakboubi/ms-front:latest
 ```
##### Or if you want to use terraform and helm   

4. make sure you have terraform and helm installed.   

4.1 make sure you have an azure account and a valid connection   
4.2 run the following terrafom commands in **each microstack**:   
 ``` sh
 terraform init
 terraform apply
 ```
 
<p align="right">(<a href="#here"> Go to the 🔝</a>)</p>

## Devops  ♾️

This project implement the principles of observability, automation and deployment like so:   

### Observabalitiy 👀    

#### *1- Metrics*  

I used `prometheus` and and `prom-client` in NodeJS  to expose  http metrics (number of total requests ... ).

**Business logic metrics** : i used business related metrcis which presents a general statistics on the App (number of successful login requests, number of added memory articles ..)

⚡First Of all every service has its own metrics routes:

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/auth%20metrics.png)

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/res%20metrics.png)

⚡We can use more sophisticated tools like Prometheus & Grafana Dashboarding tool:

* Prometheus is scrapping all the pods

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/prometheus.png)

* Grafana Dashboarding for the *business metrics* and some other *general metrics*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/business%20metrics.png)

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/general%20statics.png)


#### *2- Logs*

I used the implemented `Logger` logic in NodeJS  and just added a request id , a timestamp of the request as well as different levels of logs. All the structured requests are gathered by *DataDog* 

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/datadog1.png)

* A structured requests is formated into a JSON document according to the labels specified in its implementation.

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/datadog2.png)

### Automation ⚡

####  Microstacks  

The goal of microstacks is to create a well isolated and maintainable infrastructure layers.   

1. **First Stack**: This stack is dedicated to the kubernetes cluster provisioning.

2. **Second Stack**: this stack takes care of creating the infrastructure for this project.

3. **Third Stack**: This section takes care of installing ingress-controller in the cluster

4. **Fourth Stack**: Setting up observability layer in the cluster

* The following is the resource groupe overview: *kubernetes cluster + a container to persist the TF State*

##### PS ( the cluster and the backend are in diffrent regions because of subscription limit )

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/azure2.png)


![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/blob%20container%20TFState%20files.png)


### Deployment ☁️

####  YAML files    

Each of the services has its own YAML files in an ordred way    

1. **Deployment** we can add arbitrary labels by chnaging the ```values.yaml``` file in this section
```
labelsAuth: #auth-service
  app: ms-auth
  env: production
labelsRes:  #reservation-service
  app: ms-reservation
  env: production
labelsFront: #front-service
  app: ms-front
  env: production

```

2. **Service**

3. **Ingress**

4. **Secrets**

💡 These files varies from a service to an other depnding on its requirements

####  HELM Chart    
I used Helm Charts to facilitate the use of Terraform microstacks when installing the infrastructure and the app 
The helm chart can be configured through this file ```values.yaml``` fot it to be more generic and empowers scalability and maintenability.

```

deployment:
  replicas: 3
image:
  tag: latest
  authname: oumaimakboubi/ms-auth:latest
  reservationname: oumaimakboubi/ms-reservation:latest
  frontname: oumaimakboubi/ms-front:latest
http:
  frontendport: 4200
  authport: 3001
  reservationport: 3002
labelsAuth:  # This is a way to add arbitrary labels to the deployments
  app: ms-auth
  env: production
labelsRes:
  app: ms-reservation
  env: production
labelsFront:
  app: ms-front
  env: production
  
```


Concerning the deployment strategy I couldn't work on that due to time contraint but I choose a blue/green deployment because I want to maintain two identical production environments. The use case of this app consists on having an app that is always up and running especially during the national and international camps ( A/B testing won't be the best choice in this case). So during the deployment i need to have one  environment which is the active environment (blue) and the other is inactive (green). During an update I wanted the new version deployed and tested and redirecting the user's traffic after it has been verified to be working as it should.

<p align="right">(<a href="#here"> Go to the 🔝</a>)</p>

## CI pipeline ♾️

The project pipeline code can be found under `.github/workflows`, this is a simple pipeline that just ensures at each push command to the github repo to build the image then save it in the DOCKERHUB repo.

* All the jobs are running in parrallel in order to make the image building and pushing musch faster.

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/CI.png)

* These are the images in the Dokerhub repo

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/images.png)


## The App frontend Overview💻
##### ( in case when you saw the repository i run out of credit 🤷🏼‍♀️)

* *Login Page*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/login.png)

* *Register Page*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/register.png)

* *My Space Page*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/myspace.png)

* *Add Memory Page*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/add.png)

* *Edit Memory Page*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/edit.png)

* *Commun Memories Space Page*

![image](https://github.com/oumaima-kboubi/Scouts-Tunisia-Camp-System/blob/master/img/all%20memories.png)


<p align="right">(<a href="#here"> Go to the 🔝</a>)</p>

## Contact 📞

📧 Oumaima Kboubi - Kaboubioumaima@gmail.com

 My [CV](https://oumaimakboubi.webipie.me)  Website






