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

2.  kubectl apply -f deployment.yml

3.  kubectl apply -f service.yml

4.  minikube start

5.  minikube service kubetest

6.  Application will run on the url given under URL