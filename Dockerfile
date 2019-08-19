FROM python:3.7-alpine

COPY . /usr/workspace/playground

WORKDIR /usr/workspace

CMD python -m http.server && echo "Playground is running successfully"