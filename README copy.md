docker build -t nam2302/k10-fe .
docker login -u "myusername" -p "mypassword" docker.io
docker push nam2302/k10-fe:latest
