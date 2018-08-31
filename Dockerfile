# start at golang varsion but use /khaiphong/personadb as its storage
FROM golang:1.10.3 AS build-env
# copy the ca-certificates.crt from our machine into our container
ADD ../personadb/ca-certificates.crt /etc/ssl/certs/

COPY . /go/src/github.com/khaiphong/personaai
# set working directory in container, mimic src directory github for production.
WORKDIR /go/src/github.com/khaiphong/personaai

# get all dependencies including tensorflow and compile go program.
RUN go get .
RUN go build -o main . 

# the mount point for different containers in the same machine
VOLUME /khaiphong/personadb

# run personaai - a REST API - when the container launches
CMD ["/go/src/github.com/khaiphong/personaai/main"]

# Make port 8080 available to the world outside this container
EXPOSE 8080

# package the image in alpine for image built and serviced from personaai
FROM alpine
COPY --from=build-env /go/src/github.com/khaiphong/personaai \
                      /go/src/github.com/khaiphong/personaai

RUN chown nobody:nogroup /go/src/github.com/khaiphong/personaai
USER nobody

