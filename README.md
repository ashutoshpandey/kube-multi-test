# Setup on linux

1. Install Docker, Kubernetes and Minikube

2. Configure docker for permissions:

    sudo groupadd docker

    sudo usermod -aG docker $USER

    Reboot ubuntu

3.  Test with following command:

    docker run hello-world

# Running client and server

1.  From kube-multi-client folder

    docker build . -t <username>/<projectname>:<tagname>

    docker push <username>/<projectname>:<tagname>

2.  From kube-multi-server folder

    docker build . -t <username>/<projectname>:<tagname>

    docker push <username>/<projectname>:<tagname>

3.  minikube start

4.  kubectl apply -f k8s/namespace.yml
    kubectl apply -f k8s/db.yml
    kubectl apply -f k8s/db-secret.yml
    kubectl apply -f k8s/db-configmap.yml
    kubectl apply -f k8s/server.yml
    kubectl apply -f k8s/client.yml

    OR

    ./apply.sh

5.  Application will run on the url given under URL


# Important

  To connect angular with nodejs, do following steps:

  1. Make sure nodejs pod/service is running
  
  2. Run following command to get nodejs url

     `minikube service multi-server-service`

     This will return something like this:

     |-----------|----------------------------|-------------|---------------------------|
     | NAMESPACE |            NAME            | TARGET PORT |            URL            |
     |-----------|----------------------------|-------------|---------------------------|
     | default   | multi-server-service       |        5000 | http://192.168.49.2:31112 |
     |-----------|----------------------------|-------------|---------------------------|

     Use this URL in angular: http://192.168.49.2:31112

  3. To connect nodejs with postgres,      
     
     Put username, password in `db-secret.yml` file in `base64 encoded` form

     Put host, database, port in `db-configmap.yml` configuration file.
     Note: `dbhost` value will be the name of service in `db.yml`
 
  4. Kubernetes expects data in `db-secret` file in base64 string and provides implicitly decoded value when read in application.


# Sample SQL

`create table employees(id int, name varchar(256), gender varchar(20));`

`insert into employees values(1, 'abc', 'male');`
`insert into employees values(2, 'xyz', 'female');`
