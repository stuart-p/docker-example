# Dockerised Express Server Example

This repository contains a basic example of a Dockerised Express server using `docker-compose`.

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/docker-one.git
   cd docker-one
   ```

2. Build and start the containers:

   ```bash
   docker-compose up --build
   ```

3. Access the server:
   The Express server will be running at `http://localhost:3000`.

## Stopping the Containers

To stop the containers, run:

```bash
docker-compose down
```

## Project Structure

```
.
├── docker-compose.yml   # Docker Compose configuration
├── api/                 # Source code for the Express server
│   ├── Dockerfile       # Dockerfile for the Express server
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.
