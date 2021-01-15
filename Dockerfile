# start an official go which installs golang and sets GOPATH
FROM golang:1.11 AS build-env
# copy the ca-certificates.crt from our machine into our container
ADD ca-certificates.crt /etc/ssl/certs/

COPY . /go/src/github.com/khaiphong/personaai
WORKDIR /go/src/github.com/khaiphong/personaai

# get all dependencies and compile go program
RUN go get -d -v ./...
# Run go install -v ./...
RUN go build -o main .

# the mount point for different containers in the same machine
VOLUME /khaiphong/personadb

# run personadb - a REST API - when the container launches
CMD ["/go/src/github.com/khaiphong/personaai/main"]

# Make port 8082 available to the world outside this container
EXPOSE 8082

# package the image in alpine for image built and serviced from personadb
#FROM 1.11.0-alpine
#COPY --from=build-env /go/src/github.com/khaiphong/personaai \
#                      /go/src/github.com/khaiphong/personaai

#RUN chown nobody:nogroup /go/src/github.com/khaiphong/personaai
#USER nobody

