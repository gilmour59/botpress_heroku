FROM botpress/server:v12_9_1
ADD . /botpress
WORKDIR /botpress
CMD ["./bp"]